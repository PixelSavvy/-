import { useCountUp } from "use-count-up";
import { counterDataTypes } from "../../../types/counterDataTypes";
import useCounter from "@/hooks/useCounter";

interface CounterItemProps {
  counter: counterDataTypes;
  id: number;
}

const CounterItem: React.FC<CounterItemProps> = ({ counter, id }) => {
  const { isVisible, hasCounted, counterRef } = useCounter();

  const suffix = id === 1 || id === 2 ? "+" : id === 0 ? "%" : "";

  const { value } = useCountUp({
    isCounting: hasCounted,
    end: +counter.counterValue,
  });

  return (
    <li className="px-4 py-6 text-center shadow-lg rounded-xl lg:px-6 lg:py-8">
      <div ref={counterRef}>
        <span className="text-4xl lg:text-5xl font-tbc-caps-bld text-secondary">
          <span>
            {isVisible ? value : "0"}
            {suffix}
          </span>
        </span>
        <p>{counter.counterMeasurement}</p>
      </div>
    </li>
  );
};

export default CounterItem;
