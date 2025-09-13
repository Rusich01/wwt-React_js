import { t } from "i18next";
import Button from "./Button";

const ModalWindow = ({ setFinalModal, closeAllWindow }) => {
  return (
    <div className="z-70 w-1/2  border rounded-[10px] p-[15px] text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white font-extrabold tracking-[0.5px]">
      <p> {t("final_model")}</p>
      <div className="mt-[10%] flex justify-between">
        <Button
          onClick={closeAllWindow}
          text={t("yes")}
          id="yes"
          className="cursor-pointer transform transition-transform duration-200 
            hover:scale-[1.1]"
        />
        <Button
          onClick={() => setFinalModal(false)}
          text={t("cancel")}
          id="cancel"
          className="cursor-pointer transform transition-transform duration-200 
            hover:scale-[1.1]"
        />
      </div>
    </div>
  );
};

export default ModalWindow;
