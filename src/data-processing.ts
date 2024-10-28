import { ReportType, DataType, ReportEntryType } from "./types";



const dataProcessing = (report: ReportEntryType) => {
        
    const dictionary: any = {
        vehicleNumber: '',
        driversReportRedIcons: 'Красные иконки',
        driversReportWhiteIcons: 'Белые иконки',
        driversReportGreenIcons: 'Зеленые иконки',
        driversReportNote: '',
        
        issueMainDeviceUnavailable: 'Мастер недоступен',
        issueMainDeviceNpme: 'Ошибка НПМЕ',
        issueMainDeviceRedis: 'Ошибка redis',
        issueMainDeviceJetHard: 'Ошибки jetson_hardware на мастере',
        issueMainDeviceDeserializer: 'Ошибка десериалайзера на мастере',
        issueMainDeviceNoVideo: 'Нет видео потока на мастере',
        issueMainDeviceCamera: 'Проблема камеры на мастере',
        issueMainDeviceSelects: 'Ошибки селектов на мастере',
        issueMainDeviceCan: 'Нет данных по can',
        issueMainDeviceImu: 'Ошибки IMU',
        issueMainDeviceMap: 'Ошибки карты',
        issueMainDeviceNote: '',
        
        issueSecondaryDeviceUnavailable: 'Слэйв недоступен',
        issueSecondaryDeviceJetHard: 'Ошибки jetson_hardware на слэйве',
        issueSecondaryDeviceNoVideo: 'Нет видео потока на слэйве',
        issueSecondaryDeviceDeserializer: 'Ошибка десериалайзера на слэйве',
        issueSecondaryDeviceCamera: 'Проблема камеры на слэйве',
        issueSecondaryDeviceRadar: 'Ошибки радара',
        issueSecondaryDeviceSelects: 'Ошибки селектов на слэйве',
        issueSecondaryDeviceNote: '',
        
        issueNavigationBlockUnavailable: 'БН недоступен',
        issueNavigationBlockCgn: 'Ошибки служб cgn',
        issueNavigationBlockNote: '',
        
        issueNote: '',
        
        actionVehicleReboot: 'Перезагрузка трамвая',
        actionRevpn: false,
        
        actionMainDeviceReVPN: 'Ревпн',
        actionMainDeviceRestartDocker: 'Перезагрузка докера на мастере',
        actionMainDeviceRestartJetHard: 'Перезагрузка jetson hardware на мастере',
        actionMainDeviceReinstallCamDriver: 'Переуставновка драйвера камеры на мастере',
        actionMainDeviceReinstallBundle: 'Переуставновка бандла на мастере',
        actionMainDeviceReboot: 'Sudo reboot мастера',
        actionMainDeviceShutdownR: 'Shutdown -r now мастера',
        actionMainDeviceNote: '',
        
        actionSecondaryDeviceRestartDocker: 'Перезагрузка докера на слэйве',
        actionSecondaryDeviceRestartJetHard: 'Перезагрузка jetson hardware на слэйве',
        actionSecondaryDeviceReinstallCamDriver: 'Переуставновка драйвера камеры на слэйве',
        actionSecondaryDeviceReinstallBundle: false,
        actionSecondaryDeviceReboot: 'Sudo reboot слэйва',
        actionSecondaryDeviceShutdownR: 'Shutdown -r now слэйва',
        actionSecondaryDeviceNote: '',
        
        actionNavigationBlockRestartCgn: 'Перезагрузка служб cgn* на БН',
        actionNavigationBlockReinstallBundle: 'Переуставновка бандла на БН',
        actionNavigationBlockReboot: 'Sudo reboot БН',
        actionNavigationBlockShutdownR: 'Shutdown -r now БН',
        actionNavigationBlockNote: '',
        
        actionNote: '',
    }
    const issue = 'issue';
    const action = 'action';
    const driversReport = 'driversReport';
    const date = new Date();
    const processedData = [];

    const data: DataType = {
        vehicleNumber: '',
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
        
        if(key === 'vehicleNumber' && typeof(value) != "boolean") {
            data.vehicleNumber = value;
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