import React, { useState } from 'react';
import { Button, Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
import { ButtonType } from 'antd/es/button';

interface BtnProps {
  label: string,
  textColor?: string,
  bgColor?: string,
}

const CheckBtn = (props: BtnProps) => {
  const [checked, setChecked] = useState(false);

  const { label, textColor, bgColor } = props;

  // const bgColor = 'orange'

  const toggleChecked = () => {
    setChecked(!checked);
  };

  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log('checked = ', e.target.checked);
    setChecked(e.target.checked);
  };

  // const label = `${checked ? 'Checked' : 'Unchecked'}`;

  let btnStyle: ButtonType = 'default';
  if(checked) {
    btnStyle = "primary";
  }

  return (
      <p>
        <Button type={btnStyle} size="large" onClick={toggleChecked} style={{color: textColor, background: bgColor}}>
          {label}
        </Button>
      </p>
  );
};

export default CheckBtn;