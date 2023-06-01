using Microsoft.Win32;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net.NetworkInformation;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Data.OleDb;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using NPOI.SS.Formula.Functions;

namespace FileProva
{

    /// <summary>
    /// Logica di interazione per MainWindow.xaml
    /// </summary>
    /// 
    
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            btnVisualizza.Visibility = Visibility.Hidden;
            
        }

        LottiStandard lotti = new LottiStandard();
        OpenFileDialog fdlg = new OpenFileDialog();

        private void BtnSceltaFile_Click(object sender, RoutedEventArgs e)
        {
            fdlg.Title = "Select file";
            fdlg.Filter = "Excel Sheet(*.xls)|*.xlsx|All Files(*.*)|*.*";
            fdlg.FilterIndex = 1;
            fdlg.RestoreDirectory = true;
            if (fdlg.ShowDialog() == true)
            {
                lblNomeFile.Content = fdlg.FileName;
            }
        }

        private void BtnCaricaFile_Click(object sender, RoutedEventArgs e)
        {
            string filePath = fdlg.FileName;
            lotti.LoadExcelFile(filePath, Convert.ToInt32(txtFoglio.Text));

            
        
        btnVisualizza.Visibility = Visibility.Visible;
        }

        

        private void btnVisualizza_Click(object sender, RoutedEventArgs e)
        { 
            lstDati.Items.Clear();

            /* foreach (List<string> row in lotti.GetExcelData())
             {
                 int i = 0;
                 foreach (string cell in row)
                 {
                     int j = 0;
                     lstDati.Items.Add(lotti.GetRow(j));
                         j++;
                 }
                 i++;
             }*/
            string data = lotti.ToString();
            string[] vettore= data.Split('\n');
            string[] parametri = vettore[0].Split('\t');

            for(int i=0; i<parametri.Length-1; i++)
            {
                DataGridTextColumn var = new DataGridTextColumn();
                var.Header = parametri[i];
                dtgData.Columns.Add(var);
            }
            DataGridTextColumn dummy = new DataGridTextColumn();
            dummy.Header = "";
            dtgData.Columns.Add(dummy);

            for (int i=1; i<vettore.Length-1; i++)
            {
                string[] parametriData = vettore[i].Split('\t');
                
                //for (int j=0; j<4; j++) 
                //{
                
                    dtgData.Items.Add(parametriData.ToList());
                //}
                
                lstDati.Items.Add(vettore[i]);
            }
            
        }
    }
}
