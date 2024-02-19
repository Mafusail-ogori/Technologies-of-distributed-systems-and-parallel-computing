import { WrapperCard } from "../ui/wrappers/WrapperCard";
import { RadioGroupContainer } from "../ui/radio/RadioGroup";
import { radioData } from "../data/radioData";
import { InputSwitcher } from "./InputSwitcher";
import { ChangeEvent, useState } from "react";

export const InputForm = () => {
  const [scenario, setScenario] = useState<string>("manual");

  const scenarioClickHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setScenario(event.target.value);
  };

  return (
    <WrapperCard>
      <RadioGroupContainer
        radioData={radioData}
        onChange={scenarioClickHandler}
      />
      <InputSwitcher radioScenario={scenario} />
    </WrapperCard>
  );
};
