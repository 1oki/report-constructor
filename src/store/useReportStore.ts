import { create } from 'zustand';
import dataProcessing from '../data-processing';
import { ReportType, DataType, ReportEntryType, ReportHeaders, ReportState } from "../types";


// type ReportEntryType = {
//     tramNumber: string,
//     driversReportRedIcons?: boolean,
//     driversReportWhiteIcons?: boolean,
//     driversReportGreenIcons?: boolean,
//     driversReportNote?: string,

//     issueMasterUnavailable?: boolean,
//     issueMasterNpme?: boolean,
//     issueMasterRedis?: boolean,
//     issueMasterJetHard?: boolean,
//     issueMasterDeserializer?: boolean,
//     issueMasterNoVideo?: boolean,
//     issueMasterCamera?: boolean,
//     issueMasterSelects?: false,
//     issueMasterCan?: boolean,
//     issueMasterImu?: boolean,
//     issueMasterMap?: boolean,
//     issueMasterNote?: string,

//     issueSlaveUnavailable?: boolean,
//     issueSlaveJetHard?: boolean,
//     issueSlaveNoVideo?: boolean,
//     issueSlaveDeserializer?: boolean,
//     issueSlaveCamera?: boolean,
//     issueSlaveRadar?: boolean,
//     issueSlaveSelects?: boolean,
//     issueSlaveNote?: string,

//     issueNavUnavailable?: boolean, 
//     issueNavCgn?: boolean,
//     issueNavNote?: string,

//     issueNote?: string,

//     actionTramReboot?: boolean,
//     actionRevpn?: boolean,

//     actionMasterReVPN?: boolean,
//     actionMasterRestartDocker?: boolean,
//     actionMasterRestartJetHard?: boolean,
//     actionMasterReinstallCamDriver?: boolean,
//     actionMasterReinstallBundle?: boolean,
//     actionMasterReboot?: boolean,
//     actionMasterShutdownR?: boolean,
//     actionMasterNote?: string,

//     actionSlaveRestartDocker?: boolean,
//     actionSlaveRestartJetHard?: boolean,
//     actionSlaveReinstallCamDriver?: boolean,
//     actionSlaveReinstallBundle?: boolean,
//     actionSlaveReboot?: boolean,
//     actionSlaveShutdownR?: boolean,
//     actionSlaveNote?: string,

//     actionNavRestartCgn?: boolean,
//     actionNavReinstallBundle?: boolean,
//     actionNavReboot?: boolean,
//     actionNavShutdownR?: boolean,
//     actionNavNote?: string,

//     actionNote?: string,
// };

// type ReportHeaders = {
//     tramNumber: string,
//     id: string,
//     time: string,
//     driversReport: string,
//     issue: string,
//     action: string,
// }

// type ReportState = {
//     report: ReportEntryType[],
//     // getReport: () => void;
//     addEntry: (reportEntry: ReportEntryType) => void;
//     editEntry: (reportEntry: ReportEntryType) => void;
//     clearReport: () => void;
//     // readLocalStorage: () => void;
//     // writeToLocalStorage: () => void;
// }

let initialReportValue: DataType[] = []
// let initialReportValue: ReportHeaders = {
//     tramNumber: 'Номер трамвая',
//     id: 'ID БВТ',
//     time: 'Время',
//     driversReport: 'Жалобы',
//     issue: 'Ошибки',
//     action: 'Предпринятые меры',
// }

// const saveDataToLocalStorage = () => {
    //     console.log('saveDataToLocalStorage', saveDataToLocalStorage);
    //     localStorage.setItem('reportData', JSON.stringify(report));
    // };

    // const savedData = localStorage.getItem('reportData');
    //     if (savedData) {
    //         console.log('data in local storage', JSON.parse(savedData));
    //         addEntry(JSON.parse(savedData))
    //     }

// Функция для сохранения состояния в localStorage
const saveToLocalStorage = (report: ReportEntryType[]) => {
    localStorage.setItem('reportData', JSON.stringify(report))
};
  
  // Функция для чтения состояния из localStorage
const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem('reportData');
    return savedData ? JSON.parse(savedData) : initialReportValue;
};

const useReportStore = create<ReportState>((set, get) => ({
    report: loadFromLocalStorage(),
    addEntry: (reportEntry: ReportEntryType) => {
        // console.log('reportEntry', reportEntry)
        const processedData = dataProcessing(reportEntry);
        
        const { report } = get();
        console.log('report', report);
        console.log('processedData', processedData);
        const updatedReport = [...report, ...processedData];
        // const updatedReport = [...report, processedData];
        // console.log('updatedReport', updatedReport)
        set({ report: updatedReport });
        // localStorage.setItem('reportData', JSON.stringify(updatedReport));
        saveToLocalStorage(updatedReport)
    },
    editEntry: (reportEntry: ReportEntryType) => {
        const { report } = get();
        const updatedReport = report.map(entry => 
            entry.tramNumber === reportEntry.tramNumber ? { ...entry, reportEntry } : entry
        );
        set({ report: updatedReport });
        localStorage.setItem('reportData', JSON.stringify(updatedReport));
    },
    clearReport: () => {
        set({ report: [] });
        console.log('clear report');
        console.log('clear local storage');
        localStorage.clear();
    },
})) 

export default useReportStore;