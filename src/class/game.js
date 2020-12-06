

export default class Game {
    constructor(desafiante, oponente, tela, app) {
        this.desafiante = desafiante;
        this.oponente = oponente;
        this.tela = tela;
        this.app = app;
    }
    compararAtributo(atributo) {

        this.tela.mostrarCartaComputador()


        setTimeout(() => {
            switch (true) {
                case atributo == "velMax":
                    this.desafiante.primeiraCarta().velMax > this.oponente.primeiraCarta(0).velMax ? this.desafianteWin(0) : this.oponenteWin(0)
                    break;

                case atributo == "peso":
                    this.desafiante.primeiraCarta().peso < this.oponente.primeiraCarta(1).peso ? this.desafianteWin(1) : this.oponenteWin(1)
                    break;

                case atributo == "aceleracao":
                    this.desafiante.primeiraCarta().aceleracao < this.oponente.primeiraCarta(2).aceleracao ? this.desafianteWin(2) : this.oponenteWin(2)
                    break;

                case atributo == "hp":
                    this.desafiante.primeiraCarta().hp > this.oponente.primeiraCarta(3).hp ? this.desafianteWin(3) : this.oponenteWin(3)
                    break;

                case atributo == "cilindro":
                    this.desafiante.primeiraCarta().cilindro > this.oponente.primeiraCarta(4).cilindro ? this.desafianteWin(4) : this.oponenteWin(4)
                    break;
                default:
                    console.log("error");

            }
        }, 1000)

    }
    desafianteWin(n) {
        if (!this.desafiante.nome) {
            this.tela.itens[n + 5].style.backgroundColor = 'grey';
        }

        setTimeout(() => {
            if (this.desafiante.nome) {
                this.tela.itens[n].style.backgroundColor = 'green';
                this.tela.itens[n + 5].style.backgroundColor = 'red';
                this.desafiante.classDesafiante = "desafiante"
                this.oponente.classDesafiante = 0
            } else {
                this.desafiante.classDesafiante = "desafiante2"
                this.oponente.classDesafiante = 0
                this.tela.itens[n].style.backgroundColor = 'red';
                this.tela.itens[n + 5].style.backgroundColor = 'green';
            }
            setTimeout(() => {
                this.desafiante.ganhaRodada(this.oponente)
                //retira a carta da frente do oponente
                this.oponente.perdeCarta()
                if (this.oponente.tamanhoCartaMao() == 0) {
                    if (this.desafiante.nome) {
                        alert("Fim de jogo, você venceu")
                        this.app.init();
                    } else {
                        alert("Fim de jogo, você perdeu")
                        this.app.init();

                    }

                    return

                }
                this.tela.telaGame()
                if (this.desafiante.nome) {

                    this.tela.initEvent(this)
                } else {
                    setTimeout(() => {

                        this.compararAtributo(this.desafiante.decisao())
                    }, 1000)
                }
            }, 1000)
        }, 1000)
    }

    oponenteWin(n) {
        // if (this.desafiante.nome) {
        //     this.tela.itens[n + 5].style.backgroundColor = 'grey';
        //     this.desafiante.classDesafiante = "desafiante2"
        //     console.log(this.oponente)
        // } else {

        // }



        let troca = this.desafiante;
        this.desafiante = this.oponente;
        this.oponente = troca;

        this.desafianteWin(n)

    }


}

