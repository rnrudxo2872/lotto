import { forwardRef, ComponentProps } from "react";

import style from "./lotteryCircle.module.css";
import appStyle from "../App.module.css";
import { useEffect } from "react";
import { useRef } from "react";

interface IProps extends ComponentProps<"div"> {}

const LotteryCircle = forwardRef<HTMLDivElement, IProps>((props, ref) => {
  const visible = useRef("");
  useEffect(() => {
    visible.current = appStyle["non_opacity"];
  }, []);

  return (
    <div ref={ref} className={style["lotto__circle"]}>
      <span className={[style["lotto__number"], visible.current].join(" ")}>{props.children}</span>
    </div>
  );
});

export default LotteryCircle;
