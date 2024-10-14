import React, { useState } from 'react';
import { Button, Flex, FlexProps, Input, Checkbox, Form, ConfigProvider, FormProps} from 'antd';
import CheckBtn from './checkBtn';
import DownloadCSV from './DownloadCSV';
import ExportCSV from './exportCsv';


type ReportType = {
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


  const onFinishFailed: FormProps<ReportType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const { TextArea } = Input;

  const glossary = {
    tramNumber: '',
    redIcons: 'Красные иконки',
    whiteIcons: 'Белые иконки',
    greenIcons: 'Зеленые иконки',
    driverReport: '',

    issueMasterUnavailable: 'Мастер недоступен',
    issueMasterNpme: 'Ошибка НПМЕ',
    issueMasterRedis: 'Ошибка redis',
    issueMasterJetHard: 'Ошибки jetson_hardware на мастере',
    issueMasterDeserializer: 'Ошибка десериалайзера на мастере',
    issueMasterNoVideo: 'Нет видео потока на мастере',
    issueMasterCamera: 'Проблема камеры на мастере',
    issueMasterSelects: 'Ошибки селектов на мастере',
    issueMasterCan: 'Нет данных по can',
    issueMasterImu: 'Ошибки IMU',
    issueMasterMap: 'Ошибки карты',
    issueMasterNote: '',

    issueSlaveUnavailable: 'Слэйв недоступен',
    issueSlaveJetHard: 'Ошибки jetson_hardware на слэйве',
    issueSlaveNoVideo: 'Нет видео потока на слэйве',
    issueSlaveDeserializer: 'Ошибка десериалайзера на слэйве',
    issueSlaveCamera: 'Проблема камеры на слэйве',
    issueSlaveRadar: 'Ошибки радара',
    issueSlaveSelects: 'Ошибки селектов на слэйве',
    issueSlaveNote: '',

    issueNavUnavailable: 'БН недоступен',
    issueNavCgn: 'Ошибки служб cgn',
    issueNavNote: '',

    issueNote: '',

    actionTramReboot: 'Перезагрузка трамвая',
    actionRevpn: false,

    actionMasterReVPN: 'Ревпн',
    actionMasterRestartDocker: 'Перезагрузка докера на мастере',
    actionMasterRestartJetHard: 'Перезагрузка jetson hardware на мастере',
    actionMasterReinstallCamDriver: 'Переуставновка драйвера камеры на мастере',
    actionMasterReinstallBundle: 'Переуставновка бандла на мастере',
    actionMasterReboot: 'Sudo reboot мастера',
    actionMasterShutdownR: 'Shutdown -r now мастера',
    actionMasterNote: '',

    actionSlaveRestartDocker: 'Перезагрузка докера на слэйве',
    actionSlaveRestartJetHard: 'Перезагрузка jetson hardware на слэйве',
    actionSlaveReinstallCamDriver: 'Переуставновка драйвера камеры на слэйве',
    actionSlaveReinstallBundle: false,
    actionSlaveReboot: 'Sudo reboot слэйва',
    actionSlaveShutdownR: 'Shutdown -r now слэйва',
    actionSlaveNote: '',

    actionNavRestartCgn: 'Перезагрузка служб cgn* на БН',
    actionNavReinstallBundle: 'Переуставновка бандла на БН',
    actionNavReboot: 'Sudo reboot БН',
    actionNavShutdownR: 'Shutdown -r now БН',
    actionNavNote: '',

    actionNote: '',
  }
  const data = [
    { field1: "row1-col1", field2: "row1-col2", field3: "row1-col3" },
    { field1: "row2-col1", field2: "row2-col2", field3: "row2-col3" }
    // Include additional data as needed
  ];


const Forms: React.FC = () => {
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

    console.log('render')

    const initialValues: ReportType = {
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

    const [ report, setReport ] = useState<ReportType>(initialValues)
    // const [debouncedValue] = useDebounce(inputValue, 500);

    const onFinish: FormProps<ReportType>['onFinish'] = () => {
        console.log('Success:', report);
        dataProcessing(report);
      };
      
    const handleClick = (section: keyof ReportType) => {
        // console.log('section', section)
        // console.log('report.section', report[section])
        setReport(state => ({ ...state, [section]: !state[section]}))
        // console.log('report.section', report[section])
    }
    const handleInput = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, section: string) => {
        setReport(state => ({ ...state, [section]: event.target.value}))
        // console.log(event.target.value);
    }

    const dataProcessing = (report: ReportType) => {

        const data = [];

        for (let val of Object.entries(report)) {

            if(typeof val[1] == 'string') {
                console.log( val,' is string');
                if(val[1] !== '') {
                    data.push()
                }
            }
            if(typeof val[1] == 'boolean') {
                console.log( val,' is boolean');
                
            }
        }
    }
    
    

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
                            <Form.Item<ReportType> name="redIcons" >
                                <CheckBtn label='Red Icons' textColor='red' onClick={() => handleClick('redIcons')}/>
                            </Form.Item>
                            <Form.Item<ReportType>  name="whiteIcons" >
                                <CheckBtn label='White Icons' onClick={() => handleClick('whiteIcons')}/>
                            </Form.Item>
                            <Form.Item<ReportType> name="greenIcons" >
                                <CheckBtn label='Green Icons' textColor='green' onClick={() => handleClick('greenIcons')}/>
                            </Form.Item>
                            <Form.Item<ReportType> name="driverReport" >
                                <p>
                                    <Input size="large" placeholder="Driver Report" style={{ width: 400, resize: 'none' }} onChange={(event) => handleInput(event, 'driverReport')}/>
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
                                <TextArea size="large" placeholder="Notes" style={{ width: 300, resize: 'none', marginTop: '10px'}} onChange={(event) => handleInput(event, 'issueMasterNote')}/>
                            </div>
                            <div style={boxStyle}> 
                                <h1>Slave</h1>
                                <CheckBtn label='Unavailable' onClick={() => handleClick('issueSlaveUnavailable')}/>
                                <CheckBtn label='Jet_Hard' onClick={() => handleClick('issueSlaveJetHard')}/>
                                <CheckBtn label='Deserializer' onClick={() => handleClick('issueSlaveDeserializer')}/>
                                <CheckBtn label='No Video' onClick={() => handleClick('issueSlaveNoVideo')}/>
                                <CheckBtn label='Radar' onClick={() => handleClick('issueSlaveRadar')}/>
                                <CheckBtn label='Selects' onClick={() => handleClick('issueSlaveSelects')}/>
                                <TextArea size="large" placeholder="Notes" style={{ width: 300, resize: 'none', marginTop: '10px'}} onChange={(event) => handleInput(event, 'issueSlaveNote')}/>
                            </div>
                            <div style={boxStyle}> 
                                <h1>Nav</h1>
                                <CheckBtn label='Unavailable' onClick={() => handleClick('issueNavUnavailable')}/>
                                <CheckBtn label='GPS' onClick={() => handleClick('issueNavCgn')}/>
                                <TextArea size="large" placeholder="Notes" style={{ width: 300, resize: 'none', marginTop: '10px'}} onChange={(event) => handleInput(event, 'issueNavNote')}/>
                            </div>
                        </Flex>
                    </Flex>
                    <Input size="large" placeholder="Notes" style={{ width: '94%', resize: 'none', marginTop: '10px'}} onChange={(event) => handleInput(event, 'issueNote')}/>

                    <div style={{marginTop: '20px'}}>
                        <h1>Actions performed</h1>
                    </div>

                    <CheckBtn label={`Tram rebooted ${report.actionTramReboot} times`} onClick={() => handleClick('actionTramReboot')}/>

                    <Flex gap="middle" align="start" vertical>
                        <Flex style={containerStyle} justify={'space-around'} align={'flex-start'}>
                            <div style={boxStyle}> 
                                <h1>Master</h1>
                                <CheckBtn label={`ReVPN ${report.actionRevpn} times`} onClick={() => handleClick('actionRevpn')}/>
                                <CheckBtn label='Restart Docker' onClick={() => handleClick('actionMasterRestartDocker')}/>
                                <CheckBtn label='Restart Jet_Hard' onClick={() => handleClick('actionMasterRestartJetHard')}/>
                                <CheckBtn label='Cam driver reinstall' onClick={() => handleClick('actionMasterReinstallCamDriver')}/>
                                <CheckBtn label='Bundle reinstall' onClick={() => handleClick('actionMasterReinstallBundle')}/>
                                <CheckBtn label='Sudo Reboot' onClick={() => handleClick('actionMasterReboot')}/>
                                <CheckBtn label='Sudo Shutdown -r now' onClick={() => handleClick('actionMasterShutdownR')}/>
                                <TextArea size="large" placeholder="Notes" style={{ width: 300, resize: 'none', marginTop: '10px'}} onChange={(event) => handleInput(event, 'actionMasterNote')}/>
                                
                            </div>
                            <div style={boxStyle}> 
                                <h1>Slave</h1>                       
                                <CheckBtn label='Restart Docker' onClick={() => handleClick('actionSlaveRestartDocker')}/>
                                <CheckBtn label='Restart Jet_Hard' onClick={() => handleClick('actionSlaveRestartJetHard')}/>
                                <CheckBtn label='Cam driver reinstall' onClick={() => handleClick('actionSlaveReinstallCamDriver')}/>
                                <CheckBtn label='Bundle reinstall' onClick={() => handleClick('actionSlaveReinstallBundle')}/>
                                <CheckBtn label='Sudo Reboot' onClick={() => handleClick('actionSlaveReboot')}/>
                                <CheckBtn label='Sudo Shutdown -r now' onClick={() => handleClick('actionSlaveShutdownR')}/>
                                <TextArea size="large" placeholder="Notes" style={{ width: 300, resize: 'none', marginTop: '10px'}} onChange={(event) => handleInput(event, 'actionSlaveNote')}/>
                            </div>
                            <div style={boxStyle}> 
                                <h1>Nav</h1>
                                <CheckBtn label='Restart cgn*' onClick={() => handleClick('actionNavRestartCgn')}/>
                                <CheckBtn label='Bundle reinstall' onClick={() => handleClick('actionNavReinstallBundle')}/>
                                <CheckBtn label='Sudo Reboot' onClick={() => handleClick('actionNavReboot')}/>
                                <CheckBtn label='Sudo Shutdown -r now' onClick={() => handleClick('actionNavShutdownR')}/>
                                <TextArea size="large" placeholder="Notes" style={{ width: 300, resize: 'none', marginTop: '10px'}} onChange={(event) => handleInput(event, 'actionNavNote')}/>
                            </div>
                        </Flex>
                    </Flex>
                    <Input size="large" placeholder="Notes" style={{ width: '94%', resize: 'none', marginTop: '10px'}} onChange={(event) => handleInput(event, 'actionNote')}/>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </ConfigProvider>
                
            </Form>
            <DownloadCSV data={report} fileName="tram_report" />
            <ExportCSV data={data} fileName="tram_report.csv" />
        </>
        
    );
    
}

export default Forms;