import React, { useEffect, useState } from 'react';
import { Button, Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
import { ButtonType } from 'antd/es/button';
import useReportStore from './store/useReportStore';

interface BtnProps {
  label: string,
  textColor?: string,
  bgColor?: string,
  onClick(): void,
}

const CheckBtn = (props: BtnProps) => {

  const { report } = useReportStore();
  const [checked, setChecked] = useState(false);

  const { label, textColor,  onClick } = props;

  const toggleChecked = () => {
    setChecked(!checked);
    onClick();
  };

  useEffect(() => {
    setChecked(false);
  }, [report])

  let btnStyle: ButtonType = 'default';
  if(checked) {
    btnStyle = "primary";
  }

  return (
      <p>
        <Button type={btnStyle} size="large" onClick={toggleChecked} style={{color: textColor}}>
          {label}
        </Button>
      </p>
  );
};

export default CheckBtn;