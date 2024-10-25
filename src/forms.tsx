import React, { useState, useEffect } from 'react';
import { Button, Flex, Input, Form, ConfigProvider, FormProps} from 'antd';
import CheckBtn from './checkBtn';
import ExportCSV from './exportCsv';
import exportToExcel from './exportXlsx';
import * as XLSX from 'xlsx';
import useReportStore from './store/useReportStore';

type ReportType = {
    tramNumber: string,
    driversReportRedIcons?: boolean,
    driversReportWhiteIcons?: boolean,
    driversReportGreenIcons?: boolean,
    driversReportNote?: string,

    issueMasterUnavailable?: boolean,
    issueMasterNpme?: boolean,
    issueMasterRedis?: boolean,
    issueMasterJetHard?: boolean,
    issueMasterDeserializer?: boolean,
    issueMasterNoVideo?: boolean,
    issueMasterCamera?: boolean,
    issueMasterSelects?: false,
    issueMasterCan?: boolean,
    issueMasterImu?: boolean,
    issueMasterMap?: boolean,
    issueMasterNote?: string,

    issueSlaveUnavailable?: boolean,
    issueSlaveJetHard?: boolean,
    issueSlaveNoVideo?: boolean,
    issueSlaveDeserializer?: boolean,
    issueSlaveCamera?: boolean,
    issueSlaveRadar?: boolean,
    issueSlaveSelects?: boolean,
    issueSlaveNote?: string,

    issueNavUnavailable?: boolean, 
    issueNavCgn?: boolean,
    issueNavNote?: string,

    issueNote?: string,

    actionTramReboot?: boolean,
    actionRevpn?: boolean,

    actionMasterReVPN?: boolean,
    actionMasterRestartDocker?: boolean,
    actionMasterRestartJetHard?: boolean,
    actionMasterReinstallCamDriver?: boolean,
    actionMasterReinstallBundle?: boolean,
    actionMasterReboot?: boolean,
    actionMasterShutdownR?: boolean,
    actionMasterNote?: string,

    actionSlaveRestartDocker?: boolean,
    actionSlaveRestartJetHard?: boolean,
    actionSlaveReinstallCamDriver?: boolean,
    actionSlaveReinstallBundle?: boolean,
    actionSlaveReboot?: boolean,
    actionSlaveShutdownR?: boolean,
    actionSlaveNote?: string,

    actionNavRestartCgn?: boolean,
    actionNavReinstallBundle?: boolean,
    actionNavReboot?: boolean,
    actionNavShutdownR?: boolean,
    actionNavNote?: string,

    actionNote?: string,
};

const initialValues: ReportType = {
    tramNumber: '',
    driversReportRedIcons: false,
    driversReportWhiteIcons: false,
    driversReportGreenIcons: false,
    driversReportNote: '',

    issueMasterUnavailable: false,
    issueMasterNpme: false,
    issueMasterRedis: false,
    issueMasterJetHard: false,
    issueMasterDeserializer: false,
    issueMasterNoVideo: false,
    issueMasterCamera: false,
    issueMasterSelects: false,
    issueMasterCan: false,
    issueMasterImu: false,
    issueMasterMap: false,
    issueMasterNote: '',

    issueSlaveUnavailable: false,
    issueSlaveJetHard: false,
    issueSlaveNoVideo: false,
    issueSlaveDeserializer: false,
    issueSlaveCamera: false,
    issueSlaveRadar: false,
    issueSlaveSelects: false,
    issueSlaveNote: '',

    issueNavUnavailable: false,
    issueNavCgn: false,
    issueNavNote: '',

    issueNote: '',

    actionTramReboot: false,
    actionRevpn: false,

    actionMasterReVPN: false,
    actionMasterRestartDocker: false,
    actionMasterRestartJetHard: false,
    actionMasterReinstallCamDriver: false,
    actionMasterReinstallBundle: false,
    actionMasterReboot: false,
    actionMasterShutdownR: false,
    actionMasterNote: '',

    actionSlaveRestartDocker: false,
    actionSlaveRestartJetHard: false,
    actionSlaveReinstallCamDriver: false,
    actionSlaveReinstallBundle: false,
    actionSlaveReboot: false,
    actionSlaveShutdownR: false,
    actionSlaveNote: '',

    actionNavRestartCgn: false,
    actionNavReinstallBundle: false,
    actionNavReboot: false,
    actionNavShutdownR: false,
    actionNavNote: '',

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
        // border: '1px solid #777',
        color: 'white',
    };


    const onFinish: FormProps<ReportType>['onFinish'] = () => {
        addEntry(reportEntry);
        setReport(initialValues);
        console.log('report',report)
    };

    const handleClick = (section: keyof ReportType) => {
        setReport(state => ({ ...state, [section]: !state[section]}))
        
    }

    const handleInput = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, section: string) => {
        setReport(state => ({ ...state, [section]: event.target.value}))
    }
    
    useEffect(() => {
        console.log('report from store', report)
    }, []);

    const clear = () => {
        localStorage.removeItem('reportData');
        setReport(initialValues); // Сброс данных на начальные
    };
    

    return (
        <>
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
                        <Input size="large" placeholder="Tram №" style={{ width: 400, resize: 'none' }}  onChange={(event) => handleInput(event, 'tramNumber')}/>
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
                                    <Input size="large" placeholder="Driver Report" style={{ width: 400, resize: 'none' }} onChange={(event) => handleInput(event, 'driversReportNote')}/>
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
                                <CheckBtn label='Unavailable' onClick={() => handleClick('issueMasterUnavailable')}/>
                                <CheckBtn label='Npme' onClick={() => handleClick('issueMasterNpme')}/>
                                <CheckBtn label='Redis' onClick={() => handleClick('issueMasterRedis')}/>
                                <CheckBtn label='Jet_Hard' onClick={() => handleClick('issueMasterJetHard')}/>
                                <CheckBtn label='Deserializer' onClick={() => handleClick('issueMasterDeserializer')}/>
                                <CheckBtn label='No Video' onClick={() => handleClick('issueMasterNoVideo')}/>
                                <CheckBtn label='Camera error' onClick={() => handleClick('issueMasterCamera')}/>
                                <CheckBtn label='Can error' onClick={() => handleClick('issueMasterCan')}/>
                                <CheckBtn label='IMU' onClick={() => handleClick('issueMasterImu')}/>
                                <CheckBtn label='Geomap' onClick={() => handleClick('issueMasterMap')}/>
                            </div>
                            <div style={boxStyle}> 
                                <h1>Slave</h1>
                                <CheckBtn label='Unavailable' onClick={() => handleClick('issueSlaveUnavailable')}/>
                                <CheckBtn label='Jet_Hard' onClick={() => handleClick('issueSlaveJetHard')}/>
                                <CheckBtn label='Deserializer' onClick={() => handleClick('issueSlaveDeserializer')}/>
                                <CheckBtn label='No Video' onClick={() => handleClick('issueSlaveNoVideo')}/>
                                <CheckBtn label='Radar' onClick={() => handleClick('issueSlaveRadar')}/>
                                <CheckBtn label='Selects' onClick={() => handleClick('issueSlaveSelects')}/>
                            </div>
                            <div style={boxStyle}> 
                                <h1>Nav</h1>
                                <CheckBtn label='Unavailable' onClick={() => handleClick('issueNavUnavailable')}/>
                                <CheckBtn label='GPS' onClick={() => handleClick('issueNavCgn')}/>
                            </div>
                        </Flex>
                    </Flex>
                    <Input size="large" placeholder="Notes" style={{ width: '80%', resize: 'none', marginTop: '10px'}} onChange={(event) => handleInput(event, 'issueNote')}/>

                    <div style={{marginTop: '20px'}}>
                        <h1>Actions performed</h1>
                    </div>

                    <CheckBtn label={`Tram rebooted ${reportEntry.actionTramReboot} times`} onClick={() => handleClick('actionTramReboot')}/>

                    <Flex gap="middle" align="start" vertical>
                        <Flex style={containerStyle} justify={'space-around'} align={'flex-start'}>
                            <div style={boxStyle}> 
                                <h1>Master</h1>
                                <CheckBtn label={`ReVPN ${reportEntry.actionRevpn} times`} onClick={() => handleClick('actionRevpn')}/>
                                <CheckBtn label='Restart Docker' onClick={() => handleClick('actionMasterRestartDocker')}/>
                                <CheckBtn label='Restart Jet_Hard' onClick={() => handleClick('actionMasterRestartJetHard')}/>
                                <CheckBtn label='Cam driver reinstall' onClick={() => handleClick('actionMasterReinstallCamDriver')}/>
                                <CheckBtn label='Bundle reinstall' onClick={() => handleClick('actionMasterReinstallBundle')}/>
                                <CheckBtn label='Sudo Reboot' onClick={() => handleClick('actionMasterReboot')}/>
                                <CheckBtn label='Sudo Shutdown -r now' onClick={() => handleClick('actionMasterShutdownR')}/>
                                {/* <TextArea size="large" placeholder="Notes" style={{ width: 300, resize: 'none', marginTop: '10px'}} onChange={(event) => handleInput(event, 'actionMasterNote')}/> */}
                                
                            </div>
                            <div style={boxStyle}> 
                                <h1>Slave</h1>                       
                                <CheckBtn label='Restart Docker' onClick={() => handleClick('actionSlaveRestartDocker')}/>
                                <CheckBtn label='Restart Jet_Hard' onClick={() => handleClick('actionSlaveRestartJetHard')}/>
                                <CheckBtn label='Cam driver reinstall' onClick={() => handleClick('actionSlaveReinstallCamDriver')}/>
                                <CheckBtn label='Bundle reinstall' onClick={() => handleClick('actionSlaveReinstallBundle')}/>
                                <CheckBtn label='Sudo Reboot' onClick={() => handleClick('actionSlaveReboot')}/>
                                <CheckBtn label='Sudo Shutdown -r now' onClick={() => handleClick('actionSlaveShutdownR')}/>
                                {/* <TextArea size="large" placeholder="Notes" style={{ width: 300, resize: 'none', marginTop: '10px'}} onChange={(event) => handleInput(event, 'actionSlaveNote')}/> */}
                            </div>
                            <div style={boxStyle}> 
                                <h1>Nav</h1>
                                <CheckBtn label='Restart cgn*' onClick={() => handleClick('actionNavRestartCgn')}/>
                                <CheckBtn label='Bundle reinstall' onClick={() => handleClick('actionNavReinstallBundle')}/>
                                <CheckBtn label='Sudo Reboot' onClick={() => handleClick('actionNavReboot')}/>
                                <CheckBtn label='Sudo Shutdown -r now' onClick={() => handleClick('actionNavShutdownR')}/>
                                {/* <TextArea size="large" placeholder="Notes" style={{ width: 300, resize: 'none', marginTop: '10px'}} onChange={(event) => handleInput(event, 'actionNavNote')}/> */}
                            </div>
                        </Flex>
                    </Flex>
                    <Input size="large" placeholder="Notes" style={{ width: '80%', resize: 'none', marginTop: '10px'}} onChange={(event) => handleInput(event, 'actionNote')}/>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </ConfigProvider>
                
            </Form>
            {/* <button onClick={clearLocalStorage}>
                Сlear Local Storage
            </button> */}
            {/* <ExportCSV data={processedData} fileName="tram_report.csv" /> */}
            <button onClick={() => exportToExcel(report)}>
                Export to XLS
            </button>
        </>
        
    );
    
}

export default Forms;