import { Input } from "../ui/inputs/Input";
import { WorkScenario } from "../models/RadioScenarios";
import { DropFile } from "../ui/inputs/DropFile";
import { Handler } from "../models/Handler";

export const InputSwitcher: React.FC<{
  radioScenario: string;
  handlers: Handler;
}> = ({ radioScenario, handlers }) => {
  return (
    <>
      {radioScenario === WorkScenario.Auto && (
        <>
          <h3>
            Enter amount of numbers you want to generate, and press Submit
            button
          </h3>
          <Input
            onChange={handlers.onAmountChange}
            label="Amount"
            placeholder="100..."
          />
        </>
      )}
      {radioScenario === WorkScenario.Manual && (
        <>
          <h3>Enter numbers you want to sort and press Submit button</h3>
          <Input
            onChange={handlers.onNumbersChange}
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
          <DropFile
            onDrop={handlers.onDrop}
            pickedFileName={handlers.pickedFileName}
          />
        </>
      )}
    </>
  );
};
