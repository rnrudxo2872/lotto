import { useState } from "react";
import style from "./App.module.css";

function App() {
  const [numbers, setNumbers] = useState<number[]>();

  const generateNumbers = () => {
    const lottoList = Array.from({ length: 45 }, (_, i) => i + 1);
    const selectList = Array.from({ length: 5 }, () => 0).map((_, i) => {
      const randomIdx = Math.floor(Math.random() * 45);
      const selectIdx = Math.max(0, Math.min(lottoList.length - (1 + i), randomIdx));

      const selectNumber = lottoList[selectIdx] * 1;
      lottoList.splice(selectIdx, 1);

      return selectNumber;
    });

    setNumbers(selectList);
  };

  return (
    <div className="App">
      <div>
        <div className="lotto-circle__wrapper">
          {numbers?.map((item, idx) => (
            <div key={idx} className="lotto__circle">
              {item}
            </div>
          ))}
        </div>
        <button className={style["lotto-gen__btn"]} onClick={generateNumbers}>
          번호 추첨하기
        </button>
      </div>
    </div>
  );
}

export default App;
