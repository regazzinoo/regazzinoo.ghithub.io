import java.util.ArrayList;
import java.util.List;

public class Ufficio {
    String nome;
    int piano;
    String siglaLocale;
    int numPostazioni;
    String nomeResponsabile;

   List<Dipendente> dipendenti = new ArrayList(); 

    public Ufficio(String nome, int piano, String siglaLocale,String nomeResponsabile,int numPostazioni) {
            this.nome = nome;
            this.piano = piano;
            this.siglaLocale = siglaLocale;
            this.numPostazioni = numPostazioni;
            this.nomeResponsabile=nomeResponsabile;
            dipendenti=new ArrayList<Dipendente>();
    }


    public String toString(){
            String str=nome+";"+piano+";"+siglaLocale+";"+numPostazioni+";"+nomeResponsabile;
            for(int i=0;i<dipendenti.size();i++){
                    str+="\n"+dipendenti.get(i).tostring();
            }
            return str;
    }
}
