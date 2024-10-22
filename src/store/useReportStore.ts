import { create } from 'zustand';


type ReportEntryType = {
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

type ReportHeaders = {
    tramNumber: string,
    id: string,
    time: string,
    driversReport: string,
    issue: string,
    action: string,
}

type ReportState = {
    report: ReportEntryType[],
    // getReport: () => void;
    addEntry: (report: ReportEntryType) => void;
    editEntry: (tramNumber: string) => void;
    clearReport: () => void;
    readLocalStorage: () => void;
    // writeToLocalStorage: () => void;
}

let initialReportValue: ReportHeaders = {
        tramNumber: 'Номер трамвая',
        id: 'ID БВТ',
        time: 'Время',
        driversReport: 'Жалобы',
        issue: 'Ошибки',
        action: 'Предпринятые меры',
    }


const useReportStore = create<ReportState>()((set, get) => ({
    report: [initialReportValue],
    readLocalStorage: () => {
        console.log('readLocalStorage');
        const localStorageState = localStorage.getItem('reportData');
        set((state) => ({ ...state, localStorageState}));
        // console.log('localStorageState', localStorageState);
    },
    // writeToLocalStorage: () => {
    //     const { report } = get();
    //     console.log('writeToLocalStorage');
    //     localStorage.setItem('reportData', JSON.stringify(report));
    // },
    addEntry: (reportEntry: ReportEntryType) => {
        console.log('reportEntry', reportEntry)
        set((state) => ({ ...state, reportEntry}))
        const { report } = get();
        console.log('store report',report)
        localStorage.setItem('reportData', JSON.stringify(report));
    },
    editEntry: (tramNumber: string) => {
        set((state) => ({ ...state, tramNumber}))
        const { report } = get();
        localStorage.setItem('reportData', JSON.stringify(report));
    },
    clearReport: () => {
        console.log('clear report');
        console.log('clear local storage');
        localStorage.clear();
    },
})) 

export default useReportStore;