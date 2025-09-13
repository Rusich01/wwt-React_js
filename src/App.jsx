import { useState } from "react";
import "./App.css";
import Main from "./UI/Main";
import useStore from "./store/CategoryStore";

function App() {
  const { selectCategory, resultDataModal } = useStore();
  const [modal, setModal] = useState(false);
  return (
    <>
      <section
        className={
          modal
            ? "opacity-0 w-full  flex  flex-col items-center justify-center "
            : "w-full  flex  flex-col items-center justify-center  h-[95dvh]"
        }
      >
        <h1 className="text-6xl text-gray-600 mb-12">
          WinWinTravel frontend test task
        </h1>

        <button
          className="cursor-pointer border border-black p-2 text-gray-600"
          onClick={() => setModal((prev) => !prev)}
        >
          modal window
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
        Link project
      </a>
    </>
  );
}

export default App;
