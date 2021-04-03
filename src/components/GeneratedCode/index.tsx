import React from 'react';

interface GeneratedCode {
  code: string;
}

export const GeneratedCode: React.FC<GeneratedCode> = ({ code }) => {
  return (
    <div className="GeneratedCode">
      <div className="GeneratedCodeArea" id="CodeText">
        {code}
      </div>
    </div>
  );
};
