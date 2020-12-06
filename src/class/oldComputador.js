
class Computador {
    construtor() {

        this.cartasNaMao = [];
        this.initComputer()
    }

    maoInicial(cartas) {
        this.cartasNaMao = cartas;
    }
    initComputer() {
        this.escolha = document.getElementById('escolha');
        console.log(this)
    }
    perdeCarta() {
        this.cartasNaMao.shift();
    }
    ganhaRodada(oponente) {
        //ganha a carta do oponente
        this.cartasNaMao.push(oponente.cartasNaMao[0])
        //passa a primeira carta para tras
        this.cartasNaMao.push(this.cartasNaMao[0])
        //retira a carta da frente de cada player
        this.perdeCarta()
    }
    tamanhoCartaMao() {

        return this.cartasNaMao.length
    }
    primeiraCarta() {
        return this.cartasNaMao[0];
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
    escreverDesisao() { }
    mostrarNomeDecisao(number) {

        switch (true) {
            case number == 0:
                this.escolha.innerHTML += `<h1>Escolhi Velocidade Máxima</h1>`
                atributo = "velMax"
                break
            case number == 1:
                this.escolha.innerHTML += `<h1>Escolhi Peso</h1>`
                atributo = "peso"
                break
            case number == 2:
                //  qual.innerHTML = `<h1>Aceleração</h1>`
                return "aceleracao"
            case number == 3:
                //  qual.innerHTML = `<h1>HP</h1>`
                return "hp"
            case number == 4:
                //  qual.innerHTML = `<h1>Cilindros</h1>`
                return "cilindro"
            default:
                console.log("error");
        }
    }
}