using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Documents;
using System.Windows;
using System.Xml.Serialization;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using System.Runtime.CompilerServices;
using NPOI.SS.Formula.Functions;

namespace FileProva
{
    internal class LottiStandard
    {

        List<List<string>> excelData;

        public LottiStandard()
        {
            this.excelData = new List<List<String>>();
        }


        /*
            List<List<string>> excelData = new List<List<string>>();

            // Verifica se il file esiste
            if (File.Exists(filePath))
            {
                using (FileStream fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read))
                {
                    // Carica il file Excel
                    IWorkbook workbook = new XSSFWorkbook(fileStream);

                    // Prende il primo foglio di lavoro
                    ISheet sheet = workbook.GetSheetAt(0);

                    // Itera sulle righe
                    for (int rowIndex = 0; rowIndex <= sheet.LastRowNum; rowIndex++)
                    {
                        IRow row = sheet.GetRow(rowIndex);

                        if (row != null)
                        {
                            List<string> rowData = new List<string>();

                            // Itera sulle celle
                            for (int cellIndex = 0; cellIndex < row.LastCellNum; cellIndex++)
                            {
                                ICell cell = row.GetCell(cellIndex);

                                // Aggiunge il contenuto della cella alla lista
                                rowData.Add(cell?.ToString() ?? "");
                            }

                            // Aggiunge la riga alla lista dei dati
                            excelData.Add(rowData);
                        }
                    }
                }
            }

           this.lista=excelData;  
        */
        public void LoadExcelFile(string filePath, int foglio)
        {


            using (FileStream fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read))
            {
                IWorkbook workbook = new XSSFWorkbook(fileStream); // Carica il file Excel

                ISheet sheet = workbook.GetSheetAt(foglio-1); // Prende il primo foglio di lavoro 

                for (int rowIndex = 0; rowIndex <= sheet.LastRowNum; rowIndex++) // Itera sulle righe
                {
                    IRow row = sheet.GetRow(rowIndex);

                    if (row != null)
                    {
                        List<string> rowData = new List<string>();

                        for (int cellIndex = 0; cellIndex < row.LastCellNum; cellIndex++) // Itera sulle celle
                        {
                            ICell cell = row.GetCell(cellIndex);
                            string cellData = "";

                            if (cell != null)
                            {
                                switch (cell.CellType)
                                {
                                    case CellType.Numeric:
                                        cellData = cell.NumericCellValue.ToString();
                                        break;
                                    case CellType.String:
                                        cellData = cell.StringCellValue;
                                        break;
                                    case CellType.Boolean:
                                        cellData = cell.BooleanCellValue.ToString();
                                        break;
                                    case CellType.Formula:
                                        cellData = cell.CellFormula;
                                        break;
                                    default:
                                        cellData = "";
                                        break;
                                }
                            }

                            rowData.Add(cellData);
                        }

                        excelData.Add(rowData);
                    }

                }

            }

        }




        public string ToString()
        {
            string result = "";

            foreach (List<string> row in excelData)
            {
                foreach (string cell in row)
                {
                    result += cell + "\t";
                }
                result += "\n";
            }

            return result;
        }

        public List<List<string>> GetExcelData()
        {
            return excelData;
        }
        public List<string> GetRow(int rowIndex)
        {
            if (rowIndex >= 0 && rowIndex < excelData.Count)
            {
                return excelData[rowIndex];
            }
            else
            {
                // La riga specificata non esiste
                return null;
            }
        }
    }
}
