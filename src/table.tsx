import React from 'react';
import { Button, Flex, Input} from 'antd';
import useReportStore from './store/useReportStore';
import { DataType } from './types';


const Table: React.FC = () => {
    const { report, editEntry, clearReport }  = useReportStore();
    const { TextArea } = Input;

    const tableHeaders = ["Number", "ID", "Time", "Complaints", "Issues", "Actions performed"]
  
    const handleChange = (row: DataType, rowIndex: number, colIndex: number, value: string, label: string) => {
        const updatedData = {...row, [label] : value}
        editEntry(updatedData)
    };

    const clear = () => {
        clearReport()
    };
  
    return (
      <div>
        <Flex justify={'space-around'} align={'flex-start'}>
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
                                value={row.vehicleNumber} 
                                onChange={(e) => handleChange(row, rowIndex, 0, e.target.value, 'vehicleNumber')}
                                style={{ width: '100%' }}
                            />
                        </td>
                        <td>
                            <Input 
                                value={row.id} 
                                onChange={(e) => handleChange(row, rowIndex, 1, e.target.value, 'id')}
                                style={{ width: '100%' }}
                            />
                        </td>
                        <td>
                            <Input
                                value={row.time} 
                                onChange={(e) => handleChange(row, rowIndex, 2, e.target.value, 'time')}
                                style={{ width: '100%' }}
                            />
                        </td>
                        <td>
                            <TextArea
                                value={row.driversReport} 
                                onChange={(e) => handleChange(row, rowIndex, 3, e.target.value, 'driversReport')}
                                style={{ width: '100%' }}
                            />
                        </td>
                        <td>
                            <TextArea
                                value={row.issue} 
                                onChange={(e) => handleChange(row, rowIndex, 4, e.target.value, 'issue')}
                                style={{ width: '100%' }}
                            />
                        </td>
                        <td>
                            <TextArea rows={2}
                                value={row.action} 
                                onChange={(e) => handleChange(row, rowIndex, 5, e.target.value, 'action')}
                                style={{ width: '100%' }}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </Flex>
        <Button danger style={{ marginTop: '150px', right: '0px'}} onClick={clear}>
            Сlear All
        </Button>
      </div>
    );
  };

  export default Table;