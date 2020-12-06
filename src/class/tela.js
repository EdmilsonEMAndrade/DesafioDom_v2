export default class Tela {
  constructor(jogador, computador) {
    this.itens = document.getElementsByClassName('listItem');
    this.divGame = document.getElementById('game');
    this.jogador = jogador;

    this.computador = computador;
    this.atributo;
    this.cartaJogador = document.getElementById("cartaJogador")
    this.cartaComputador = document.getElementById("cartaComputador")
  }
  telaGame() {
    this.divGame.innerHTML = ` <div class="container-fluid d-flex flex-column h-100 bg-light ">
    

    <div class="row flex-grow-1 justify-content-center align-items-center">
        <div>
            <div class="card front bg-secondary ${this.jogador.classDesafiante}" id="cartaJogador" >
            <ul class="list-group list-group-flush">
                           <li class="list-group-item text-center"><span>${this.jogador.primeiraCarta().nome}</span></li>
            </ul>
            
                <img src="/image/${this.jogador.primeiraCarta().nome}.jpg" alt="${this.jogador.primeiraCarta().nome}"class="card-img-top">
                <div class="card-body ">
                    <ul class="list-group list-group-flush">
                           <li class="list-group-item d-flex justify-content-between listItem" name="velMax">Velocidade Máx.: <span>${this.jogador.primeiraCarta().velMax}km/h</span></li>
                        <li class="list-group-item d-flex justify-content-between listItem" name="peso">Peso: <span>${this.jogador.primeiraCarta().peso}Kg</span></li>
                        <li class="list-group-item d-flex justify-content-between listItem" name="aceleracao">0/100Km/h:<span>${this.jogador.primeiraCarta().aceleracao}s</span></li>
                        <li class="list-group-item d-flex justify-content-between listItem" name="hp">HP:<span>${this.jogador.primeiraCarta().hp}</span></li>
                        <li class="list-group-item d-flex justify-content-between listItem" name="cilindro">Cilindros:<span>${this.jogador.primeiraCarta().cilindro}</span></li>
                    </ul>
                </div>

                </div>
                <div class="card-footer d-flex justify-content-center align-items-center">
                   
                        <label class="mb-0">Total de Cartas: <strong>${this.jogador.tamanhoCartaMao()}</strong></label>
                    
                </div>
        </div>

        <div class="col col-md-auto text-center">
            <h1><strong>vs</strong></h1>
        </div>

        <div class"tamanhoCard col col-md-auto desafiante" id="verso" >
        
                    <div>
                          <img  src="/image/versocarta.jpg"  alt="verso da carta" class="tamanhoCarta ${this.computador.classDesafiante}" id="cartaComputador">
                    </div>
                    
                    <div class="card-footer d-flex justify-content-center align-items-center flex-column">
                              
                                    <label class="mb-0">Total de Cartas: <strong>${this.computador.tamanhoCartaMao()}</strong></label>
                                
                    </div>
        </div>
        
        </div>
    </div>
`
      ;

  }

  initEvent(game) {

    for (const item of this.itens) {
      item.addEventListener('click', function () {

        game.compararAtributo(event.path[0].attributes[1].nodeValue)

      });


    }

  }


  mudarDesafiante() {
    this.cartaComputador = document.getElementById("cartaComputador")
    this.cartaComputador.classList.add("desafiante2")
  }

  mostrarCartaComputador() {
    const divVerso = document.getElementById('verso');

    divVerso.innerHTML = `
    <div class="container-fluid d-flex flex-column h-100 bg-light" >
    <div class="row flex-grow-1 justify-content-center align-items-center">
        <div>
            <div class="card front bg-secondary ${this.computador.classDesafiante}" id="cartaComputador">
            <ul class="list-group list-group-flush">
                           <li class="list-group-item text-center"><span>${this.computador.primeiraCarta().nome
      }</span></li>
      </ul>
            
                <img src="/image/${this.computador.primeiraCarta().nome}.jpg" alt="${this.computador.primeiraCarta().nome
      }"class="card-img-top">
                <div class="card-body ">
                    <ul class="list-group list-group-flush">
                           <li class="list-group-item d-flex justify-content-between listItem">Velocidade Máx.: <span>${this.computador.primeiraCarta().velMax
      }km/h</span></li>
                        <li class="list-group-item d-flex justify-content-between listItem">Peso: <span>${this.computador.primeiraCarta().peso}Kg</span></li>
                        <li class="list-group-item d-flex justify-content-between listItem">0/100Km/h:<span>${this.computador.primeiraCarta().aceleracao
      }s</span></li>
                        <li class="list-group-item d-flex justify-content-between listItem">HP:<span>${this.computador.primeiraCarta().hp}</span></li>
                        <li class="list-group-item d-flex justify-content-between listItem">Cilindros:<span>${this.computador.primeiraCarta().cilindro
      }</span></li>
                    </ul>
                </div>

                </div>
                <div class="card-footer d-flex justify-content-center align-items-center">
                   
                        <label class="mb-0">Total de Cartas: <strong>${this.computador.tamanhoCartaMao()}</strong></label>
                    
                </div>
        </div>
        <div id="escolha"></div>
        `;
  }
}
