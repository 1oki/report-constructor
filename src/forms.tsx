import React, { useState } from 'react';
import { Button, Flex, FlexProps, Input, Checkbox, Form, ConfigProvider, FormProps} from 'antd';
import CheckBtn from './checkBtn';
import { report } from 'process';
import Clipboard from './clipboard';

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

    const [ tramNumber, setTramNumber ] = useState<string>('')
    const [ redIcons, setRedIcons ] = useState<boolean>(false)
    const [ whiteIcons, setWhiteIcons ] = useState<boolean>(false)
    const [ greenIcons, setGreenIcons ] = useState<boolean>(false)
    const [ driverReport, setDriverReport ] = useState<String>('')

    const [ issueMasterUnavailable, setIssueMasterUnavailable ] = useState<boolean>(false)
    const [ issueMasterNpme, setIssueMasterNpme ] = useState<boolean>(false)
    const [ issueMasterRedis, setIssueMasterRedis ] = useState<boolean>(false)
    const [ issueMasterJetHard, setIssueMasterJetHard ] = useState<boolean>(false)
    const [ issueMasterDeserializer, setIssueMasterDeserializer ] = useState<boolean>(false)
    const [ issueMasterNoVideo, setIssueMasterNoVideo ] = useState<boolean>(false)
    const [ issueMasterCamera, setIssueMasterCamera ] = useState<boolean>(false)
    const [ issueMasterCan, setIssueMasterCan ] = useState<boolean>(false)
    const [ issueMasterImu, setIssueMasterImu ] = useState<boolean>(false)
    const [ issueMasterMap, setIssueMasterMap ] = useState<boolean>(false)

    const [ issueSlaveUnavailable, setIssueSlaveUnavailable ] = useState<boolean>(false)
    const [ issueSlaveJetHard, setIssueSlaveJetHard ] = useState<boolean>(false)
    const [ issueSlaveNoVideo, setIssueSlaveNoVideo ] = useState<boolean>(false)
    const [ issueSlaveDeserializer, setIssueSlaveDeserializer ] = useState<boolean>(false)
    const [ issueSlaveRadar, setIssueSlaveRadar ] = useState<boolean>(false)
    const [ issueSlaveSelects, setIssueSlaveSelects ] = useState<boolean>(false)

    const [ issueNavUnavailable, setIssueNavUnavailable ] = useState<boolean>(false)
    const [ issueNavGps, setIssueNavGps ] = useState<boolean>(false)

    const [ actionTramReboot, setActionTramReboot ] = useState<number>(0)
    const [ actionRevpn, setActionRevpn ] = useState<number>(0)

    const [ actionMasterReVPN, setActionMasterReVPN ] = useState<boolean>(false)
    const [ actionMasterRestartDocker, setActionMasterRestartDocker ] = useState<boolean>(false)
    const [ actionMasterRestartJetHard, setActionMasterRestartJetHard ] = useState<boolean>(false)
    const [ actionMasterReinstallCamDriver, setActionMasterReinstallCamDriver ] = useState<boolean>(false)
    const [ actionMasterReinstallBundle, setActionMasterReinstallBundle ] = useState<boolean>(false)
    const [ actionMasterReboot, setActionMasterReboot ] = useState<boolean>(false)
    const [ actionMasterShutdownR, setActionMasterShutdownR ] = useState<boolean>(false)

    
    const [ actionSlaveRestartDocker, setActionSlaveRestartDocker ] = useState<boolean>(false)
    const [ actionSlaveRestartJetHard, setActionSlaveRestartJetHard ] = useState<boolean>(false)
    const [ actionSlaveReinstallCamDriver, setActionSlaveReinstallCamDriver ] = useState<boolean>(false)
    const [ actionSlaveReinstallBundle, setActionSlaveReinstallBundle ] = useState<boolean>(false)
    const [ actionSlaveReboot, setActionSlaveReboot ] = useState<boolean>(false)
    const [ actionSlaveShutdownR, setActionSlaveShutdownR ] = useState<boolean>(false)

    
    const [ actionNavRestartCgn, setActionNavRestartCgn ] = useState<boolean>(false)
    const [ actionNavReinstallBundle, setActionNavReinstallBundle ] = useState<boolean>(false)
    const [ actionNavReboot, setActionNavReboot ] = useState<boolean>(false)
    const [ actionNavShutdownR, setActionNavShutdownR ] = useState<boolean>(false)


    console.log('greenIcons', greenIcons)

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
            <ConfigProvider
                theme={{
                token: {
                    // Seed Token
                    colorPrimary: 'orange',
                },
                }}
            >
                <div style={{marginTop: '10px'}}>
                    <Input size="large" placeholder="Tram №" style={{ width: 400, resize: 'none' }}/>
                </div>

                <div style={{marginTop: '20px'}}>
                    <h1>Driver Report</h1>
                </div>

                <div style={{marginTop: '10px'}}>
                    <Flex style={containerStyle} justify={'space-around'} align={'flex-start'}>
                        <Form.Item<FieldType> name="redIcons" >
                            <CheckBtn label='Red Icons' textColor='red' onClick={() => setRedIcons(!redIcons)}/>
                        </Form.Item>
                        <Form.Item<FieldType>  name="whiteIcons" >
                            <CheckBtn label='White Icons' onClick={() => setWhiteIcons(!whiteIcons)}/>
                        </Form.Item>
                        <Form.Item<FieldType> name="greenIcons" >
                            <CheckBtn label='Green Icons' textColor='green' onClick={() => setGreenIcons(!greenIcons)}/>
                        </Form.Item>
                        <Form.Item<FieldType> name="driverReport" >
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
                            <CheckBtn label='Unavailable' onClick={() => setIssueMasterUnavailable(!issueMasterUnavailable)}/>
                            <CheckBtn label='Npme' onClick={() => setIssueMasterNpme(!issueMasterNpme)}/>
                            <CheckBtn label='Redis' onClick={() => setIssueMasterRedis(!issueMasterRedis)}/>
                            <CheckBtn label='Jet_Hard' onClick={() => setIssueMasterJetHard(!issueMasterJetHard)}/>
                            <CheckBtn label='Deserializer' onClick={() => setIssueMasterDeserializer(!issueMasterDeserializer)}/>
                            <CheckBtn label='No Video' onClick={() => setIssueMasterNoVideo(!issueMasterNoVideo)}/>
                            <CheckBtn label='Camera error' onClick={() => setIssueMasterCamera(!issueMasterCamera)}/>
                            <CheckBtn label='Can error' onClick={() => setIssueMasterCan(!issueMasterCan)}/>
                            <CheckBtn label='IMU' onClick={() => setIssueMasterImu(!issueMasterImu)}/>
                            <CheckBtn label='Geomap' onClick={() => setIssueMasterMap(!issueMasterMap)}/>
                            <TextArea size="large" placeholder="Notes" style={{ width: 300, resize: 'none', marginTop: '10px'}}/>
                        </div>
                        <div style={boxStyle}> 
                            <h1>Slave</h1>
                            <CheckBtn label='Unavailable' onClick={() => setIssueSlaveUnavailable(!issueSlaveUnavailable)}/>
                            <CheckBtn label='Jet_Hard' onClick={() => setIssueSlaveJetHard(!issueSlaveJetHard)}/>
                            <CheckBtn label='Deserializer' onClick={() => setIssueSlaveDeserializer(!issueSlaveDeserializer)}/>
                            <CheckBtn label='No Video' onClick={() => setIssueSlaveNoVideo(!issueSlaveNoVideo)}/>
                            <CheckBtn label='Radar' onClick={() => setIssueSlaveRadar(!issueSlaveRadar)}/>
                            <CheckBtn label='Selects' onClick={() => setIssueSlaveSelects(!issueSlaveSelects)}/>
                            <TextArea size="large" placeholder="Notes" style={{ width: 300, resize: 'none', marginTop: '10px'}}/>
                        </div>
                        <div style={boxStyle}> 
                            <h1>Nav</h1>
                            <CheckBtn label='Unavailable' onClick={() => setIssueNavUnavailable(!issueNavUnavailable)}/>
                            <CheckBtn label='GPS' onClick={() => setIssueNavGps(!issueNavGps)}/>
                            <TextArea size="large" placeholder="Notes" style={{ width: 300, resize: 'none', marginTop: '10px'}}/>
                        </div>
                    </Flex>
                </Flex>
                <Input size="large" placeholder="Notes" style={{ width: '94%', resize: 'none', marginTop: '10px'}}/>

                <div style={{marginTop: '20px'}}>
                    <h1>Actions performed</h1>
                </div>

                <CheckBtn label={`Tram rebooted ${actionTramReboot} times`} onClick={() => setActionTramReboot(actionTramReboot + 1)}/>

                <Flex gap="middle" align="start" vertical>
                    <Flex style={containerStyle} justify={'space-around'} align={'flex-start'}>
                        <div style={boxStyle}> 
                            <h1>Master</h1>
                            <CheckBtn label={`ReVPN ${actionRevpn} times`} onClick={() => setActionRevpn(actionRevpn + 1)}/>
                            <CheckBtn label='Restart Docker' onClick={() => setGreenIcons(!greenIcons)}/>
                            <CheckBtn label='Restart Jet_Hard' onClick={() => setGreenIcons(!greenIcons)}/>
                            <CheckBtn label='Cam driver reinstall' onClick={() => setGreenIcons(!greenIcons)}/>
                            <CheckBtn label='Bundle reinstall' onClick={() => setGreenIcons(!greenIcons)}/>
                            <CheckBtn label='Sudo Reboot' onClick={() => setGreenIcons(!greenIcons)}/>
                            <CheckBtn label='Sudo Shutdown -r now' onClick={() => setGreenIcons(!greenIcons)}/>
                            <TextArea size="large" placeholder="Notes" style={{ width: 300, resize: 'none', marginTop: '10px'}}/>
                            
                        </div>
                        <div style={boxStyle}> 
                            <h1>Slave</h1>                       
                            <CheckBtn label='Restart Docker' onClick={() => setGreenIcons(!greenIcons)}/>
                            <CheckBtn label='Restart Jet_Hard' onClick={() => setGreenIcons(!greenIcons)}/>
                            <CheckBtn label='Cam driver reinstall' onClick={() => setGreenIcons(!greenIcons)}/>
                            <CheckBtn label='Bundle reinstall' onClick={() => setGreenIcons(!greenIcons)}/>
                            <CheckBtn label='Sudo Reboot' onClick={() => setGreenIcons(!greenIcons)}/>
                            <CheckBtn label='Sudo Shutdown -r now' onClick={() => setGreenIcons(!greenIcons)}/>
                            <TextArea size="large" placeholder="Notes" style={{ width: 300, resize: 'none', marginTop: '10px'}}/>
                        </div>
                        <div style={boxStyle}> 
                            <h1>Nav</h1>
                            <CheckBtn label='Restart cgn*' onClick={() => setGreenIcons(!greenIcons)}/>
                            <CheckBtn label='Bundle reinstall' onClick={() => setGreenIcons(!greenIcons)}/>
                            <CheckBtn label='Sudo Reboot' onClick={() => setGreenIcons(!greenIcons)}/>
                            <CheckBtn label='Sudo Shutdown -r now' onClick={() => setGreenIcons(!greenIcons)}/>
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
            </ConfigProvider>
            <Clipboard />
        </Form>
        
    );
}

export default Forms;