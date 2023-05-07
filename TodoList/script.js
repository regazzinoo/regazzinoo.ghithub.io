class toDo{
    constructor(content, date, selezionato){
        this.content=content;
        this.date=date;
        this.selezionato=selezionato;
    }
    //modifica il contenuto di un evento in programma
    modificaContent(content){
        this.content=content;
        return content;
    }
    //seleziona l'elemento
    ModificaSelezione(selezionato){
        this.selezionato=true;
    }
    //ritorna il valore della veriabile selezionato
    getSelezionato(){
        return this.selezionato;
    }
}

class lista{
    constructor(){
    this.toDos=[];
    }
    //aggiunge un elemento alla lista
    aggiungi(toDo){
        this.toDos.push[toDo];
    }
    //modifica il contenuto dell'elemento selezionato
    modificaSelezionato(){
        for(var i=0; i<this.toDos.length; i++){
            if(this.toDos[i].getSelezionato()==true){
                this.toDos[i].modificaContent(content);
            }
        }
    }
    //pulisce la lista
    rimuoviTutteAttività(){
        for(var i=0; i<this.toDos.length; i++){
            this.toDos.splice[i,1];
        }
    }
    //rimuove un evento dalla lista
    rimuoviSelezionato(){
        for(var i=0; i<this.toDos.length; i++){
            if(this.toDos[i].getSelezionato==true){
                this.toDos.splice[i,1];
            }
        }
    }
    /*
    rimuovi(posizione) {
        this.toDos.splice(posizione, 1);
    }*/
    
    //ritorna la lista in scadenza con meno di tre giorni
    inScadenza(posizione) {
        const oggi = new Date();

        let differenzaMillisecondi = Math.abs(this.toDo[posizione].data - oggi);
        let differenzaGiorni = Math.ceil(differenzaMillisecondi / (1000 * 60 * 60 * 24));

        if (differenzaGiorni <= 3) 
            return true;
        else 
            return false;
    }
}