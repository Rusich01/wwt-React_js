import Label from "../components/Label";
import Input from "../components/Input";
import useStore from "../store/CategoryStore";
import { useEffect, useState } from "react";
import ModalWindow from "../components/ModalWindow";

const Main = ({ closeModal }) => {
  const [finalModal, setFinalModal] = useState(false);

  const {
    dataItems,
    loading,
    fetchData,
    selectCategory,
    setSelectCategory,
    setResultDataModal,
  } = useStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const closeAllWindow = () => {
    setFinalModal(false);
    closeModal(false);
    setResultDataModal(true);
  };

  const handleCheckboxChange = (e) => {
    const clickId = e.target.id.toLowerCase();

    const selectedOption = dataItems
      .flatMap((cat) => cat.options || [])
      .find((option) => option.id.toLowerCase() === clickId);

    if (!selectedOption) return;

    const exists = selectCategory.some((item) => item.id === selectedOption.id);

    if (exists) {
      setSelectCategory(
        selectCategory.filter((item) => item.id !== selectedOption.id)
      );
    } else {
      setSelectCategory([...selectCategory, selectedOption]);
    }
  };

  const cleanChecked = () => {
    setSelectCategory([]);
  };

  return (
    <>
      {finalModal && (
        <ModalWindow
          setFinalModal={setFinalModal}
          closeAllWindow={closeAllWindow}
        />
      )}

      {loading ? (
        <p className="z-70 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
          Loading ...
        </p>
      ) : (
        <div>
          <div className=" fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div
              className={
                finalModal
                  ? " opacity-15 bg-white w-[800px] max-h-[90vh] overflow-y-auto rounded-xl shadow-xl"
                  : "bg-white w-[800px] max-h-[90vh] overflow-y-auto rounded-xl shadow-xl"
              }
            >
              {/* Header */}
              <header className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-semibold">Filter</h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => closeModal((prev) => !prev)}
                >
                  ✕
                </button>
              </header>

              <main className="p-6 space-y-8">
                {dataItems.map((cat) => (
                  <section key={cat.id}>
                    <h3 className="font-medium mb-3">{cat.name}</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {cat.options?.map((opt) => (
                        <Label key={opt.id} labelText={opt.name}>
                          <Input
                            inputType="checkbox"
                            inputId={opt.id}
                            checked={selectCategory.some(
                              (item) => item.id === opt.id
                            )}
                            onChange={handleCheckboxChange}
                          />
                        </Label>
                      ))}
                    </div>
                  </section>
                ))}
              </main>

              {/* Footer */}
              <footer className="flex items-center justify-between p-4 border-t">
                <button
                  onClick={cleanChecked}
                  className="text-sm text-gray-600 hover:underline"
                >
                  Clear all filters
                </button>
                <button
                  onClick={() => setFinalModal(true)}
                  className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600"
                >
                  Apply
                </button>
              </footer>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
