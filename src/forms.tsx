import React, { useState, useEffect } from 'react';
import { Button, Flex, Input, Form, ConfigProvider, FormProps} from 'antd';
import CheckBtn from './checkBtn';
import exportToExcel from './exportXlsx';
import useReportStore from './store/useReportStore';

type ReportType = {
    vehicleNumber: string,
    driversReportRedIcons?: boolean,
    driversReportWhiteIcons?: boolean,
    driversReportGreenIcons?: boolean,
    driversReportNote?: string,

    issueMainDeviceUnavailable?: boolean,
    issueMainDeviceNpme?: boolean,
    issueMainDeviceRedis?: boolean,
    issueMainDeviceJetHard?: boolean,
    issueMainDeviceDeserializer?: boolean,
    issueMainDeviceNoVideo?: boolean,
    issueMainDeviceCamera?: boolean,
    issueMainDeviceSelects?: false,
    issueMainDeviceCan?: boolean,
    issueMainDeviceImu?: boolean,
    issueMainDeviceMap?: boolean,
    issueMainDeviceNote?: string,

    issueSecondaryDeviceUnavailable?: boolean,
    issueSecondaryDeviceJetHard?: boolean,
    issueSecondaryDeviceNoVideo?: boolean,
    issueSecondaryDeviceDeserializer?: boolean,
    issueSecondaryDeviceCamera?: boolean,
    issueSecondaryDeviceRadar?: boolean,
    issueSecondaryDeviceSelects?: boolean,
    issueSecondaryDeviceNote?: string,

    issueNavigationBlockUnavailable?: boolean, 
    issueNavigationBlockCgn?: boolean,
    issueNavigationBlockNote?: string,

    issueNote?: string,

    actionVehicleReboot?: boolean,
    actionRevpn?: boolean,

    actionMainDeviceReVPN?: boolean,
    actionMainDeviceRestartDocker?: boolean,
    actionMainDeviceRestartJetHard?: boolean,
    actionMainDeviceReinstallCamDriver?: boolean,
    actionMainDeviceReinstallBundle?: boolean,
    actionMainDeviceReboot?: boolean,
    actionMainDeviceShutdownR?: boolean,
    actionMainDeviceNote?: string,

    actionSecondaryDeviceRestartDocker?: boolean,
    actionSecondaryDeviceRestartJetHard?: boolean,
    actionSecondaryDeviceReinstallCamDriver?: boolean,
    actionSecondaryDeviceReinstallBundle?: boolean,
    actionSecondaryDeviceReboot?: boolean,
    actionSecondaryDeviceShutdownR?: boolean,
    actionSecondaryDeviceNote?: string,

    actionNavigationBlockRestartCgn?: boolean,
    actionNavigationBlockReinstallBundle?: boolean,
    actionNavigationBlockReboot?: boolean,
    actionNavigationBlockShutdownR?: boolean,
    actionNavigationBlockNote?: string,

    actionNote?: string,
};

const initialValues: ReportType = {
    vehicleNumber: '',
    driversReportRedIcons: false,
    driversReportWhiteIcons: false,
    driversReportGreenIcons: false,
    driversReportNote: '',

    issueMainDeviceUnavailable: false,
    issueMainDeviceNpme: false,
    issueMainDeviceRedis: false,
    issueMainDeviceJetHard: false,
    issueMainDeviceDeserializer: false,
    issueMainDeviceNoVideo: false,
    issueMainDeviceCamera: false,
    issueMainDeviceSelects: false,
    issueMainDeviceCan: false,
    issueMainDeviceImu: false,
    issueMainDeviceMap: false,
    issueMainDeviceNote: '',

    issueSecondaryDeviceUnavailable: false,
    issueSecondaryDeviceJetHard: false,
    issueSecondaryDeviceNoVideo: false,
    issueSecondaryDeviceDeserializer: false,
    issueSecondaryDeviceCamera: false,
    issueSecondaryDeviceRadar: false,
    issueSecondaryDeviceSelects: false,
    issueSecondaryDeviceNote: '',

    issueNavigationBlockUnavailable: false,
    issueNavigationBlockCgn: false,
    issueNavigationBlockNote: '',

    issueNote: '',

    actionVehicleReboot: false,
    actionRevpn: false,

    actionMainDeviceReVPN: false,
    actionMainDeviceRestartDocker: false,
    actionMainDeviceRestartJetHard: false,
    actionMainDeviceReinstallCamDriver: false,
    actionMainDeviceReinstallBundle: false,
    actionMainDeviceReboot: false,
    actionMainDeviceShutdownR: false,
    actionMainDeviceNote: '',

    actionSecondaryDeviceRestartDocker: false,
    actionSecondaryDeviceRestartJetHard: false,
    actionSecondaryDeviceReinstallCamDriver: false,
    actionSecondaryDeviceReinstallBundle: false,
    actionSecondaryDeviceReboot: false,
    actionSecondaryDeviceShutdownR: false,
    actionSecondaryDeviceNote: '',

    actionNavigationBlockRestartCgn: false,
    actionNavigationBlockReinstallBundle: false,
    actionNavigationBlockReboot: false,
    actionNavigationBlockShutdownR: false,
    actionNavigationBlockNote: '',

    actionNote: '',
}


const onFinishFailed: FormProps<ReportType>['onFinishFailed'] = (errorInfo) => {
console.log('Failed:', errorInfo);
};

const Forms: React.FC = () => {

    const { report, addEntry }  = useReportStore();
    const [ reportEntry, setReport ] = useState<ReportType>(initialValues)

    const containerStyle: React.CSSProperties = { 
        width: '100%',
        color: 'white',
    };
    const boxStyle: React.CSSProperties = { 
        width: '33%',
        minHeight: 120,
        borderRadius: 6,
        color: 'white',
    };

    useEffect(() => {
        console.log('Bears updated:', reportEntry);
        setReport(initialValues);
      }, [report]);

    const onFinish: FormProps<ReportType>['onFinish'] = () => {
        addEntry(reportEntry);
        setReport(initialValues);
        console.log('reportEntry',reportEntry)
    };
    const clearInput = () => {
        setReport(initialValues);
    }

    const handleClick = (section: keyof ReportType) => {
        setReport(state => ({ ...state, [section]: !state[section]}))
        
    }

    const handleInput = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, section: string) => {
        setReport(state => ({ ...state, [section]: event.target.value}))
    }
    
    return (
        <>
            <Form style={containerStyle}
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <ConfigProvider
                    theme={{
                    token: {
                        colorPrimary: 'orange',
                    },
                    }}
                >
                    <div style={{marginTop: '10px'}}>
                        <Input size="large" placeholder="Vehicle №" value={reportEntry.vehicleNumber} style={{ width: 400, resize: 'none' }}  onChange={(event) => handleInput(event, 'vehicleNumber')}/>
                    </div>

                    <div style={{marginTop: '20px'}}>
                        <h1>Driver Report</h1>
                    </div>

                    <div style={{marginTop: '10px'}}>
                        <Flex style={containerStyle} justify={'space-around'} align={'flex-start'}>
                            <Form.Item<ReportType> name="driversReportRedIcons" >
                                <CheckBtn label='Red Icons' textColor='red' onClick={() => handleClick('driversReportRedIcons')}/>
                            </Form.Item>
                            <Form.Item<ReportType>  name="driversReportWhiteIcons" >
                                <CheckBtn label='White Icons' onClick={() => handleClick('driversReportWhiteIcons')}/>
                            </Form.Item>
                            <Form.Item<ReportType> name="driversReportGreenIcons" >
                                <CheckBtn label='Green Icons' textColor='green' onClick={() => handleClick('driversReportGreenIcons')}/>
                            </Form.Item>
                            <Form.Item<ReportType> name="driversReportNote" >
                                <p>
                                    <Input size="large" placeholder="Driver Report" value={reportEntry.driversReportNote} style={{ width: 400, resize: 'none' }} onChange={(event) => handleInput(event, 'driversReportNote')}/>
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
                                <h1>MainDevice</h1>
                                <CheckBtn label='Unavailable' onClick={() => handleClick('issueMainDeviceUnavailable')}/>
                                <CheckBtn label='Npme' onClick={() => handleClick('issueMainDeviceNpme')}/>
                                <CheckBtn label='Redis' onClick={() => handleClick('issueMainDeviceRedis')}/>
                                <CheckBtn label='Jet_Hard' onClick={() => handleClick('issueMainDeviceJetHard')}/>
                                <CheckBtn label='Deserializer' onClick={() => handleClick('issueMainDeviceDeserializer')}/>
                                <CheckBtn label='No Video' onClick={() => handleClick('issueMainDeviceNoVideo')}/>
                                <CheckBtn label='Camera error' onClick={() => handleClick('issueMainDeviceCamera')}/>
                                <CheckBtn label='No Can messages' onClick={() => handleClick('issueMainDeviceCan')}/>
                                <CheckBtn label='IMU' onClick={() => handleClick('issueMainDeviceImu')}/>
                                <CheckBtn label='Geomap' onClick={() => handleClick('issueMainDeviceMap')}/>
                            </div>
                            <div style={boxStyle}> 
                                <h1>SecondaryDevice</h1>
                                <CheckBtn label='Unavailable' onClick={() => handleClick('issueSecondaryDeviceUnavailable')}/>
                                <CheckBtn label='Jet_Hard' onClick={() => handleClick('issueSecondaryDeviceJetHard')}/>
                                <CheckBtn label='Deserializer' onClick={() => handleClick('issueSecondaryDeviceDeserializer')}/>
                                <CheckBtn label='No Video' onClick={() => handleClick('issueSecondaryDeviceNoVideo')}/>
                                <CheckBtn label='Radar' onClick={() => handleClick('issueSecondaryDeviceRadar')}/>
                                <CheckBtn label='Selects' onClick={() => handleClick('issueSecondaryDeviceSelects')}/>
                            </div>
                            <div style={boxStyle}> 
                                <h1>NavigationBlock</h1>
                                <CheckBtn label='Unavailable' onClick={() => handleClick('issueNavigationBlockUnavailable')}/>
                                <CheckBtn label='GPS' onClick={() => handleClick('issueNavigationBlockCgn')}/>
                            </div>
                        </Flex>
                    </Flex>
                    <Input size="large" placeholder="Notes" style={{ width: '80%', resize: 'none', marginTop: '10px'}} onChange={(event) => handleInput(event, 'issueNote')}/>

                    <div style={{marginTop: '20px'}}>
                        <h1>Actions performed</h1>
                    </div>

                    <CheckBtn label={`Tram rebooted ${reportEntry.actionVehicleReboot} times`} onClick={() => handleClick('actionVehicleReboot')}/>

                    <Flex gap="middle" align="start" vertical>
                        <Flex style={containerStyle} justify={'space-around'} align={'flex-start'}>
                            <div style={boxStyle}> 
                                <h1>MainDevice</h1>
                                <CheckBtn label={`ReVPN ${reportEntry.actionRevpn} times`} onClick={() => handleClick('actionRevpn')}/>
                                <CheckBtn label='Restart Docker' onClick={() => handleClick('actionMainDeviceRestartDocker')}/>
                                <CheckBtn label='Restart Jet_Hard' onClick={() => handleClick('actionMainDeviceRestartJetHard')}/>
                                <CheckBtn label='Cam driver reinstall' onClick={() => handleClick('actionMainDeviceReinstallCamDriver')}/>
                                <CheckBtn label='Bundle reinstall' onClick={() => handleClick('actionMainDeviceReinstallBundle')}/>
                                <CheckBtn label='Sudo Reboot' onClick={() => handleClick('actionMainDeviceReboot')}/>
                                <CheckBtn label='Sudo Shutdown -r now' onClick={() => handleClick('actionMainDeviceShutdownR')}/>
                            </div>
                            <div style={boxStyle}> 
                                <h1>SecondaryDevice</h1>                       
                                <CheckBtn label='Restart Docker' onClick={() => handleClick('actionSecondaryDeviceRestartDocker')}/>
                                <CheckBtn label='Restart Jet_Hard' onClick={() => handleClick('actionSecondaryDeviceRestartJetHard')}/>
                                <CheckBtn label='Cam driver reinstall' onClick={() => handleClick('actionSecondaryDeviceReinstallCamDriver')}/>
                                <CheckBtn label='Bundle reinstall' onClick={() => handleClick('actionSecondaryDeviceReinstallBundle')}/>
                                <CheckBtn label='Sudo Reboot' onClick={() => handleClick('actionSecondaryDeviceReboot')}/>
                                <CheckBtn label='Sudo Shutdown -r now' onClick={() => handleClick('actionSecondaryDeviceShutdownR')}/>
                            </div>
                            <div style={boxStyle}> 
                                <h1>NavigationBlock</h1>
                                <CheckBtn label='Restart cgn*' onClick={() => handleClick('actionNavigationBlockRestartCgn')}/>
                                <CheckBtn label='Bundle reinstall' onClick={() => handleClick('actionNavigationBlockReinstallBundle')}/>
                                <CheckBtn label='Sudo Reboot' onClick={() => handleClick('actionNavigationBlockReboot')}/>
                                <CheckBtn label='Sudo Shutdown -r now' onClick={() => handleClick('actionNavigationBlockShutdownR')}/>
                            </div>
                        </Flex>
                    </Flex>
                    <Input size="large" placeholder="Notes" value={reportEntry.actionNote} style={{ width: '80%', resize: 'none', marginTop: '10px'}} onChange={(event) => handleInput(event, 'actionNote')}/>
                    <Form.Item style={{ marginTop: '20px'}}>
                        <Button type="primary" size="large" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </ConfigProvider>
            </Form>
            <Flex style={containerStyle} justify={'space-between'} align={'flex-start'}>
                <Button type="primary" size="large" style={{ marginBottom: '20px'}} onClick={() => exportToExcel(report)}>
                    Export to XLSX file
                </Button>            
                <Button danger style={{ marginLeft: '150px'}} onClick={clearInput}>
                    Сlear input
                </Button>
            </Flex>
        </>
    );
}

export default Forms;