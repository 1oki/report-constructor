import React, { useState, useEffect } from 'react';
import { Button, Flex, Input, Form, ConfigProvider, FormProps} from 'antd';
import CheckBtn from './checkBtn';
import ExportCSV from './exportCsv';
import exportToExcel from './exportXlsx';
import * as XLSX from 'xlsx';
import useReportStore from './store/useReportStore';


const Table: React.FC = () => {

    const { report, editEntry }  = useReportStore();


    const [data, setData] = useState<Array<any>>([
        ["Номер трамвая", "ID БВТ", "Время", "Жалобы", "Ошибки", "Предпринятые меры"],
        // ["", "", "", "", "", ""],
    ]);
  
    const handleChange = (rowIndex: number, colIndex: number, value: string) => {
      const newData = [...data];
      newData[rowIndex][colIndex] = value;
      setData(newData);
      console.log('rowIndex', rowIndex);
      console.log('colIndex', colIndex);
      console.log('value', value);
    //   report[]
    //   editEntry(value)
    };

    useEffect(() => {
        console.log('report', report);
        console.log('data', data);
    },[])
  
    return (
      <div>
        <table border={1}>
          <thead>
            <tr>
              {data[0].map((header: string, index: any) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
                {report.map((row: any, rowIndex: number) => (
                    <tr key={rowIndex}>
                        <td>
                            <Input
                                value={row.tramNumber} // предполагается, что у вас есть поле tramNumber
                                onChange={(e) => handleChange(rowIndex, 0, e.target.value)}
                                style={{ width: '100%' }}
                            />
                        </td>
                        <td>
                            <Input
                                value={row.idBVT} // предположим, у вас есть поле idBVT
                                onChange={(e) => handleChange(rowIndex, 1, e.target.value)}
                                style={{ width: '100%' }}
                            />
                        </td>
                        <td>
                            <Input
                                value={row.time} // предположим, у вас есть поле time
                                onChange={(e) => handleChange(rowIndex, 2, e.target.value)}
                                style={{ width: '100%' }}
                            />
                        </td>
                        <td>
                            <Input
                                value={row.complaints} // предположим, у вас есть поле complaints
                                onChange={(e) => handleChange(rowIndex, 3, e.target.value)}
                                style={{ width: '100%' }}
                            />
                        </td>
                        <td>
                            <Input
                                value={row.errors} // предположим, у вас есть поле errors
                                onChange={(e) => handleChange(rowIndex, 4, e.target.value)}
                                style={{ width: '100%' }}
                            />
                        </td>
                        <td>
                            <Input
                                value={row.measures} // предположим, у вас есть поле measures
                                onChange={(e) => handleChange(rowIndex, 5, e.target.value)}
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