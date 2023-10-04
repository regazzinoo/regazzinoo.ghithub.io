import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class Azienda {
    List<Ufficio> startup = new ArrayList();

    public Azienda() {
        this.startup = new ArrayList<Ufficio>();
    }

    public void salvaSuFile(String path) throws IOException {
        File file = new File(path);
        FileWriter fw = new FileWriter(file);
        String str = "dataNascita;dataAssunzione;numOreSett;pianoUfficio;numPostazioni;nome;cognome;indirizzo;nomeUfficio;siglaLocale;nomeResponsabile;\n";
        for (int i = 0; i < startup.size(); i++) {
            Ufficio tmpUff=startup.get(i);
            Dipendente tmp;
                    for (int j = 0; j < tmpUff.dipendenti.size();j++) {
                        tmp=tmpUff.dipendenti.get(j);
                        str+=tmp.dataNascita+";"+tmp.dataAssunzione+";"+
                        tmp.numOreSett+";"+tmpUff.piano+";"+tmpUff.numPostazioni+";"+tmp.nome+";"+tmp.cognome+";"+
                        tmp.indirizzo+";"+tmpUff.nome+";"+tmpUff.siglaLocale+";"+tmpUff.nomeResponsabile+";\n";
                    }
        }

        fw.write(str);
        fw.flush(); 
        fw.close();
    }

    public void caricaFile(String path) throws IOException {
        FileReader fr = new FileReader(path);
        BufferedReader reader = new BufferedReader(fr);
        String line;
        line = reader.readLine();
        while ((line = reader.readLine()) != null) {
            String v[] = line.split(";");
            Dipendente d = new Dipendente(v[5], v[6], v[7], v[0], v[1], Integer.parseInt(v[2]));
            if (startup.isEmpty()) {
                Ufficio uff = new Ufficio(v[8], Integer.parseInt(v[3]), v[9], v[10], Integer.parseInt(v[4]));
                uff.dipendenti.add(d);
                startup.add(uff);
            } else {
                int cont = 0;
                for (int i = 0; i < startup.size(); i++) {
                    if (startup.get(i).nome.equals(v[8])) {
                        startup.get(i).dipendenti.add(d);
                        cont++;
                        break;
                    }
                }
                if (cont == 0) {
                    Ufficio uff = new Ufficio(v[8], Integer.parseInt(v[3]), v[9], v[10], Integer.parseInt(v[4]));
                    uff.dipendenti.add(d);
                    startup.add(uff);
                }

            }

        }
    }

    

    public void visualizza() {

        for (int i = 0; i < startup.size(); i++) {
            System.out.println(startup.get(i).toString() + "\n");
        }

    }
}
