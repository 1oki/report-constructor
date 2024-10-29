export type ReportType = {
    vehicleNumber: string,
    driversReportRedIcons?: boolean,
    driversReportWhiteIcons?: boolean,
    driversReportGreenIcons?: boolean,
    driversReportNote?: string,

    issueMainDeviceUnavailable?: boolean,
    issueMainDeviceN1?: boolean,
    issueMainDeviceR1?: boolean,
    issueMainDeviceJ1?: boolean,
    issueMainDeviceD1?: boolean,
    issueMainDeviceNoVideo?: boolean,
    issueMainDeviceCamera?: boolean,
    issueMainDeviceS1?: false,
    issueMainDeviceCan?: boolean,
    issueMainDeviceI1?: boolean,
    issueMainDeviceMap?: boolean,
    issueMainDeviceNote?: string,

    issueSecondaryDeviceUnavailable?: boolean,
    issueSecondaryDeviceJetH1?: boolean,
    issueSecondaryDeviceNoVideo?: boolean,
    issueSecondaryDeviceD1?: boolean,
    issueSecondaryDeviceCamera?: boolean,
    issueSecondaryDeviceRadar?: boolean,
    issueSecondaryDeviceS1?: boolean,
    issueSecondaryDeviceNote?: string,

    issueNavigationBlockUnavailable?: boolean, 
    issueNavigationBlockC1?: boolean,
    issueNavigationBlockNote?: string,

    issueNote?: string,

    actionVehicleReboot?: boolean,
    actionRevpn?: boolean,

    actionMainDeviceR1?: boolean,
    actionMainDeviceRestartDocker?: boolean,
    actionMainDeviceRestartJ1?: boolean,
    actionMainDeviceReinstallCamDriver?: boolean,
    actionMainDeviceReinstallBundle?: boolean,
    actionMainDeviceReboot?: boolean,
    actionMainDeviceShutdownR?: boolean,
    actionMainDeviceNote?: string,

    actionSecondaryDeviceRestartDocker?: boolean,
    actionSecondaryDeviceRestartJ1?: boolean,
    actionSecondaryDeviceReinstallCamDriver?: boolean,
    actionSecondaryDeviceReinstallBundle?: boolean,
    actionSecondaryDeviceReboot?: boolean,
    actionSecondaryDeviceShutdownR?: boolean,
    actionSecondaryDeviceNote?: string,

    actionNavigationBlockRestartC1?: boolean,
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
    issueMainDeviceN1?: boolean,
    issueMainDeviceR1?: boolean,
    issueMainDeviceJ1?: boolean,
    issueMainDeviceD1?: boolean,
    issueMainDeviceNoVideo?: boolean,
    issueMainDeviceCamera?: boolean,
    issueMainDeviceS1?: false,
    issueMainDeviceCan?: boolean,
    issueMainDeviceI1?: boolean,
    issueMainDeviceMap?: boolean,
    issueMainDeviceNote?: string,

    issueSecondaryDeviceUnavailable?: boolean,
    issueSecondaryDeviceJetH1?: boolean,
    issueSecondaryDeviceNoVideo?: boolean,
    issueSecondaryDeviceD1?: boolean,
    issueSecondaryDeviceCamera?: boolean,
    issueSecondaryDeviceRadar?: boolean,
    issueSecondaryDeviceS1?: boolean,
    issueSecondaryDeviceNote?: string,

    issueNavigationBlockUnavailable?: boolean, 
    issueNavigationBlockC1?: boolean,
    issueNavigationBlockNote?: string,

    issueNote?: string,

    actionVehicleReboot?: boolean,
    actionRevpn?: boolean,

    actionMainDeviceR1?: boolean,
    actionMainDeviceRestartDocker?: boolean,
    actionMainDeviceRestartJ1?: boolean,
    actionMainDeviceReinstallCamDriver?: boolean,
    actionMainDeviceReinstallBundle?: boolean,
    actionMainDeviceReboot?: boolean,
    actionMainDeviceShutdownR?: boolean,
    actionMainDeviceNote?: string,

    actionSecondaryDeviceRestartDocker?: boolean,
    actionSecondaryDeviceRestartJ1?: boolean,
    actionSecondaryDeviceReinstallCamDriver?: boolean,
    actionSecondaryDeviceReinstallBundle?: boolean,
    actionSecondaryDeviceReboot?: boolean,
    actionSecondaryDeviceShutdownR?: boolean,
    actionSecondaryDeviceNote?: string,

    actionNavigationBlockRestartC1?: boolean,
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