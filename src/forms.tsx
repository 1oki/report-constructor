import React from 'react';
import { Button, Flex, FlexProps, Input, Checkbox, Form} from 'antd';
import type { FormProps } from 'antd';
import CheckBtn from './checkbox';

type FieldType = {
    username?: string;
    driverReport?: string;
    redIcons?: boolean;
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


const Forms: React.FC = () => {

    const containerStyle: React.CSSProperties = { 
        width: '100%',
        color: 'white',
      };

    const boxStyle: React.CSSProperties = { 
        marginTop: '50px',
        width: '33%',
        height: 120,
        borderRadius: 6,
        border: '1px solid #777',
        color: 'white',
      };

    const tramNumber: React.CSSProperties = { 
        marginTop: '50px',
        width: '24%',
        height: 120,
        borderRadius: 6,
        border: '1px solid #777',
      };

    return (
        <Form style={containerStyle}
            name="basic"
            // initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <div style={{marginTop: '10px'}}>
                <Input size="large" placeholder="Tram №" width={'300px'}/>
            </div>
            <div style={{marginTop: '20px'}}>
                <h1>Driver Report</h1>
            </div>
            <div style={{marginTop: '10px'}}>
                <Form.Item<FieldType>
                    name="redIcons"
                    valuePropName="unchecked"
                >
                    <Checkbox style={{color: 'white'}}>checkbox</Checkbox>
                    <CheckBtn />
                </Form.Item>
            </div>
            <div style={{marginTop: '10px'}}>
                <Form.Item<FieldType>
                    // label="Driver Report"
                    name="driverReport"
                    >
                    <Input size="large" placeholder="Driver Report"/>
                </Form.Item>
            </div>
            
                <Flex gap="middle" align="start" vertical>
                    <Flex style={containerStyle} justify={'space-around'} align={'flex-start'}>
                        <div style={boxStyle}> 
                            <h1>Master</h1>
                        </div>
                        <div style={boxStyle}> 
                            <h1>Slave</h1>
                        </div>
                        <div style={boxStyle}> 
                            <h1>Nav</h1>
                        </div>
                        
                    {/* <Button type="primary">Primary</Button>
                    <Button type="primary">Primary</Button>
                    <Button type="primary">Primary</Button>
                    <Button type="primary">Primary</Button> */}
                </Flex>
            </Flex>

            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        
    );

    // return (
        
    //     <div>
    //         <p>forms</p> 
    //     </div>
    // )
}

export default Forms;