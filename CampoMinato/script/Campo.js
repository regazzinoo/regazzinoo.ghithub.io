class Campo { 
    constructor(numRighe, numColonne, numMine) {
        this.colonne = numColonne;
        this.righe = numRighe;
        this.numeroMine = numMine;
        this.matriceCelle = [];
        this.mineTrovate = 0;
        this.isGiocoInCorso = true;
        this.bandierine = 0;
        this.aperte = 0;
        this.totCelle = this.righe * this.colonne;
    }
    generaRandom(max) {
        return Math.floor(Math.random() * max);
    }

    ricomincia() {
        location.reload();
    }

    eliminaTuttoHtml(){
        $("#celle").html("");
    }


    //genera posizione casuale mine
    generaEPosizionaMine() {
        let c, r;
        for (let i = 0; i < this.numeroMine; i++) {
            c = this.generaRandom(this.colonne);
            r = this.generaRandom(this.righe);
            //se la cella con coordinate r (riga) e c (colonne) è gia una cella si deve rifare
            while (this.matriceCelle[r][c].cellaIsMina == true) {
                c = this.generaRandom(this.colonne);
                r = this.generaRandom(this.righe);
            }
            this.matriceCelle[r][c].cellaIsMina = true;
        }
    }

    

    creaCampo() {
        let str = "";
        $("#mine").text("mine presenti: " + this.numeroMine);

        for(let i = 0; i < this.colonne; i++){
            str += "auto ";
        }
        $(".container-playground").css("grid-template-columns", str);

        for (let i = 0; i < this.righe; i++) {
            this.matriceCelle[i] = [];
            this.addRigaCelle(i);
        }
        this.generaEPosizionaMine();
    }


    addRigaCelle(numR) {
        for (let c = 0; c < this.colonne; c++) {
            this.matriceCelle[numR][c] = new myCella();
            $("#celle").append("<div class='celleChiuse' data-row=" + numR + " data-coloumn=" + c + "></div>");
        }
    }

    visualizzaMine() {
        for (let r = 0; r < this.righe; r++){
            for (let c = 0; c < this.colonne; c++){
                if (this.matriceCelle[r][c].cellaIsMina) {
                    this.matriceCelle[r][c].stato = "aperta";
                    $('.celleChiuse[data-row=' + r + '][data-coloumn=' + c + ']').addClass("cellaMina");
                }
            }
        }
    }

    mettiBandierina(rCella, cCella) {
        if (this.isGiocoInCorso) {
            //se hai preso una cella chiusa 
            if (this.matriceCelle[rCella][cCella].stato == "chiusa"){
                $('.celleChiuse[data-row=' + rCella + '][data-coloumn=' + cCella + ']').addClass("celleBandierina");
                this.bandierine++;
                this.matriceCelle[rCella][cCella].stato = "flag";
                if(this.numeroMine - this.bandierine < 0){
                    alert("numero bandierine superiore delle bombe!!");
                    return 0;
                }
                $("#mine").text("mine presenti: " + (this.numeroMine - this.bandierine));
            }

            //se cella con bandierina torna ad essere cella chiusa
            else if (this.matriceCelle[rCella][cCella].stato == "flag"){
                $('.celleChiuse[data-row=' + rCella + '][data-coloumn=' + cCella + ']').removeClass("celleBandierina");
                $('.celleChiuse[data-row=' + rCella + '][data-coloumn=' + cCella + ']').addClass("cellaChiusa");
                this.matriceCelle[rCella][cCella].stato = "chiusa";
                //se hai preso un mina
                if (this.matriceCelle[rCella][cCella].cellaIsMina == true){
                    this.mineTrovate--;
                }
                this.bandierine--;
                this.aggiornaNumeroMineNelCampo();
            }
            if(this.mineTrovate == this.numeroMine){
                this.visualizzaMine();
                $("#feedback").text("hai vinto!!");
                this.isGiocoInCorso = false;
            }   
        }
        else
            alert("gioco finito");
    }

    controlloClick(rigaCella, colonnaCella) {
        if (this.isGiocoInCorso) {

            //cella aperta
            if (this.matriceCelle[rigaCella][colonnaCella].stato == "aperta")
                return 0;

            //mina
            if (this.matriceCelle[rigaCella][colonnaCella].cellaIsMina == true) {
                $('.celleChiuse[data-row=' + rigaCella + '][data-coloumn=' + colonnaCella + ']').addClass("cellaMina");
                $("#feedback").text("hai perso");
                this.isGiocoInCorso = false;
                this.visualizzaMine();
                return 0;
            }

            //cella normale
            $('.celleChiuse[data-row=' + rigaCella + '][data-coloumn=' + colonnaCella + ']').removeClass("celleBandierina");
            $('.celleChiuse[data-row=' + rigaCella + '][data-coloumn=' + colonnaCella + ']').addClass("cellaBianca");
            if(this.matriceCelle[rigaCella][colonnaCella].numMineVicine != 0)
                $('.celleChiuse[data-row=' + rigaCella + '][data-coloumn=' + colonnaCella + ']').html(this.matriceCelle[rigaCella][colonnaCella].numMineVicine);

            this.matriceCelle[rigaCella][colonnaCella].stato = "aperta";

            this.aperte++;

            //vuota
            if (this.matriceCelle[rigaCella][colonnaCella].numMineVicine == 0) {
                $('.celleChiuse[data-row=' + rigaCella + '][data-coloumn=' + colonnaCella + ']').removeClass("celleBandierina");
                $('.celleChiuse[data-row=' + rigaCella + '][data-coloumn=' + colonnaCella + ']').addClass("cellaBianca");
                for(var contR = rigaCella-1; contR <=rigaCella + 1; contR++){
                    for (let contC = colonnaCella-1; contC <= colonnaCella+1; contC++) {
                        if (contR >= 0 && contR < this.righe && contC >= 0 && contC < this.colonne)
                            this.controlloClick(contR, contC);
                    }
                }
            }

            if(this.aperte == this.totCelle - this.numeroMine){
                $("#feedback").text("hai vinto!!");
                this.visualizzaMine();
                this.isGiocoInCorso = false;
            }
        }
        else
            alert("gioco finito");
    }
}