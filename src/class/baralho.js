
import Carta from "./carta"



export default class Baralho {
    constructor() {
        this.cartas = [];

    }
    addCarta(carta) {
        this.cartas.push(carta);
    }
    embaralhar() {
        this.cartas = this.cartas.sort(function () {
            return 0.5 - Math.random();
        })
    }

    maiorValor() {
        this.maiorVelocidade = 0;
        this.menorPeso = this.cartas[0].peso;
        this.menorAceleracao = this.cartas[0].aceleracao;
        this.maiorHP = 0;
        this.maiorCilindros = 0;

        for (const carta of this.cartas) {

            if (this.maiorVelocidade < carta.velMax) {
                this.maiorVelocidade = carta.velMax;
            }
            if (this.menorPeso > carta.peso) {
                this.menorPeso = carta.peso
            }
            if (this.menorAceleracao > carta.aceleracao) {
                this.menorAceleracao = carta.aceleracao
            }
            if (this.maiorHP < carta.hp) {
                this.maiorHP = carta.hp
            }
            if (this.maiorCilindros < carta.cilindro) {
                this.maiorCilindros = carta.cilindro
            }

        }

    }

}