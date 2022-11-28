import { useState, useRef, useMemo } from "react";

import "./default.css";
import style from "./App.module.css";
import LotteryCircle from "./components/lotteryCircle";

const INIT_NUMBERS = [0, 0, 0, 0, 0];

function App() {
  const [numbers, setNumbers] = useState<number[]>(INIT_NUMBERS);
  const isUnSet = useRef<boolean>(true);
  const circles = useMemo(
    () => numbers?.map((item, idx) => <LotteryCircle key={idx}>{isUnSet.current ? null : item}</LotteryCircle>),
    [numbers]
  );

  const generateNumbers = () => {
    isUnSet.current = false;

    const lottoList = Array.from({ length: 45 }, (_, i) => i + 1);
    setNumbers((numbers) =>
      numbers.map((_, i) => {
        const randomIdx = Math.floor(Math.random() * 45);
        const selectIdx = Math.max(0, Math.min(lottoList.length - (1 + i), randomIdx));

        const selectNumber = lottoList[selectIdx] * 1;
        lottoList.splice(selectIdx, 1);

        return selectNumber;
      })
    );
  };

  return (
    <div className={style["App"]}>
      <div className={style["lotto__app"]}>
        <div className={style["lotto-circle__wrapper"]}>{circles}</div>
        <button className={style["lotto-gen__btn"]} onClick={generateNumbers}>
          번호 추첨하기
        </button>
      </div>
    </div>
  );
}

export default App;
