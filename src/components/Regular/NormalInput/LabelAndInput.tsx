import React from 'react';

interface LabelAndInput {
  title: string;
  value: string | number;
}

export const LabelAndInput: React.FC<LabelAndInput> = ({ title, value }) => {
  return (
    <>
      <label className="FormRollLabel">{title}</label>
      <input
        className="FormRollInput"
        type="text"
        name={title}
        value={value}
        readOnly
      />
    </>
  );
};
