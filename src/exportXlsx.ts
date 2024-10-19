import * as XLSX from 'xlsx';

// Данные для экспорта (пример)
const data = [
  {
    "Tram №": "001",
    "Red Icons": true,
    "White Icons": false,
    "Green Icons": true,
    "Driver Report": "Driver report 1",
  },
  {
    "Tram №": "002",
    "Red Icons": false,
    "White Icons": true,
    "Green Icons": false,
    "Driver Report": "Driver report 2",
  },
  {
    "Tram №": "003",
    "Red Icons": true,
    "White Icons": true,
    "Green Icons": true,
    "Driver Report": "Driver report 3",
  }
];

// Функция экспорта в Excel с цветными строками
const exportToExcel = () => {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Применение стилей (в данном случае простая установка цвета фона для примера)
  const range = XLSX.utils.decode_range(worksheet['!ref']!);
  for (let r = range.s.r; r <= range.e.r; ++r) {
    for (let c = range.s.c; c <= range.e.c; ++c) {
      const cellAddress = XLSX.utils.encode_cell({ r, c });
      if (!worksheet[cellAddress]) continue;
      worksheet[cellAddress].s = {
        fill: {
          fgColor: { rgb: r % 2 === 0 ? 'FFFF00' : 'FFCC00' }
        }
      };
    }
  }

  XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');
  XLSX.writeFile(workbook, 'report_with_colors.xlsx');
};


// Пример использования функции
export default exportToExcel;
