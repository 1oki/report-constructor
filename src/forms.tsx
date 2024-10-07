import React, { useState } from 'react';
import { Button, Flex, FlexProps, Input, Checkbox, Form} from 'antd';
import type { FormProps } from 'antd';
import CheckBtn from './checkBtn';
import { report } from 'process';

type FieldType = {
    tramNumber: string,
    redIcons?: boolean,
    whiteIcons?: boolean,
    greenIcons?: boolean,
    driverReport?: string,

    issueMasterUnavailable?: boolean,
    issueMasterNpme?: boolean,
    issueMasterRedis?: boolean,
    issueMasterJetHard?: boolean,
    issueMasterDeserializer?: boolean,
    issueMasterNoVideo?: boolean,
    issueMasterCan?: boolean,
    issueMasterImu?: boolean,
    issueMasterMap?: boolean,

    issueSlaveUnavailable?: boolean,
    issueSlaveJetHard?: boolean,
    issueSlaveNoVideo?: boolean,
    issueSlaveDeserializer?: boolean,
    issueSlaveRadar?: boolean,

    issueNavGps?: boolean,
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    // setReport({
    //     ...report,

    // })
  };
  
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const { TextArea } = Input;


const Forms: React.FC = () => {

    const initialValues = {
        tramNumber: '',
        redIcons: false,
        whiteIcons: false,
        greenIcons: false,
        driverReport: '',

        issueMasterUnavailable: false,
        issueMasterNpme: false,
        issueMasterRedis: false,
        issueMasterJetHard: false,
        issueMasterDeserializer: false,
        issueMasterNoVideo: false,
        issueMasterCan: false,
        issueMasterImu: false,
        issueMasterMap: false,

        issueSlaveUnavailable: false,
        issueSlaveJetHard: false,
        issueSlaveNoVideo: false,
        issueSlaveDeserializer: false,
        issueSlaveRadar: false,

        issueNavGps: false,
    }

    const [ tramNumber, setTramNumber ] = useState(null)
    const [ redIcons, setRedIcons ] = useState(null)
    const [ whiteIcons, setWhiteIcons ] = useState(null)
    const [ greenIcons, setGreenIcons ] = useState(null)
    const [ driverReport, setDriverReport ] = useState(null)

    const [ issueMasterUnavailable, setIssueMasterUnavailable ] = useState(null)
    const [ issueMasterNpme, setIssueMasterNpme ] = useState(null)
    const [ issueMasterRedis, setIssueMasterRedis ] = useState(null)
    const [ issueMasterJetHard, setIssueMasterJetHard ] = useState(null)
    const [ issueMasterDeserializer, setIssueMasterDeserializer ] = useState(null)
    const [ issueMasterNoVideo, setIssueMasterNoVideo ] = useState(null)
    const [ issueMasterCan, setIssueMasterCan ] = useState(null)
    const [ issueMasterImu, setIssueMasterImu ] = useState(null)
    const [ issueMasterMap, setIssueMasterMap ] = useState(null)

    const [ issueSlaveUnavailable, setIssueSlaveUnavailable ] = useState(null)
    const [ issueSlaveJetHard, setIssueSlaveJetHard ] = useState(null)
    const [ issueSlaveNoVideo, setIssueSlaveNoVideo ] = useState(null)
    const [ issueSlaveDeserializer, setIssueSlaveDeserializer ] = useState(null)
    const [ issueSlaveRadar, setIssueSlaveRadar ] = useState(null)

    const [ issueNavGps, setIssueNavGps ] = useState(null)

    const containerStyle: React.CSSProperties = { 
        width: '100%',
        color: 'white',
      };

    const boxStyle: React.CSSProperties = { 
        width: '33%',
        minHeight: 120,
        borderRadius: 6,
        // border: '1px solid #777',
        color: 'white',
      };

    // const tramNumber: React.CSSProperties = { 
    //     marginTop: '50px',
    //     width: '24%',
    //     height: 120,
    //     borderRadius: 6,
    //     border: '1px solid #777',
    //   };

    return (
        <Form style={containerStyle}
            name="basic"
            // initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <div style={{marginTop: '10px'}}>
                <Input size="large" placeholder="Tram №" style={{ width: 400, resize: 'none' }}/>
            </div>
            <div style={{marginTop: '20px'}}>
                <h1>Driver Report</h1>
            </div>
            <div style={{marginTop: '10px'}}>
                
                    <Flex style={containerStyle} justify={'space-around'} align={'flex-start'}>
                    <Form.Item<FieldType>
                    name="redIcons"
                >
                        <CheckBtn label='Red Icons' textColor='red'/>
                        </Form.Item>
                        <Form.Item<FieldType>
                    name="whiteIcons"
                >
                        <CheckBtn label='White Icons' />
                        </Form.Item>
                        <Form.Item<FieldType>
                    name="greenIcons"
                >
                        <CheckBtn label='Green Icons' textColor='green'/>
                        </Form.Item>
                        <Form.Item<FieldType>
                    name="driverReport"
                >
                        <p>
                            <Input size="large" placeholder="Driver Report" style={{ width: 400, resize: 'none' }}/>
                        </p>
                        </Form.Item>
                    </Flex>
                
            </div>


            <div style={{marginTop: '20px'}}>
                <h1>Issues</h1>
            </div>
            <Flex gap="middle" align="start" vertical>
                <Flex style={containerStyle} justify={'space-around'} align={'flex-start'}>
                    <div style={boxStyle}> 
                        <h1>Master</h1>
                        <CheckBtn label='Unavailable'/>
                        <CheckBtn label='Npme'/>
                        <CheckBtn label='Redis'/>
                        <CheckBtn label='Jet_Hard'/>
                        <CheckBtn label='Deserializer'/>
                        <CheckBtn label='No Video'/>
                        <CheckBtn label='Can error'/>
                        <CheckBtn label='IMU'/>
                        <CheckBtn label='Geomap'/>
                        <TextArea size="large" placeholder="Notes" style={{ width: 300, resize: 'none', marginTop: '10px'}}/>
                    </div>
                    <div style={boxStyle}> 
                        <h1>Slave</h1>
                        <CheckBtn label='Unavailable'/>
                        <CheckBtn label='Radar'/>
                        <CheckBtn label='Deserializer'/>
                        <CheckBtn label='No Video'/>
                        <CheckBtn label='Jet_Hard'/>
                        <TextArea size="large" placeholder="Notes" style={{ width: 300, resize: 'none', marginTop: '10px'}}/>
                    </div>
                    <div style={boxStyle}> 
                        <h1>Nav</h1>
                        <CheckBtn label='Unavailable'/>
                        <TextArea size="large" placeholder="Notes" style={{ width: 300, resize: 'none', marginTop: '10px'}}/>
                    </div>
                </Flex>
            </Flex>
            <Input size="large" placeholder="Notes" style={{ width: '94%', resize: 'none', marginTop: '10px'}}/>


            <div style={{marginTop: '20px'}}>
                <h1>Actions performed</h1>
            </div>
            <Flex gap="middle" align="start" vertical>
                <Flex style={containerStyle} justify={'space-around'} align={'flex-start'}>
                    <div style={boxStyle}> 
                        <h1>Master</h1>
                        <CheckBtn label='Restart Docker'/>
                        <CheckBtn label='Restart Jet_Hard'/>
                        <CheckBtn label='Cam driver reinstall'/>
                        <CheckBtn label='Bundle reinstall'/>
                        <CheckBtn label='Sudo Reboot'/>
                        <CheckBtn label='Sudo Shutdown -r now'/>
                        <TextArea size="large" placeholder="Notes" style={{ width: 300, resize: 'none', marginTop: '10px'}}/>
                        
                    </div>
                    <div style={boxStyle}> 
                        <h1>Slave</h1>                       
                        <CheckBtn label='Restart Docker'/>
                        <CheckBtn label='Restart Jet_Hard'/>
                        <CheckBtn label='Cam driver reinstall'/>
                        <CheckBtn label='Bundle reinstall'/>
                        <CheckBtn label='Sudo Reboot'/>
                        <CheckBtn label='Sudo Shutdown -r now'/>
                        <TextArea size="large" placeholder="Notes" style={{ width: 300, resize: 'none', marginTop: '10px'}}/>
                    </div>
                    <div style={boxStyle}> 
                        <h1>Nav</h1>
                        <CheckBtn label='Restart cgn*'/>
                        <CheckBtn label='Bundle reinstall'/>
                        <CheckBtn label='Sudo Reboot'/>
                        <CheckBtn label='Sudo Shutdown -r now'/>
                        <TextArea size="large" placeholder="Notes" style={{ width: 300, resize: 'none', marginTop: '10px'}}/>
                    </div>
                </Flex>
            </Flex>
            <Input size="large" placeholder="Notes" style={{ width: '94%', resize: 'none', marginTop: '10px'}}/>

            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        
    );
}

export default Forms;