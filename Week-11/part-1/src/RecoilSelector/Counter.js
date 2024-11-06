import { atom } from "recoil";

const Counter = atom({
  key: "counter",
  default: 0,
});

export default Counter;
