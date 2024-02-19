import { RadioData } from "../models/RadioData";
import { WorkScenario } from "../models/RadioScenarios";

export const radioData: RadioData = {
  label: "Choose work scenario",
  name: "scenario-picker",
  radioOptions: [WorkScenario.Manual, WorkScenario.Auto, WorkScenario.File],
};
