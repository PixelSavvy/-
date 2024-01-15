import { useState } from "react";
import useContentful from "@/hooks/useContentful";

import styles from "./Counter.module.css";
import Section from "@/components/ui/section";
import CounterItem from "./CounterItem";

import { counterDataTypes } from "@/types/counterDataTypes";

const Counter = () => {
  const [counterData, setCounterData] = useState<counterDataTypes[]>([]);

  const query = "counter";
  const setStateFunction = setCounterData;

  const {} = useContentful<counterDataTypes[]>({
    query,
    setStateFunction,
  });

  return (
    <Section>
      <ul
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-16 sm:flex-row bg-muted ${styles.bleed} `}
      >
        {counterData.map((counter, id: number) => (
          <CounterItem counter={counter} key={id} id={id} />
        ))}
      </ul>
    </Section>
  );
};

export default Counter;
