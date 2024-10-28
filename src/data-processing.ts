import { ReportType, DataType, ReportEntryType } from "./types";



const dataProcessing = (report: ReportEntryType) => {
        
    const dictionary: any = {
        tramNumber: '',
        driversReportRedIcons: 'Красные иконки',
        driversReportWhiteIcons: 'Белые иконки',
        driversReportGreenIcons: 'Зеленые иконки',
        driversReportNote: '',
        
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
    const issue = 'issue';
    const action = 'action';
    const driversReport = 'driversReport';
    const date = new Date();
    const processedData = [];

    const data: DataType = {
        tramNumber: '',
        id: '',
        time: date.toLocaleTimeString(),
        driversReport: '',
        issue: '',
        action: '',
    };
    
    for (const [key, value] of Object.entries(report)) {
        if( value === '' || value === false) {
            continue;
        }     
        
        if(key === 'tramNumber' && typeof(value) != "boolean") {
            data.tramNumber = value;
        }

        if(key.includes(driversReport)) {
            if(value === true) {
                data.driversReport = data.driversReport + dictionary[key] + ', \n';
            }
            if(typeof value === 'string') {
                data.driversReport = data.driversReport + value + ', \n';
            }
        }

        if(key.includes(issue)) {
            if(value === true) {
                data.issue = data.issue + dictionary[key] + ', \n';
            }
            if(typeof value === 'string') {
                data.issue = data.issue + value + ', \n';
            }
        }

        if(key.includes(action)) {
            if(value === true) {
                data.action = data.action + dictionary[key] + ', \n';
            }
            if(typeof value === 'string') {
                data.action = data.action + value + ', \n';
            }
        }
        // console.log('data', data);
        
    }
    processedData.push(data);
    // console.log('processedData', processedData);
    return processedData;
}

export default dataProcessing;