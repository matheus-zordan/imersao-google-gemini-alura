function pesquisar() {
    let section = document.getElementById("resultados-pesquisas")
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let nome = "";

    for (let dado of elencoFlamengo) {
        nome = dado.nome.toLowerCase()
        if (nome.includes(campoPesquisa)) {
            resultados += `
    <div class="item-resultado">
        <h2>${dado.nome}</h2>
        <img src="${dado.imagem}" alt="${dado.nome}">
        <ul>
            <li><strong>Posição:</strong> ${dado.posicao}</li>
            <li><strong>Número da Camisa:</strong> ${dado.numeroCamisa}</li>
            <li><strong>Data de Nascimento:</strong> ${dado.dataNascimento}</li>
            <li><strong>Nacionalidade:</strong> ${dado.nacionalidade}</li>
            <li><strong>Altura:</strong> ${dado.altura}</li>
            <li><strong>Peso:</strong> ${dado.peso}</li>
            <li><strong>Pé Preferencial:</strong> ${dado.pePreferencial}</li>
            <li><strong>Clubes anteriores</strong> ${dado.clubesAnteriores}</li>
            <li><strong>Títulos</strong> ${dado.titulos}</li>
        </ul>
    </div>
        `
        }
    }
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum Atleta Encontrado!</p>"
        return;
    }
    if (!resultados) {
        resultados = "<p>Nenhum Atleta Encontrado!</p>"
    }
    section.innerHTML = resultados
}


