import ExcelJS from 'exceljs';

const data = [
  { "Tram №": "001", "Red Icons": true, "White Icons": false, "Green Icons": true, "Driver Report": "Driver report 1" },
  { "Tram №": "002", "Red Icons": false, "White Icons": true, "Green Icons": false, "Driver Report": "Driver report 2" },
  { "Tram №": "003", "Red Icons": true, "White Icons": true, "Green Icons": true, "Driver Report": "Driver report 3" }
];

const workbook = new ExcelJS.Workbook();
const sheet = workbook.addWorksheet('Reports');
sheet.properties.defaultRowHeight = 80;

sheet.getRow(1).border = {
    top: { style: "thick", color: { argb: "FFFF0000" } },
    left: { style: "thick", color: { argb: "000000FF" } },
    bottom: { style: "thick", color: { argb: "F08080" } },
    right: { style: "thick", color: { argb: "FF00FF00" } },
  };

sheet.getRow(1).fill = {
    type: "pattern",
    pattern: "darkVertical",
    fgColor: { argb: "FFFF00" },
};

sheet.getRow(1).font = {
    name: "Comic Sans MS",
    family: 4,
    size: 16,
    bold: true,
};

sheet.columns = [
    {
      header: "Id",
      key: "id",
      width: 10,
    },
    { header: "Title", key: "title", width: 32 },
    {
      header: "Brand",
      key: "brand",
      width: 20,
    },
    {
      header: "Category",
      key: "category",
      width: 20,
    },
    {
      header: "Price",
      key: "price",
      width: 15,
    },
    {
      header: "Rating",
      key: "rating",
      width: 10,
    },
    {
      header: "Photo",
      key: "thumbnail",
      width: 30,
    },
];





const exportToExcel = async () => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Report');

  // Добавляем заголовки
  worksheet.addRow(Object.keys(data[0]));

  // Добавляем данные и применяем стили
  data.forEach((item, index) => {
    const row = worksheet.addRow(Object.values(item));
    const color = index % 2 === 0 ? 'FFFF00' : 'FFCC00'; // Чередуем цвета
    // row.eachCell((cell) => {
    //   cell.fill = {
    //     type: 'pattern',
    //     pattern: 'solid',
    //     fgColor: { argb: color }
    //   };
    // });
  });

  // Стили для заголовков
//   worksheet.getRow(1).font = { bold: true, color: { argb: '000000' } };
//   worksheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'CCCCCC' } };

  // Сохраняем файл
  await workbook.xlsx.writeFile('report_with_colors.xlsx');
};

// Пример использования функции
// exportToExcel();

export default exportToExcel;