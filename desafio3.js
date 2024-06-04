class heroi{
    constructor(heroinome,heroiidade,tipoheroi ){
        this.heroinome = heroinome
        this.heroiidade = heroiidade
        this.tipoheroi = tipoheroi

    }
    personagem(){
        console.log(`O Heroi de nome ${this.heroinome} tem ${this.heroiidade} anos de idade e é ${this.tipoheroi}`) 
    }
    apresentaçaoheroi() {
            if (this.tipoheroi === "guerreiro"){
                console.log(`${this.heroinome} ataca com Espada`);
            } else if (this.tipoheroi === "mago" ){
                console.log(`${this.heroinome} ataca usando Magia`);
            } else if (this.tipoheroi === "monge"){
                console.log(`${this.heroinome} ataca usando artes Marciais`);
            } else if (this.tipoheroi === "ninja"){
                console.log(`${this.heroinome} ataca usando Shuriken`)
            }
            }
 }






let heroiclass  = new heroi( "Nicolas", 21 , "monge")


heroiclass.personagem()
heroiclass.apresentaçaoheroi()