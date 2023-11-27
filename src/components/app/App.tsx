import { Suspense, lazy } from "react";
import { Header } from "@/components/header";
import { Navigate, Route, Routes } from "react-router-dom";
import { Loader } from "@/components/loader";

const HomePage = lazy(() => import("@/pages/home/HomePage"));
const DescriptionPage = lazy(
  () => import("@/pages/description/DescriptionPage")
);
const CreatePage = lazy(() => import("@/pages/create/Create"));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="description" element={<DescriptionPage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
