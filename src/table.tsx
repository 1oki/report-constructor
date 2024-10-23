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
    //   editEntry()
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
            {report.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell: any, colIndex: any) => (
                  <td key={colIndex}>
                    <Input
                      value={cell}
                      onChange={(e) => handleChange(rowIndex + 1, colIndex, e.target.value)}
                      style={{ width: '100%' }}
                    />
                    
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default Table;