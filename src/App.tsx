import { useState } from "react";

import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "weight") {
      setWeight(Number(value));
    } else if (name === "height") {
      setHeight(Number(value));
    }
  };

  const calculateBmi = () => {
    const newBmi = weight / (((height / 100) * height) / 100);
    setBmi(newBmi);
  };

  return (
    <>
      <div className="bg-zinc-600">
        <div className="flex flex-col items-center justify-center h-screen text-white">
          <h1 className="text-5xl m-10 font-bold font-Kanit text-center">
            BMI Calculator
          </h1>
          <p className="font-itim text-xl">โปรแกรมคำนวณค่าดัชนีมวลกาย - BMI</p>

          <div className="font-itim mt-5">
            <div className="flex items-center mb-6">
              <label htmlFor="weight" className="mb-0 mr-2">
                น้ำหนัก (kg)
              </label>
              <input
                type="text"
                name="weight"
                id="weight"
                placeholder=" ป้อนน้ำหนักของคุณ"
                className="text-black"
                onChange={handleOnChange}
              />
            </div>

            <div className="flex items-center mb-6">
              <label htmlFor="height" className="mb-0 mr-2 ">
                ส่วนสูง (cm)
              </label>
              <input
                type="text"
                name="height"
                id="height"
                placeholder=" ป้อนส่วนสูงของคุณ"
                className="text-black"
                onChange={handleOnChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="font-itim bg-zinc-800 hover:bg-zinc-900 ford-bold py-2 px-4 rounded"
            onClick={calculateBmi}
          >
            คำนวณ
          </button>
          {bmi > 0 && (
            <div className="rounded py-5 px-10 bg-white my-10 text-black ">
              <p className="font-itim text-xl">
                ค่า BMI ของคุณคือ: {bmi.toFixed(2)}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
