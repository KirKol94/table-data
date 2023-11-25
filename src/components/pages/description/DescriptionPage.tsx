import classes from "./Description.module.scss";

const DescriptionPage = () => {
  return (
    <div className={classes.page}>
      <h1 className={classes.title}>
        Тестовое задание на должность React-разработчика.
      </h1>

      <div className="descr__container">
        <p className={classes.text}>
          В тестовом задании представлены обязательные и дополнительные пункты.
          Чтобы тестовое задание считалось выполненным, необходимо реализовать
          обязательные пункты. Дополнительные пункты можно делать по желанию в
          любом количестве, их выполнение будет говорить о вашем
          профессиональном уровне. В соответствии со сложностью выполнения
          заданий нами будут оценены ваши компетенции и выдвинуто
          соответствующее зарплатное предложение.
        </p>

        <p className={classes.text}>
          Необходимо с помощью библиотеки React реализовать небольшое
          приложение, которое выводит данные, полученные с помощью API запросов,
          в таблицу. Вы можете использовать любой доступный API (например{" "}
          <a href="https://swapi.dev/">https://swapi.dev/</a>).
        </p>

        <h2 className={classes.subtitle}>Обязательные пункты (уровень 1):</h2>

        <p className={classes.text}>
          • Приложение написано исключительно на функциональных компонентах
          (хуках).
          <br />• Присутствует минимальная верстка – дизайн также остается на
          ваше усмотрение. Запрещено использовать библиотеки компонентов.
          <br />• Реализовать кнопку, которая при нажатии отправляет запрос на
          получение данных с сервера.
          <br />• При успешном выполнении запроса вывести данные в таблицу 5х10
          (без учета заголовков). Какие данные выводить – на ваше усмотрение.
          <br />• Реализовать кнопку очистки таблицы. При нажатии на нее, все
          данные из таблицы должны очиститься до нового запроса.
          <br />• До отправки запроса и при полной очистке таблицы выводить
          заглушку / подсказку об отсутствии загруженных данных.
        </p>

        <h2 className={classes.subtitle}>Обязательные пункты (уровень 2):</h2>

        <p className={classes.text}>
          • Код написан на typescript’e.
          <br />• Реализовать механизм управления состоянием приложения. Что
          должно храниться в состоянии – на ваш выбор. Разрешено использовать
          библиотеки (предпочтение отдать MobX).
          <br />• Каждую строку таблицы можно удалить отдельно. Перед удалением
          выводить модальное окно для пользователя с кнопками подтверждения,
          либо отмены.
          <br />• Реализовать сортировку по клику на заголовок столбца
          (например, по алфавиту).
          <br />• Реализовать прелоадер загрузки данных.
          <br />• Реализовать механизм сохранения – перезагрузка не должна
          терять текущие данные страницы.
        </p>

        <h2 className={classes.subtitle}>Дополнительные пункты (уровень 3):</h2>

        <p className={classes.text}>
          • Строки таблицы можно перемещать между собой (механизм drag &amp;
          drop). Запрещено использовать библиотеки.
          <br />• Столбцы и строки можно ресайзить. Запрещено использовать
          библиотеки.
          <br />• Перезагрузка страницы не должна терять изменения, внесенные с
          помощью двух указанных выше механизмов.
          <br />• Реализовать пагинацию для таблицы. Для удобства можно выводить
          больше данных. Важно, чтобы пагинация осуществлялась в рамках одной
          страницы (без изменения URL’a).
          <br />• Добавить роутинг в приложение (Разрешено использовать
          библиотеки). Создать дополнительную страницу, которая содержит форму
          для ручного добавления новой строки в таблицу. В форме,
          соответственно, должно быть количество инпутов, соответствующее
          количеству заголовков колонок таблицы. Каждый инпут должен
          валидироваться как минимум на непустое значение. Если валидация
          заполненных данных не проходит – блокировать кнопку отправки формы.
          При успешном добавлении новой строки – выводить сообщение об успехе
          (как – на ваш выбор) и перенаправлять пользователя на страницу с
          таблицей, в которой уже должна быть добавленная строка.
        </p>
      </div>
    </div>
  );
};

export default DescriptionPage;
