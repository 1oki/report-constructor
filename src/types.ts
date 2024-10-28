export type ReportType = {
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

export type DataType = {
    vehicleNumber: string,
    id: string,
    time: string,
    driversReport: string,
    issue: string,
    action: string,
}

// export
export type ReportEntryType = {
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

export type ReportHeaders = {
    vehicleNumber: string,
    id: string,
    time: string,
    driversReport: string,
    issue: string,
    action: string,
}

export type ReportState = {
    report: DataType[],
    addEntry: (reportEntry: ReportEntryType) => void;
    editEntry: (reportEntry: ReportEntryType) => void;
    clearReport: () => void;
}