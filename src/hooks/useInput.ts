import React, {useState} from 'react';

const useInput = (initialValue: string): [string, (text: string) => void] => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (text: string) => {
    setValue(text);
  };

  return [value, onChange];
};

export default useInput;
