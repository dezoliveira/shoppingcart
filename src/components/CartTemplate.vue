<template>
  <div class="col-lg-12 col-md-12 col-sm-12 p-4">
    <div>
      <h2>Internet</h2>
      <h4>Selecione um plano de internet para continuar</h4>
    </div>

    <div class="d-flex gap-4 py-4">
      <li>
        <div class="card">
          <input id="radioButton" type="radio" class="form-check-input m-2">
          <div class="card-title">
            <h2>100 MEGA</h2>
          </div>
          <div class="card-body">
            <h5>R$50,00</h5>
          </div>
          <div class="card-footer d-flex justify-content-end">
            <span>+ DETALHES</span>
          </div>
        </div>
      </li>
      <li>
        <div class="card">
          <input id="" type="radio" class="form-check-input m-2">
          <div class="card-title">
            <h2>200 MEGA</h2>
          </div>
          <div class="card-body">
            <h5>R$100,00</h5>
          </div>
          <div class="card-footer d-flex justify-content-end">
            <span>+ DETALHES</span>
          </div>
        </div>
      </li>
      <li>
        <div class="card">
          <input id="" type="radio" class="form-check-input m-2">
          <div class="card-title">
            <h2>300 MEGA</h2>
          </div>
          <div class="card-body">
            <h5>R$150,00</h5>
          </div>
          <div class="card-footer d-flex justify-content-end">
            <span>+ DETALHES</span>
          </div>
        </div>
      </li>
    </div>

    <div>
      <h2>TV</h2>
      <h4>Agora escolha um pacote de TV</h4>
    </div>

    <div class="d-flex gap-4 py-4">
      <li>
        <div class="card">
          <input id="radioButton" type="radio" class="form-check-input m-2">
          <div class="card-title">
            <h2>Ultimate HD</h2>
          </div>
          <div class="card-body">
            <h5>R$50,00</h5>
          </div>
          <div class="card-footer d-flex justify-content-end">
            <span>+ DETALHES</span>
          </div>
        </div>
      </li>
      <li>
        <div class="card">
          <input id="radioButton" type="radio" class="form-check-input m-2">
          <div class="card-title">
            <h2>Full HD</h2>
          </div>
          <div class="card-body">
            <h5>R$50,00</h5>
          </div>
          <div class="card-footer d-flex justify-content-end">
            <span>+ DETALHES</span>
          </div>
        </div>
      </li>
    </div>

    <div>
      <h2>Fixo</h2>
      <h4>Agora escolha um pacote de telefone fixo</h4>
    </div>

    <div class="card">
      <input id="" type="radio" class="form-check-input m-2">
      <div class="card-title">
        <h2>300 MEGA</h2>
      </div>
      <div class="card-body">
        <h5>R$150,00</h5>
      </div>
      <div class="card-footer d-flex justify-content-end">
        <span>+ DETALHES</span>
      </div>
    </div>

    <hr class="my-4">

    <div class="d-flex justify-content-between">
      <h4>Taxa de instalação</h4>
      <h4>Grátis</h4>
    </div>

    <div class="d-flex justify-content-between">
      <h2>Total</h2>
      <h2>R$10,00/mês</h2>
    </div>

    <input type="button" class="btn btn-primary my-2" value="Continuar">
  </div>
</template>

<script>
export default {
  name: 'CartTemplate',
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

  .form-check-input:focus,
  .form-check-input:checked{
    background-color: blueviolet;
  }

  .card-title{
    color: #000;
    padding-left: 15px;
  }

  .card-footer{
    background-color: transparent;
    border-top: none;
  }


</style>
