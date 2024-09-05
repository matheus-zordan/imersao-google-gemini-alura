function pesquisar() {
    let section = document.getElementById("resultados-pesquisas")

    let resultados = ""

    for (let dado of elencoFlamengo) {
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
    section.innerHTML = resultados
}


