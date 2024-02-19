import { useDropzone } from "react-dropzone";
import classes from "./DropFile.module.css";

export const DropFile: React.FC<{ onDrop: any; pickedFileName: string }> = ({
  onDrop,
  pickedFileName,
}) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div {...getRootProps()} className={classes["drop-zone-container"]}>
      <div {...getInputProps} className={classes["drop-zone"]}>
        <span>{pickedFileName}</span>
        <span>{isDragActive && "Drag file here"}</span>
      </div>
    </div>
  );
};
