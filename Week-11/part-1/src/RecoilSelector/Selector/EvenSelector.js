import { selector } from "recoil";
import counter from "../Counter";

const EvenSelector = selector({
  key: "isEvenSelector",
  get: ({ get }) => {
    //get key => take get function as a argument
    const currentCount = get(counter);
    const isEven = currentCount % 2 == 0;
    return isEven;
  },
});

export default EvenSelector;
