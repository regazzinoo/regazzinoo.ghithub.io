
class toDo{
    constructor(content, date, selezionato){
        this.content=content;
        this.date=date;
        this.selezionato=selezionato;
    }
    modificaContent(content){
        this.content=content;
        return content;
    }
    ModificaSelezione(selezionato){
        this.selezionato=true;
    }
    getSelezionato(){
        return this.selezionato;
    }
}

class lista{
    constructor(){
    this.toDos=[];
    }

    aggiungi(toDo){
        this.toDos.push[toDo];
    }
    modificaSelezionato(){
        for(var i=0; i<this.toDos.length; i++){
            if(this.toDos[i].getSelezionato==true){
                this.toDos[i].modificaContent(content);
            }
        }
    }
    rimuoviTutteAttività(){
        for(var i=0; i<this.toDos.length; i++){
            this.toDos.splice[i,1];
        }
    }
    rimuoviSelezionato(){
        for(var i=0; i<this.toDos.length; i++){
            if(this.toDos[i].getSelezionato==true){
                this.toDos.splice[i,1];
            }
        }
    }
}