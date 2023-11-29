import { api } from "@/api/api";
import { IPeople, IResponse } from "@/types/peopleData";
import { getDataFromLS, saveDataToLS } from "@/utils/localStorage";
import { makeAutoObservable, runInAction } from "mobx";

class PeoplesStore {
  constructor() {
    makeAutoObservable(this);
    this.updateDataFromLS();
  }

  isLoading: boolean = false;
  people: IPeople[] = [];
  totalCount: number | null = 0;
  error: string | null = null;
  nextPage: number | null = 1;
  search: string = "";

  getData = async () => {
    await this.handleDataLoading(api.getData);
  };

  loadMore = async () => {
    if (this.nextPage !== null) {
      await this.handleDataLoading(api.getData, this.nextPage);
    }
  };

  setSearch = (value: string) => {
    this.search = value;
  };

  addItem = (obj: IPeople) => {
    this.people = [...this.people, obj];

    if (this.people.length === 1) {
      this.nextPage = 1;
    }

    saveDataToLS(this.people, "people");
  };

  removeItem = (key: string) => {
    this.people = this.people.filter((item) => item.created !== key);

    saveDataToLS(this.people, "people");
  };

  setsortedArrayToLS = (arr: IPeople[]) => {
    saveDataToLS(arr, "people");
  };

  clearData = () => {
    this.people = [];
    this.nextPage = null;
    this.totalCount = 0;

    localStorage.clear();
  };

  private handleDataLoading = async (
    apiCall: (page?: number | null | undefined) => Promise<IResponse>,
    nextPage?: number | null
  ) => {
    this.isLoading = true;
    this.error = null;

    try {
      const data = await apiCall(nextPage);

      runInAction(() => {
        if (nextPage !== null) {
          this.people = [...this.people, ...data.results];
        } else {
          this.people = data.results;
        }

        saveDataToLS(this.people, "people");

        this.totalCount = data.count;
        saveDataToLS(data.count, "totalCount");

        this.nextPage = data.next !== null ? +data.next.split("=")[1] : null;
        saveDataToLS(this.nextPage, "nextPage");
      });
    } catch (error) {
      runInAction(() => {
        this.error =
          error instanceof Error
            ? error.message
            : "Что-то пошло не так при загрузке данных";
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  private updateDataFromLS = () => {
    const people = getDataFromLS<IPeople[]>("people", []);
    const nextPage = getDataFromLS<number>("nextPage", 1);
    const totalCount = getDataFromLS<number>("totalCount");

    if (people) this.people = people;
    if (nextPage) this.nextPage = nextPage;
    if (totalCount) this.totalCount = totalCount;
  };
}

export default new PeoplesStore();
