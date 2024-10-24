import React, { useState, useEffect } from 'react';
import { Button, Flex, Input, Form, ConfigProvider, FormProps} from 'antd';
import CheckBtn from './checkBtn';
import ExportCSV from './exportCsv';
import exportToExcel from './exportXlsx';
import * as XLSX from 'xlsx';
import useReportStore from './store/useReportStore';
import { DataType } from './types';


const Table: React.FC = () => {
    console.log('table render')

    const { report, editEntry }  = useReportStore();


    const [data, setData] = useState<Array<any>>([
        // ["Номер трамвая", "ID БВТ", "Время", "Жалобы", "Ошибки", "Предпринятые меры"],
        ["", "", "", "", "", ""],
    ]);
    const tableHeaders = ["Номер трамвая", "ID БВТ", "Время", "Жалобы", "Ошибки", "Предпринятые меры"]
  
    const handleChange = (row: DataType, rowIndex: number, colIndex: number, value: string, label: string) => {
    //   const newData = [...data];
    //   newData[rowIndex][colIndex] = value;
    //   setData(newData);
        console.log('row', row);
        console.log('label', label);
        console.log('value', value);
    //   report[]
        const updatedData = {...row, [label] : value}
        console.log('updatedData', updatedData);
        editEntry(row)
    };

    // useEffect(() => {

    // },[report])
  
    return (
      <div>
        <table border={1}>
          <thead>
            <tr>
              {tableHeaders.map((header: string, index: any) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
                {report.map((row: DataType, rowIndex: number) => (
                    <tr key={rowIndex}>
                        <td>
                            <Input 
                                value={row.tramNumber} // предполагается, что у вас есть поле tramNumber
                                onChange={(e) => handleChange(row, rowIndex, 0, e.target.value, 'tramNumber')}
                                style={{ width: '100%' }}
                            />
                        </td>
                        <td>
                            <Input 
                                value={row.id} // предположим, у вас есть поле idBVT
                                onChange={(e) => handleChange(row, rowIndex, 1, e.target.value, 'id')}
                                style={{ width: '100%' }}
                            />
                        </td>
                        <td>
                            <Input
                                value={row.time} // предположим, у вас есть поле time
                                onChange={(e) => handleChange(row, rowIndex, 2, e.target.value, 'time')}
                                style={{ width: '100%' }}
                            />
                        </td>
                        <td>
                            <Input
                                value={row.driversReport} // предположим, у вас есть поле complaints
                                onChange={(e) => handleChange(row, rowIndex, 3, e.target.value, 'driversReport')}
                                style={{ width: '100%' }}
                            />
                        </td>
                        <td>
                            <Input
                                value={row.issue} // предположим, у вас есть поле errors
                                onChange={(e) => handleChange(row, rowIndex, 4, e.target.value, 'issue')}
                                style={{ width: '100%' }}
                            />
                        </td>
                        <td>
                            <Input
                                value={row.action} // предположим, у вас есть поле measures
                                onChange={(e) => handleChange(row, rowIndex, 5, e.target.value, 'action')}
                                style={{ width: '100%' }}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    );
  };

  export default Table;