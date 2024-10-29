import { DataType, ReportEntryType } from "./types";



const dataProcessing = (report: ReportEntryType) => {
        
    const dictionary: any = {
        vehicleNumber: '',
        driversReportRedIcons: 'Red Icons',
        driversReportWhiteIcons: 'White Icons',
        driversReportGreenIcons: 'Green Icons',
        driversReportNote: '',
        
        issueMainDeviceUnavailable: 'MainDevice Unavailable',
        issueMainDeviceN1: 'MainDeviceN1 error',
        issueMainDeviceR1: 'Ошибка redis error',
        issueMainDeviceJ1: 'MainDeviceJ1 error',
        issueMainDeviceD1: 'MainDeviceD1 error',
        issueMainDeviceNoVideo: 'MainDeviceNoVideo error',
        issueMainDeviceCamera: 'MainDeviceCamera error',
        issueMainDeviceS1: 'MainDeviceS1 error',
        issueMainDeviceCan: 'MainDeviceCan error',
        issueMainDeviceI1: 'MainDeviceI1 error',
        issueMainDeviceMap: 'Map error',
        issueMainDeviceNote: '',
        
        issueSecondaryDeviceUnavailable: 'SecondaryDevice Unavailable',
        issueSecondaryDeviceJetH1: 'SecondaryDevice J1',
        issueSecondaryDeviceNoVideo: 'SecondaryDevice No Video',
        issueSecondaryDeviceD1: 'SecondaryDevice D1',
        issueSecondaryDeviceCamera: 'SecondaryDevice Camera error',
        issueSecondaryDeviceRadar: 'SecondaryDevice Radar error',
        issueSecondaryDeviceS1: 'SecondaryDevice S1',
        issueSecondaryDeviceNote: '',
        
        issueNavigationBlockUnavailable: 'Navigation Block Unavailable',
        issueNavigationBlockC1: 'NavigationBlock services error',
        issueNavigationBlockNote: '',
        
        issueNote: '',
        
        actionVehicleReboot: 'Vehicle Reboot',
        
        actionMainDeviceR1: 'MainDeviceR1',
        actionMainDeviceRestartDocker: 'MainDevice Restart Docker',
        actionMainDeviceRestartJ1: 'MainDevice Restart J1',
        actionMainDeviceReinstallCamDriver: 'MainDevice Reinstall Cam Driver',
        actionMainDeviceReinstallBundle: 'MainDevice Reinstall Bundle',
        actionMainDeviceReboot: 'MainDevice Reboot',
        actionMainDeviceShutdownR: 'MainDevice Shutdown now -R',
        actionMainDeviceNote: '',
        
        actionSecondaryDeviceRestartDocker: 'SecondaryDevice Restart Docker',
        actionSecondaryDeviceRestartJ1: 'SecondaryDevice Restart J1',
        actionSecondaryDeviceReinstallCamDriver: 'SecondaryDevice Reinstall Cam Driver',
        actionSecondaryDeviceReinstallBundle: 'SecondaryDevice Reinstall Bundle',
        actionSecondaryDeviceReboot: 'SecondaryDevice Reboot',
        actionSecondaryDeviceShutdownR: 'econdaryDevice Shutdown now -R',
        actionSecondaryDeviceNote: '',
        
        actionNavigationBlockRestartC1: 'NavigationBlock Restart C1',
        actionNavigationBlockReinstallBundle: 'NavigationBlock Reinstall Bundle',
        actionNavigationBlockReboot: 'NavigationBlock Reboot',
        actionNavigationBlockShutdownR: '',
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
    }
    processedData.push(data);
    return processedData;
}

export default dataProcessing;