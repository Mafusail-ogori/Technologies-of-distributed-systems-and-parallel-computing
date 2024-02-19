import { Input } from "../ui/inputs/Input";
import { WorkScenario } from "../models/RadioScenarios";
import { ChangeEvent, useCallback, useState } from "react";
import { DropFile } from "../ui/inputs/DropFile";

export const InputSwitcher: React.FC<{ radioScenario: string }> = ({
  radioScenario,
}) => {
  const [pickedFileName, setPickedFileName] =
    useState<string>("No file picked");

  const [numbers, setNumbers] = useState<string>("");

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNumbers(event.target.value);
  };

  const onDrop = useCallback((acceptedFiles: any) => {
    setPickedFileName(acceptedFiles[0].path);
  }, []);

  return (
    <>
      {radioScenario === WorkScenario.Auto && (
        <>
          <h3>
            Enter amount of numbers you want to generate, and press Submit
            button
          </h3>
          <Input
            onChange={inputChangeHandler}
            label="Amount"
            placeholder="100..."
          />
        </>
      )}
      {radioScenario === WorkScenario.Manual && (
        <>
          <h3>Enter numbers you want to sort and press Submit button</h3>
          <Input
            onChange={inputChangeHandler}
            label="Numbers"
            placeholder="1 , 2 , 45 ..."
          />
        </>
      )}
      {radioScenario === WorkScenario.File && (
        <>
          <h3>
            Drop or attach file with numbers you want to sort and press Submit
            button
          </h3>
          <DropFile onDrop={onDrop} pickedFileName={pickedFileName} />
        </>
      )}
    </>
  );
};
