import "./styles.css";
import {dataExport } from './dataExport'
import * as XLSX from 'xlsx/xlsx.mjs';
export default function App() {
  function exportData() {
      //tạo một workbook mới
      var workbook = XLSX.utils.book_new()
      //tạo một worksheet mới (default là xlsx), dữ liệu là một array gồm các object, nhưng với array các array thì dùng function khác
      var worksheet = XLSX.utils.json_to_sheet(dataExport, { bookType: 'xlsx' })

      //gán worksheet vào trong workbook
      XLSX.utils.book_append_sheet(workbook, worksheet, "test");
     /* create an XLSX file and try to save to Presidents.xlsx */
  /**XLSX.writeFile creates a spreadsheet file and 
   * tries to write it to the system. In the browser,
   *  it will try to prompt the user to download the file. In NodeJS, it will write to the local directory.
   * 
   */
     XLSX.writeFile(workbook, "Presidents.xlsx");

     //nếu không muốn thông báo hỏi có lưu file không thì ta sử dụng fileSave
   /**
    *  const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
   
    //lưu file ở client với fileSaver
    const data = new Blob([excelBuffer], { type: this.fileType })
    FileSaver.saveAs(data, this.props.fileName + this.fileExtension)
    * 
    */
    }
  return (
 
    <div className="App">
     <button onClick = {exportData}>Export </button>
    </div>
  );
}
