

export default class Jogador {
    construtor() {

        this.cartasNaMao = [];

    }
    maoInicial(cartas) {
        this.nome = "Edmilson"
        this.classDesafiante = "desafiante";
        this.cartasNaMao = cartas;
    }
    perdeCarta() {
        this.cartasNaMao.shift();
    }
    ganhaRodada(oponente) {
        this.cartasNaMao.push(oponente.cartasNaMao[0])
        this.cartasNaMao.push(this.cartasNaMao[0])
        this.perdeCarta()
    }
    tamanhoCartaMao() {

        return this.cartasNaMao.length
    }
    primeiraCarta() {
        return this.cartasNaMao[0];
    }
}

