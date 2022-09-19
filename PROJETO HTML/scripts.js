constul = documento . _ querySelector ('ul') 

function  getApiGitHub ( ) {
  buscar ('https://github.com/RudilsonManuelIe')
    . então (async res) => {

      if (!res.ok) { _ _ 
        lançar novo erro (res.status)
      }

      var  dados = esperar res.json ( )

      dados.mapa (item => {
        deixe li = documento.createElement ('li')

        li . innerHTML = `
        <strong> ${ item.nome.toUpperCase ( ) } </strong>
        <span>URL: ${item.URL } </span>
        <span>Criação de dados:
          $ { Internacional DateTimeFormat ( 'pt-BR' )
            . format (new  Date (item.created_at))}
        </span>
      `
      ul.appendChild (li)

      } )

    } ). catch( e => console.log (e))
}

getApiGitHub ( )


'usar estrito' ;

deixe banco  =  [ ] ;

const getBanco = ( ) => JSON.parse (localStorage.getItem ('todoList')) ?? [ ] ;  
const setBanco  =  ( banco )  =>  localStorage . setItem  ('todoList', JSON.stringify (banco));

const criarItem = (tarefa, status, indice)  =>  {
    const item = documento.createElement ('rótulo') ;
    artigo.classList.add ('todo__item') ;
    artigo.innerHTML  =  `
        <input type="checkbox" ${ status } data-indice= ${ indice } >
        <div> ${ tarefas } </div>
        <input type="button" value="X" data-indice= ${ indice } >
    ` ;
    documento.getElementById ('todoList').appendChild (item);
}

const limpar tarefas = ( ) => {
    const  todoList = document.getElementById ('todoLista') ;
    while  (todoList . firstChild) {
        todoList.removeChild (todoList.lastChild) ; _ _
    }
}

const atualizarTela = ( ) => {
    Tarefas ( ) ;
    const banco = getBanco ( ) ; 
    banco.forEach (( item, índice) => criarItem (item.tarefa,item.status,índice)) ; _ _ _ 
}

const inserirItem = (evento) =>  
    const tecla = evento.chave;
    const texto = evento.alvo.valor ;
    if (tecla === 'Enter') {
        const banco = getBanco ( ) ;
        banco.push ({'tarefa':texto, 'status':''});
        setBanco (banco);
        atualizarTela ( );
        evento.alvo.valor = '';
    }
}

const removedorItem = (indice) => {
    const banco  =  getBanco ( );
    banco.emenda (índice, 1 );
    setBanco (banco);
    atualizarTela ( );
}

const atualizarItem = (indice) => {
    const banco = getBanco ( );
    banco [índice] . status = banco [índice].estado === '' ? 'verificado' : '';
    setBanco (banco);
    atualizarTela ( );
}

const  clickItem = (evento) => {
    const  elemento  =  evento.alvo;
    consola . log  (elemento.type); _
    if  ( elemento.type  === 'button')  {
        const  índice = elemento.conjunto de dados.índice;
        removeItem (índice) ;
    } else if (elemento.type === 'checkbox') {
        const índice = elemento.conjunto de dados.índice;
        atualizarItem (índice);
    }
}

documento.getElementById ('newItem') . addEventListener ('pressionar tecla', inserirItem);
documento.getElementById ('todoList') . addEventListener ('click', clickItem);

atualizarTela ( );

