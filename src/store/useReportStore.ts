import { create } from 'zustand';
import dataProcessing from '../data-processing';
import { DataType, ReportEntryType, ReportState } from "../types";


let initialReportValue: DataType[] = []

const saveToLocalStorage = (report: ReportEntryType[]) => {
    localStorage.setItem('reportData', JSON.stringify(report))
};
  
const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem('reportData');
    return savedData ? JSON.parse(savedData) : initialReportValue;
};

const useReportStore = create<ReportState>((set, get) => ({
    report: loadFromLocalStorage(),
    addEntry: (reportEntry: ReportEntryType) => {
        const { report } = get();
        const processedData = dataProcessing(reportEntry);
        const updatedReport = [...report, ...processedData];
        set({ report: updatedReport });
        saveToLocalStorage(updatedReport)
    },
    editEntry: (reportEntry: ReportEntryType) => {
        const { report } = get();
        const updatedReport = report.map(entry => 
            entry.vehicleNumber === reportEntry.vehicleNumber ? { ...entry, ...reportEntry } : entry
        );
        set({ report: updatedReport });
        localStorage.setItem('reportData', JSON.stringify(updatedReport));
    },
    clearReport: () => {
        set({ report: [] });
        localStorage.clear();
    },
})) 

export default useReportStore;