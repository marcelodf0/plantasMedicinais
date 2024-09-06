/*
console.log("Plantas Medicinais do Brasil");
// console.log(dados);
// exemplo do Gemini...
dados.forEach(planta => {
    console.log(planta.titulo);
    console.log(planta.descricao);
    console.log(planta.link);
});
*/
function validarString(texto) {
    // Expressão regular para verificar se a string contém apenas caracteres alfanuméricos, espaços ou hífens
    // incluindo os caracteres acentuados (ficou faltando os acentuados em caixa alta)
    const regex = /^[a-zA-Z0-9\s-àáãâéêíóõôúüç]+$/;
    
    // Retorna true se a string corresponder à expressão regular, false caso contrário
    return regex.test(texto);
  }

// função para varrer todos os dados da base (arquivo dados.js) e 
// encontrar os valores que correspondem ao critério da pesquisa
function pesquisar() {
    // Busca a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Para fins de debug, verifica se a seção foi encontrada

    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();
    console.log(campoPesquisa);
    
    // aborta pesquisa caso o campoPesquisa esteja em branco
    if (campoPesquisa == "") {
        section.innerHTML = "<h3>digite um nome ou parte do nome no campo de pesquisa</h3>"
        return;
    }
    /*
    // verifica se a string contém algum caractere inválido
    if(!validarString(campoPesquisa)) {
        section.innerHTML = "<h3>caractere inválido</h3>";
        return;
    }
    */

    // Inicializa uma string vazia que irá armazenar o código HTML para exibição dos resultados
    let resultados = "";

    // Itera sobre os dados das plantas e constrói o HTML para cada resultado
    dados.forEach(dado => { // loop gerado pelo Gemini
        
        if (dado.titulo.toLowerCase().includes(campoPesquisa.toLowerCase()) ||
            dado.nomes.toLowerCase().includes(campoPesquisa.toLowerCase()) ||
            dado.descricao.toLowerCase().includes(campoPesquisa.toLowerCase()))
        // inclui o dado no HTML
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>          <!-- Cria um link para mais detalhes -->
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>             <!-- Exibe uma breve descrição -->
                <a href=${dado.link} target="_blank">Mais informações</a>   <!-- Link para a fonte original -->
            </div>
        `
    });

    // Atualiza o conteúdo da seção com os resultados da pesquisa
    if (!resultados) resultados = "<h3>Nenhum registro não encontrado.</h3><h3>Verifique se você digitou corretamente...</h3>";
    section.innerHTML = resultados;

}