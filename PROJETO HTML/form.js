<html>
<body>
<script>
        var nome = window.prompt('Qual é o seu nome') // perguntar o nome
        document.write(`seu nome tem ${nome.length} letras.`)
        window.alert('É um grande prazer em te conhecer, '+ nome) //concatenação
        var n1 = Number(window.prompt('digite um número: ')) // string
        var n2 = Number(window.prompt('digite outro número: ')) // string
        var s = n1 + n2
        window.alert(`A soma entre ${n1} e ${n2} é igual a ${s}`) //concatenação
        // (number + number) para adição
        // (string + string) para concatenação
        // No var n1 e n2 também pode ser utilizado o number.porseInt, mas com a versão mais recente  e utilizada ficaria somente Number(window.prompt ('digite um número: '))
    </script>
    
    



    <title>Form Contato</title>
    <style>
        *{margin: 300;padding: 300;box-sizing: border-box;}
        body{
            background-color: rgba(68, 2, 7, 0.041);
        }
        
    </style>
    
    <form>
            <h3>Entrar Em Contato</h3>
            <input type="text" name="email" placeholder="Seu email..." />
            <input type="password" name="senha" placeholder="Sua senha...">
            <input type="submit" name="acao" value="enviar" />
        </form>


        <label class="select">
            <select id="country" name="country">
               <option disabled="disabled" selected="selected">país</option>
            </select>
            <select id="state" name="state">
               <option disabled="disabled" selected="selected">Selecione o estado</option>
            </select>
         </label>

         <div class="container col-md-5">
            <form>
              <div class="form-group font-weight-bold">
                <label>CEP</label>
                <input type="text" id="cep" pattern= "\d{5}-?\d{3}" class="form-control" required placeholder="Insira o seu CEP">
              </div>
              <div class="form-group font-weight-bold">
                <label>Rua</label>
                <input type="text" class="form-control" id="rua" placeholder="...">
              </div>
              <div class="form-group font-weight-bold">
                <label>Complemento</label>
                <input type="text" class="form-control" id="complemento" placeholder="...">
              </div>
              <div class="form-group font-weight-bold">
                <label>Bairro</label>
                <input type="text" class="form-control" id="bairro" placeholder="...">
              </div>
              <div class="form-group font-weight-bold">
                <label>Cidade</label>
                <input type="text" class="form-control" id="cidade" placeholder="...">
              </div>
              <div class="form-group font-weight-bold">
                <label>Estado</label>
                <input type="text" class="form-control" id="estado" placeholder="...">
              </div>
              <button type="submit" id="btnPesquisar" class="btn btn-primary">Pesquisa</button>
              <button type="button" id="btnLimpar" class="btn btn-danger">Limpar</button>
            </form>
        </div>
        <br>
        <select name="country" id="country"></select>
<select name="state" id="state"></select>


<style>
  .icon-wts{
width: 60px;
height: 60px;
position: fixed;
bottom: 20px;
right: 20px;
cursor: pointer;
  }
  .icon-wts:active{
    transform: scale(0.9);
  }

.form-wts{
  width: 250px;
  height: 320px;
  background: white;
  position: fixed;
  bottom: 80px;
  right: 30px;
  box-shadow: white;
  border: radius 5px;
  padding: 10px;
}


.inputwts{
  width: 100%;
  padding: 5px;
  color: #666;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid rgba(0.0.0.0.19);
  
}

.inputwts: focus{
  outline: nome;
}

.btn-wts{
  width: 100%;
  background: yellow;
  border: none;
  padding: 5px;
  color: white;
  border-radius: 5px;
}

.textareawts{
  width: 100%;
  padding: 5px;
  color: #666;
  height: 150px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid rgba(0.0.0.0.19);

}

</style>

<div>
  <form class="form-wts" action="">
    <p>Escrever Mensagem</p>
    <label for="Nome"></label>
    <input class="inputwts" type="text" placeholder="Nome">
    <label for="">Mensagem</label>
    <textarea class="textareawts" name="" id="" cols="30" rows="10"></textarea>
    <button>Enviar Mensagem</button>
    <small>Error message</small>


  </form>
  <img class="logo" src="Imagem/Imagem whatsapp.png" alt="NHA FOTO" width="5px" height="50px">
</div>


<div class="form-control">
  <label for="username" >Nome</label>
  <input type="text" id="username">
  
  <small>Error message</small>
</div>

<div class="form-control">
  <label for="usarname" >Email</label>
  <input type="text" id="email">
  
  <smal>Error message</smal>
</div>

<div class="form-control">
  <label for="password" >Senha</label>
  <input type="text" id="password">
  
  <smal>Error message</smal>
</div>

<div class="form-control">
  <label for="passwordtwo" >confirme sua senha</label>
  <input type="text" id="passwordtwo">
  
  <smal>Error message</smal>
</div>

    
    </body>
    </html>
