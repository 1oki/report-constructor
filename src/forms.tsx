import React, { useState, useEffect } from 'react';
import { Button, Flex, Input, Form, ConfigProvider, FormProps} from 'antd';
import CheckBtn from './checkBtn';
import exportToExcel from './exportXlsx';
import useReportStore from './store/useReportStore';
import { ReportType } from './types';

const initialValues: ReportType = {
    vehicleNumber: '',
    driversReportRedIcons: false,
    driversReportWhiteIcons: false,
    driversReportGreenIcons: false,
    driversReportNote: '',

    issueMainDeviceUnavailable: false,
    issueMainDeviceN1: false,
    issueMainDeviceR1: false,
    issueMainDeviceJ1: false,
    issueMainDeviceD1: false,
    issueMainDeviceNoVideo: false,
    issueMainDeviceCamera: false,
    issueMainDeviceS1: false,
    issueMainDeviceCan: false,
    issueMainDeviceI1: false,
    issueMainDeviceMap: false,
    issueMainDeviceNote: '',

    issueSecondaryDeviceUnavailable: false,
    issueSecondaryDeviceJetH1: false,
    issueSecondaryDeviceNoVideo: false,
    issueSecondaryDeviceD1: false,
    issueSecondaryDeviceCamera: false,
    issueSecondaryDeviceRadar: false,
    issueSecondaryDeviceS1: false,
    issueSecondaryDeviceNote: '',

    issueNavigationBlockUnavailable: false,
    issueNavigationBlockC1: false,
    issueNavigationBlockNote: '',

    issueNote: '',

    actionVehicleReboot: false,
    actionRevpn: false,

    actionMainDeviceR1: false,
    actionMainDeviceRestartDocker: false,
    actionMainDeviceRestartJ1: false,
    actionMainDeviceReinstallCamDriver: false,
    actionMainDeviceReinstallBundle: false,
    actionMainDeviceReboot: false,
    actionMainDeviceShutdownR: false,
    actionMainDeviceNote: '',

    actionSecondaryDeviceRestartDocker: false,
    actionSecondaryDeviceRestartJ1: false,
    actionSecondaryDeviceReinstallCamDriver: false,
    actionSecondaryDeviceReinstallBundle: false,
    actionSecondaryDeviceReboot: false,
    actionSecondaryDeviceShutdownR: false,
    actionSecondaryDeviceNote: '',

    actionNavigationBlockRestartC1: false,
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
                                <CheckBtn label='N1' onClick={() => handleClick('issueMainDeviceN1')}/>
                                <CheckBtn label='R1' onClick={() => handleClick('issueMainDeviceR1')}/>
                                <CheckBtn label='J1' onClick={() => handleClick('issueMainDeviceJ1')}/>
                                <CheckBtn label='D1' onClick={() => handleClick('issueMainDeviceD1')}/>
                                <CheckBtn label='No Video' onClick={() => handleClick('issueMainDeviceNoVideo')}/>
                                <CheckBtn label='Camera error' onClick={() => handleClick('issueMainDeviceCamera')}/>
                                <CheckBtn label='No Can messages' onClick={() => handleClick('issueMainDeviceCan')}/>
                                <CheckBtn label='I1' onClick={() => handleClick('issueMainDeviceI1')}/>
                                <CheckBtn label='Geomap' onClick={() => handleClick('issueMainDeviceMap')}/>
                            </div>
                            <div style={boxStyle}> 
                                <h1>SecondaryDevice</h1>
                                <CheckBtn label='Unavailable' onClick={() => handleClick('issueSecondaryDeviceUnavailable')}/>
                                <CheckBtn label='J1' onClick={() => handleClick('issueSecondaryDeviceJetH1')}/>
                                <CheckBtn label='D1' onClick={() => handleClick('issueSecondaryDeviceD1')}/>
                                <CheckBtn label='No Video' onClick={() => handleClick('issueSecondaryDeviceNoVideo')}/>
                                <CheckBtn label='Radar' onClick={() => handleClick('issueSecondaryDeviceRadar')}/>
                                <CheckBtn label='S1' onClick={() => handleClick('issueSecondaryDeviceS1')}/>
                            </div>
                            <div style={boxStyle}> 
                                <h1>NavigationBlock</h1>
                                <CheckBtn label='Unavailable' onClick={() => handleClick('issueNavigationBlockUnavailable')}/>
                                <CheckBtn label='G1' onClick={() => handleClick('issueNavigationBlockC1')}/>
                            </div>
                        </Flex>
                    </Flex>
                    <Input size="large" placeholder="Notes" style={{ width: '80%', resize: 'none', marginTop: '10px'}} onChange={(event) => handleInput(event, 'issueNote')}/>

                    <div style={{marginTop: '20px'}}>
                        <h1>Actions performed</h1>
                    </div>

                    <CheckBtn label={`Vehicle reboot`} onClick={() => handleClick('actionVehicleReboot')}/>

                    <Flex gap="middle" align="start" vertical>
                        <Flex style={containerStyle} justify={'space-around'} align={'flex-start'}>
                            <div style={boxStyle}> 
                                <h1>Main Device</h1>
                                <CheckBtn label='R1' onClick={() => handleClick('actionMainDeviceR1')}/>
                                <CheckBtn label='Restart Docker' onClick={() => handleClick('actionMainDeviceRestartDocker')}/>
                                <CheckBtn label='Restart J1' onClick={() => handleClick('actionMainDeviceRestartJ1')}/>
                                <CheckBtn label='Cam driver reinstall' onClick={() => handleClick('actionMainDeviceReinstallCamDriver')}/>
                                <CheckBtn label='Bundle reinstall' onClick={() => handleClick('actionMainDeviceReinstallBundle')}/>
                                <CheckBtn label='Sudo Reboot' onClick={() => handleClick('actionMainDeviceReboot')}/>
                                <CheckBtn label='Sudo Shutdown -r now' onClick={() => handleClick('actionMainDeviceShutdownR')}/>
                            </div>
                            <div style={boxStyle}> 
                                <h1>Secondary Device</h1>                       
                                <CheckBtn label='Restart Docker' onClick={() => handleClick('actionSecondaryDeviceRestartDocker')}/>
                                <CheckBtn label='Restart J1' onClick={() => handleClick('actionSecondaryDeviceRestartJ1')}/>
                                <CheckBtn label='Cam driver reinstall' onClick={() => handleClick('actionSecondaryDeviceReinstallCamDriver')}/>
                                <CheckBtn label='Bundle reinstall' onClick={() => handleClick('actionSecondaryDeviceReinstallBundle')}/>
                                <CheckBtn label='Sudo Reboot' onClick={() => handleClick('actionSecondaryDeviceReboot')}/>
                                <CheckBtn label='Sudo Shutdown -r now' onClick={() => handleClick('actionSecondaryDeviceShutdownR')}/>
                            </div>
                            <div style={boxStyle}> 
                                <h1>Navigation Block</h1>
                                <CheckBtn label='Restart C1' onClick={() => handleClick('actionNavigationBlockRestartC1')}/>
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