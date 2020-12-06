export default class Cartas {
    constructor(data) {
        const { nome, velMax, peso, aceleracao, hp, cilindro } = data;
        this.nome = nome;
        this.velMax = velMax;
        this.peso = peso;
        this.aceleracao = aceleracao;
        this.hp = hp;
        this.cilindro = cilindro;
    }
}