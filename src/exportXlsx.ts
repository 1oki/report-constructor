// import * as XLSX from 'xlsx';
import * as XLSX from 'xlsx-js-style';

// Данные для экспорта (пример)
// const data = [
//   {
//     "Tram №": "001",
//     "Red Icons": true,
//     "White Icons": false,
//     "Green Icons": true,
//     "Driver Report": "Driver report 1",
//   },
//   {
//     "Tram №": "002",
//     "Red Icons": false,
//     "White Icons": true,
//     "Green Icons": false,
//     "Driver Report": "Driver report 2",
//   },
//   {
//     "Tram №": "003",
//     "Red Icons": true,
//     "White Icons": true,
//     "Green Icons": true,
//     "Driver Report": "Driver report 3",
//   }
// ];

// Функция экспорта в Excel с цветными строками
const exportToExcel = (data: any) => {
  const currentDate = new Date();
  const dateISOString = currentDate.toISOString();
  const dateWithoutTime = dateISOString.split('T')[0];

  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(data, {
    header: ["tramNumber", "id", "time", "driversReport","issue", "action"],
    skipHeader: true // Пропустить автоматическую генерацию заголовков
  });

  // const headers = ["Трамвай №", "Красные иконки", "Белые иконки", "Зеленые иконки", "Отчет водителя"];
  // headers.forEach((header, index) => {
  //   const cellAddress = XLSX.utils.encode_cell({ r: 0, c: index });
  //   worksheet[cellAddress] = { v: header, s: { font: { bold: true } } }; // Стили для заголовка
  // });

  // Применение стилей (в данном случае простая установка цвета фона для примера)
  const range = XLSX.utils.decode_range(worksheet['!ref']!);
  
  worksheet['!cols'] = [
    { wpx: 100 },  
    { wpx: 70 },
    { wpx: 50 },
    { wpx: 200 },
    { wpx: 200 },
    { wpx: 200 },
  ];
  for (let r = range.s.r; r <= range.e.r; ++r) {
    for (let c = range.s.c; c <= range.e.c; ++c) {
      const cellAddress = XLSX.utils.encode_cell({ r, c });
      // console.log('worksheet[cellAddress].wpx', worksheet[cellAddress].wpx)
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
        }
      };
    }
  }



  XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');
  XLSX.writeFile(workbook, `Отчеты по трамваям ${dateWithoutTime}.xlsx`);
};


// Пример использования функции
export default exportToExcel;
