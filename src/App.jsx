import { useState } from "react";
import "./App.css";
import Main from "./UI/Main";
import useStore from "./store/CategoryStore";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import LOCALS from "./i18n/constants";

function App() {
  const { t } = useTranslation();
  const { selectCategory, resultDataModal } = useStore();
  const [modal, setModal] = useState(false);

  return (
    <div>
      <section
        className={
          modal
            ? "opacity-0 w-full  flex  flex-col items-center justify-center "
            : "w-full  flex  flex-col items-center justify-center  h-[95dvh]"
        }
      >
        <h1 className="text-6xl text-gray-600 mb-12">{t("header_h1")}</h1>

        <button
          className="cursor-pointer border border-black p-2 text-gray-600 rounded-[10px]"
          onClick={() => setModal((prev) => !prev)}
        >
          {t("open_modal")}
        </button>
      </section>
      {modal && <Main closeModal={setModal} />}
      {resultDataModal && (
        <p>{selectCategory.map((el) => JSON.stringify(el.name, null, 2))}</p>
      )}
      <a
        className="absolute top-4 left-4"
        target="_blank"
        href="https://github.com/Rusich01/wwt-React_js.git"
      >
        {t("link project")}
      </a>
      <div className="absolute top-0.5 right-5 flex ">
        <img
          disabled={i18n.language === LOCALS.UK}
          onClick={() => {
            i18n.changeLanguage(LOCALS.UK);
          }}
          className="w-8 mr-4  cursor-pointer"
          src="https://www.svgrepo.com/show/405641/flag-for-flag-ukraine.svg"
          alt="flagUK"
        />

        <button></button>
        <img
          disabled={i18n.language === LOCALS.EN}
          onClick={() => {
            i18n.changeLanguage(LOCALS.EN);
          }}
          className="w-8 mr-4  cursor-pointer"
          src="https://www.svgrepo.com/show/405643/flag-for-flag-united-kingdom.svg"
          alt="flagEN"
        />
      </div>
    </div>
  );
}

export default App;
