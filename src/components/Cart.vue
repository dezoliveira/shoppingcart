<template>
  <div class="col-lg-8 col-md-8 col-sm-8 p-4 my-4 offset-2 borderContainer">

    <!-- INTERNET --> 
    <div>
      <h2>Internet</h2>
      <h4>Selecione um plano de internet para continuar</h4>
    </div>

    <!-- CARD INTERNET -->
    <div class="d-flex gap-4 py-4">

      <div
        class="card"
        :class="[{'card-selected' : produto.id == checked}]"
        v-for="produto in internet"
        :key="produto.id"
        :id="produto.id"
      >

        <input 
          type="radio" 
          name="radioInternet" 
          class="form-check-input m-2" 
          @click="enableTvFixo(produto)"
        >
        <div class="card-title">
          <h2>{{produto.tipo}}</h2>
        </div>
        <div class="card-body">
          <h5>
            {{produto.valor
            .toFixed(2)
            .replace('.', ',')
            }}
          </h5>
        </div>
        <div class="card-footer d-flex justify-content-end">
          <span>+ DETALHES</span>
        </div>

      </div>

    </div>

    <!-- TV -->
    <div>
      <h2>TV</h2>
      <h4>Agora escolha um pacote de TV</h4>
    </div>

    <!-- CARD TV -->
    <div class="d-flex gap-4 py-4">

      <div
        class="card"
        :class="[{'disabled' : this.cliqueTv == false}]"
        v-for="produto in tv"
        :key="produto.id"
      >

        <input type="radio" name="radioTv" class="form-check-input m-2" :disabled="!this.cliqueDisabled" @click="addProduct(produto)">
        <div class="card-title">
          <h2>{{produto.tipo}}</h2>
        </div>
        <div class="card-body">
          <h5>
              {{produto.valor
                .toFixed(2)
                .replace('.', ',')
              }}
          </h5>
        </div>
        <div class="card-footer d-flex justify-content-end">
          <span>+ DETALHES</span>
        </div>

      </div>

    </div>

    <!-- TELEFONE -->
    <div>
      <h2>Fixo</h2>
      <h4>Agora escolha um pacote de telefone fixo</h4>
    </div>

    <!-- CARD TELEFONE -->
    <div class="d-flex gap-4 py-4">
      <div
          class="card"
          :class="[{'card-selected' : this.cliqueTelefone == true}]"
          v-for="produto in fixo"
          :key="produto.id"
      >
        <div>
          <input id="" type="radio" name="radioFone" class="form-check-input m-2" :disabled="!this.cliqueDisabled" @click="addProduct(produto)">
        <div class="card-title">
          <h2>{{produto.tipo}}</h2>
        </div>
        <div class="card-body">
          <h5>
            {{
              produto.valor
              .toFixed(2)
              .replace('.', ',')
            }}
          </h5>
        </div>
        <div class="card-footer d-flex justify-content-end">
          <span>+ DETALHES</span>
        </div>
        </div>
      </div>
    </div>

    <hr class="my-4">

    <div class="d-flex justify-content-between">
      <h4>Taxa de instalação</h4>
      <h4>Grátis</h4>
    </div>

    <div 
      class="d-flex justify-content-between"
      v-for="produtosCart in produtosCart"
      :key="produtosCart.id"
    >
      <div>
        <h5>{{produtosCart.tipo}}</h5>
        <font-awesome-icon icon="user-secret" />
      </div>
      <div>
        <h5>
          {{
            produtosCart.valor
            .toFixed(2)
            .replace('.', ',')
          }}
          <fa icon="circle-xmark" class="icon" @click="removeProduct(produtosCart)"/>
        </h5>
      </div>
    </div>

    <div class="d-flex justify-content-between">
      <h2>Total</h2>
      <h2>
        {{
          this.total
          .toFixed(2)
          .replace('.', ',')
        }}
      </h2>
    </div>

    <hr>

    <div>
      <input type="checkbox" class="form-check-input m-2" checked>
      <span style="vertical-align: middle">
        Aceito receber emails de promoções de planos da Vivo
      </span>
    </div>
    
    <div class="d-flex align-items-center">
      <!-- BOTÃO CONTINUAR --> 
      <input 
        type="button" 
        class="btn btn-primary my-2" 
        value="Continuar"
        @click="showAlert()"
      >

    </div>

    <div v-if="this.spinner" class="spin">
      <Message></Message>
    </div>

  </div>
</template>

<script>
import Message from './Message.vue'

export default {
  name: 'Cart',

  data(){
    return {
      internet: null,
      tvData: null,
      fixoData: null,
      produto: null,
      cliqueDisabled: false,
      cliqueInternet: false,
      cliqueTv: false,
      cliqueTelefone: false,
      picked: null,
      spinner: false,
      produtosCart: [],
      total: 0
    }
  }, 

   components: {
    Message
  },

  methods:{
    async getProdutos() {
      const req = await fetch('http://localhost:3000/produtos')
      const data = await req.json()
      this.internet = data.internet
      this.tv = data.tv
      this.fixo = data.fixo
    },

    enableTvFixo(produto){
      this.cliqueDisabled = true
      this.cliqueInternet = true
      this.addProduct(produto)
    },

    addProduct(produto){
        this.produtosCart.push({
        "id": produto.id,
        "tipo": produto.tipo,
        "valor": produto.valor
      })

      this.total = this.total + produto.valor
    },

    removeProduct(produtosCart){
      this.produtosCart.pop(produtosCart.id)
      this.total = this.total - produtosCart.valor
    },

    showAlert() {
      this.$swal.fire({
        icon: 'success',
        title: 'Obrigado!',
        text: 'Seu plano foi cadastrado com sucesso!',
        
      }).then((result) => {
        if(result.isConfirmed){
          location.reload();
        }
      })
    },
  },

  mounted(){
    this.getProdutos()
  },
}
</script>

<style scoped>
  *{
    box-sizing: border-box;
  }

  h2{
    color: blueviolet;
  }

  h4{
    color: gray;
  }

  span{
    color: gray;
  }

  .btn-primary{
    background-color: blueviolet;
    padding: 5px 50px 5px 50px;
    font-size: 20px;
  }

  .btn-primary:hover{
    background-color: blueviolet;
    opacity: 0.9;
  }

  .btn-primary:focus{
    background-color: blueviolet;
    opacity: 0.9;
  }

    li{
    list-style: none;
    text-decoration: none;
    margin: 0;
    padding: 0;
  }

  .card{
    width: 200px;
    height: 200px;
  }

  .card:focus{
    border: 1px solid blueviolet;
  }

  .card-title{
    color: #000;
    padding-left: 15px;
  }

  .card-footer{
    background-color: transparent;
    border-top: none;
  }

  .card-selected{
    border-color: blueviolet;
  }

  .form-check-input{
    cursor: pointer;
  }

  .form-check-input:checked{
    background-color: blueviolet;
  }

  .disabled .card{
    border-color: transparent;
  }

  .borderContainer{
    box-shadow: 14px 13px 294px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 14px 13px 294px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 14px 13px 294px 0px rgba(0,0,0,0.75);
  }

  .icon{
    color: blueviolet;
  }

  @keyframes spinner {
    0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }

  .spin::before {
    animation: 1.5s linear infinite spinner;
    animation-play-state: inherit;
    border: solid 5px #cfd0d1;
    border-bottom-color: #1c87c9;
    border-radius: 50%;
    content: "";
    position: absolute;
    top: 120%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    will-change: transform;
    width: 150px;
    height: 150px;
}

</style>
