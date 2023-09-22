import { useState } from "react";
import Input from "./components/Input";
import useCurrencyInfo from "./custom_hooks/useCurrencyinfo";
import BackgroundImage from "./assets/back.jpg"

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [conAmount, setConAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  // console.log(Object.keys(currencyInfo));

  const Swap = () => {
    setFrom(to);
    setTo(from);
    setConAmount(amount);
    setAmount(conAmount);
  };

  const convert = () => {
    setConAmount(amount * currencyInfo[to]);
    console.log(currencyInfo[to])
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${BackgroundImage}')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <Input
                  label={from}
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={Swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <Input
                  label={to}
                  amount={conAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

// import React from 'react'

// const App = () => {

//   return (
//     <div>

//     </div>
//   )
// }

// export default App
