import React, { useState } from 'react';
import { Button, Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';

const CheckBtn: React.FC = () => {
  const [checked, setChecked] = useState(true);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log('checked = ', e.target.checked);
    setChecked(e.target.checked);
  };

  const label = `${checked ? 'Checked' : 'Unchecked'}`;

    const btnStyle = checked === true ? 'type="primary"' : ''

  return (
    <>
      <p style={{ marginBottom: '20px' }}>
        {/* <Checkbox checked={checked} onChange={onChange}>
          {label}
        </Checkbox> */}
      </p>
      <p>
        <Button type="primary" size="small" onClick={toggleChecked} style={!checked ? 'color: "white"' : 'color: "red"'}>
          {!checked ? 'Check' : 'Uncheck'}
        </Button>
      </p>
    </>
  );
};

export default CheckBtn;