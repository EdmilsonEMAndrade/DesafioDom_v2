

export default class Computador {
    constructor(baralho) {
        this.cartasNaMao = [];
        this.baralho = baralho
        this.classDesafiante = 0;
    }
    maoInicial(cartas) {
        this.cartasNaMao = cartas;
    }
    perdeCarta() {
        this.cartasNaMao.shift();
    }
    tamanhoCartaMao() {

        return this.cartasNaMao.length
    }
    primeiraCarta() {
        return this.cartasNaMao[0];
    }
    ganhaRodada(oponente) {
        //ganha a carta do oponente
        this.cartasNaMao.push(oponente.cartasNaMao[0])
        //passa a primeira carta para tras
        this.cartasNaMao.push(this.cartasNaMao[0])
        //retira a carta da frente de cada player
        this.perdeCarta()
    }
    decisao() {
        let comparacao = [];

        comparacao.push(this.primeiraCarta().velMax / this.baralho.maiorVelocidade)
        comparacao.push(this.baralho.menorPeso / this.primeiraCarta().peso)
        comparacao.push(this.baralho.menorAceleracao / this.primeiraCarta().aceleracao)
        comparacao.push(this.primeiraCarta().hp / this.baralho.maiorHP)
        comparacao.push(this.primeiraCarta().cilindro / this.baralho.maiorCilindros)
        let max = comparacao.reduce(function (a, b) {
            return Math.max(a, b);
        });

        return this.mostrarNomeDecisao(comparacao.indexOf(max))
    }
    mostrarNomeDecisao(number) {
        this.escolha = document.getElementById("escolha");
        switch (true) {
            case number == 0:
                // this.escolha.innerHTML = `<h1>Velocidade Máxima</h1>`
                return "velMax"

            case number == 1:
                // this.escolha.innerHTML = `<h1>Peso</h1>`
                return "peso"
            case number == 2:
                // this.escolha.innerHTML = `<h1>Aceleração</h1>`
                return "aceleracao"
            case number == 3:
                // this.escolha.innerHTML = `<h1>HP</h1>`
                return "hp"
            case number == 4:
                // this.escolha.innerHTML = `<h1>Cilindros</h1>`
                return "cilindro"
            default:
                console.log("error");
        }
    }
}