import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

export const Input: React.FC<{
  placeholder?: string;
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  label?: string;
  value?: string;
  required?: boolean;
}> = ({
  placeholder,
  className,
  onChange,
  readOnly,
  label,
  value,
  required,
}) => {
  return (
    <TextField
      required={required}
      label={label}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      inputProps={{ readOnly: readOnly }}
      variant="outlined"
      value={value}
      sx={{
        minWidth: "100%",
      }}
    />
  );
};
