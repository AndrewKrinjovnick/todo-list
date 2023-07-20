import { RadioButton } from "components/ui/RadioButton";
import { useState } from "react";
import { SectionWrapper } from "../SectionWrapper";
import { activeTabMap, tabs } from "./TodoList.constants";
import styles from "./TodoList.module.scss";

export const TodoList = () => {
  const [tab, setTab] = useState(tabs[0].value);

  const onTab = (event) => {
    setTab(event.target.value);
  };

  return (
    <SectionWrapper
      title="Список задач"
      auxiliaryHeader={
        <div className={styles.tabs}>
          {tabs.map(({ label, value }) => (
            <RadioButton
              key={value}
              onChange={onTab}
              value={value}
              checked={value === tab}
            >
              {label}
            </RadioButton>
          ))}
        </div>
      }
    >
      {activeTabMap[tab]}
    </SectionWrapper>
  );
};
