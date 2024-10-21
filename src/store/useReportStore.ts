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

type ReportState = {
    report: ReportEntryType[],
    getReport: () => void;
    addEntry: (report: ReportEntryType) => void;
    editEntry: (report: ReportEntryType) => void;
    clearReport: () => void;
    readLocalStorage: () => void;
}

const useReportStore = create<ReportState>()((set, get) => ({
    report: [],
    readLocalStorage: () => {
        console.log('readLocalStorage');
        const localStorageState = localStorage.getItem('reportData');
        set((state) => ({ ...state, localStorageState}));
        console.log('localStorageState', localStorageState);
    },
    getReport: () => {
        const { report } = get();
    },
    addEntry: (reportEntry: ReportEntryType) => set((state) => ({ ...state, reportEntry})),
    editEntry: (reportEntry: ReportEntryType) => set((state) => ({ ...state, reportEntry})),
    clearReport: () => {
    },
})) 

export default useReportStore;