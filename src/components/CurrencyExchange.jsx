import { useContext, useRef } from "react";
import BtnIcon from "../assets/submit-icon.svg";
import { CryptoContext } from "../context/CryptoContext";

const CurrencyExchange = () => {
  const { setCurrency } = useContext(CryptoContext);
  const currencyRef = useRef(null);

  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    let val = currencyRef.current.value;
    setCurrency(val);
  };

  return (
    <div className="">
      <form
        onSubmit={handleCurrencySubmit}
        className="relative flex justify-center items-center"
      >
        <label htmlFor="currency" className="relative flex justify-center items-center
          mr-2 font-bold">
          Currency:
        </label>
        <input
          ref={currencyRef}
          className="w-16 rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-lightgreen"
          placeholder="usd"
          name="currency"
          type="text"
        />
        <button type="submit" className="ml-1">
          <img src={BtnIcon} alt="submit" srcset="" />
        </button>
      </form>
    </div>
  );
};

export default CurrencyExchange;
