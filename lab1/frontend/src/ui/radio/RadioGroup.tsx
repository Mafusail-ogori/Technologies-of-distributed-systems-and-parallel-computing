import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { RadioData } from "../../models/RadioData";
import { capitalizeFirstLetter } from "../../utils/capitalizeUtil";
import { ChangeEvent } from "react";

export const RadioGroupContainer: React.FC<{
  radioData: RadioData;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}> = ({ radioData, onChange }) => {
  return (
    <FormControl>
      <h1>{radioData.label}</h1>
      <RadioGroup name={radioData.name} row onChange={onChange}>
        {radioData.radioOptions.map((radioOption, index) => (
          <FormControlLabel
            value={radioOption}
            key={index}
            control={<Radio />}
            label={capitalizeFirstLetter(radioOption)}
            sx={{
              fontWeight: "600",
            }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
