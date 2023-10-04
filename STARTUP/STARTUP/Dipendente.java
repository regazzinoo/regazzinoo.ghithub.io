public class Dipendente{
    String nome;
    String cognome;
    String indirizzo;
    String dataNascita;
    String dataAssunzione;
    int numOreSett;
    public Dipendente(String nome, String cognome, String indirizzo, String dataNascita, String dataAssunzione,
            int numOreSett) {
        this.nome = nome;
        this.cognome = cognome;
        this.indirizzo = indirizzo;
        this.dataNascita = dataNascita;
        this.dataAssunzione = dataAssunzione;
        this.numOreSett = numOreSett;
    }


    public String tostring(){
        return nome+";"+cognome+";"+indirizzo+";"+dataNascita+";"+dataAssunzione+";"+numOreSett;
    }
}

