import { create } from 'zustand';
import dataProcessing from '../data-processing';
import { ReportType, DataType, ReportEntryType, ReportHeaders, ReportState } from "../types";


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

    // increase: () => set((report) => {
    //     const newBears = report + 1;
    //     console.log('Bears increased:', newBears);
    //     return { bears: newBears };
    //   }),
    // addEntry: (reportEntry: ReportEntryType) => {
    //     // console.log('reportEntry', reportEntry)
    //     const processedData = dataProcessing(reportEntry);
        
    //     const { report } = get();
    //     // console.log('report', report);
    //     // console.log('processedData', processedData);
    //     const updatedReport = [...report, ...processedData];
    //     // const updatedReport = [...report, processedData];
    //     // console.log('updatedReport', updatedReport)
    //     set((report) => { 
    //         console.log('store set report', report);
    //         const processedData = dataProcessing(reportEntry);
    //         // const updatedReport = [...report, ...processedData];
    //         // report: updatedReport 
    //         return report;
    //     });
    //     // localStorage.setItem('reportData', JSON.stringify(updatedReport));
    //     saveToLocalStorage(updatedReport)
    // },



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
        console.log('editEntry reportEntry', reportEntry);
        const updatedReport = report.map(entry => 
            entry.tramNumber === reportEntry.tramNumber ? { ...entry, ...reportEntry } : entry
        );
        console.log('editEntry updatedReport', updatedReport);
        set({ report: updatedReport });
        // set({ report: updatedReport });
        localStorage.setItem('reportData', JSON.stringify(updatedReport));
        
        console.log('editEntry report', report);
    },
    clearReport: () => {
        set({ report: [] });
        console.log('clear report');
        console.log('clear local storage');
        localStorage.clear();
    },
})) 

export default useReportStore;