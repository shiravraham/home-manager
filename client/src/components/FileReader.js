import React from "react";
import CSVReader from "react-csv-reader";

const FileReader = (props) => {
  const { onFileLoaded } = props;

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
  };

  return (
    <CSVReader
      cssClass="csv-reader-input"
      label="Upload CSV Files"
      onFileLoaded={(data, fileInfo, originalFile) =>
        onFileLoaded(data, fileInfo, originalFile)
      }
      parserOptions={papaparseOptions}
    />
  );
};

export default FileReader;
