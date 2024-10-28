import * as XLSX from 'xlsx-js-style';

const exportToExcel = (data: any) => {
  const currentDate = new Date();
  const dateISOString = currentDate.toISOString();
  const dateWithoutTime = dateISOString.split('T')[0];

  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(data);

  XLSX.utils.sheet_add_aoa(worksheet, [["Number", "ID", "Time", "Complaints", "Issues", "Actions performed"]], { origin: "A1" });

  const range = XLSX.utils.decode_range(worksheet['!ref']!);
  
  worksheet['!cols'] = [
    { wpx: 100 },  
    { wpx: 150 },
    { wpx: 50 },
    { wpx: 200 },
    { wpx: 200 },
    { wpx: 300 },
  ];
  for (let r = range.s.r; r <= range.e.r; ++r) {
    for (let c = range.s.c; c <= range.e.c; ++c) {
      const cellAddress = XLSX.utils.encode_cell({ r, c });
      if (!worksheet[cellAddress]) continue;
      if (r === 0 ) {
        worksheet[cellAddress].s = {
          fill: {
            fgColor: {
              rgb: '85BD5F'
            }
          },
          alignment: { 
            horizontal: "center", 
            vertical: "center"
          },
          border: {
            right: {
              style: "thin",
              color: "999999"
            },
            left: {
              style: "thin",
              color: "999999"
            },
            top:{
              style: "thin",
              color: "999999"
            },
            bottom:{
              style: "thin",
              color: "999999"
            }
          }
        }
        continue;
      }
      worksheet[cellAddress].s = {
        fill: {
          fgColor: {
            rgb: r % 2 === 0 ? 'E2EFDA' : 'C6E0B4'
          }
        },
        alignment: { 
          wrapText: true,
          horizontal: "center", 
          vertical: "center"
        },
        border: {
          right: {
            style: "thin",
            color: "999999"
          },
          left: {
            style: "thin",
            color: "999999"
          },
          top:{
            style: "thin",
            color: "999999"
          },
          bottom:{
            style: "thin",
            color: "999999"
          }
        }
      };
    }
  }

  XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');
  XLSX.writeFile(workbook, `Отчеты по трамваям ${dateWithoutTime}.xlsx`);
};

export default exportToExcel;
