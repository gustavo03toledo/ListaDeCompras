// Obtém referências para os elementos HTML
var itemInput = document.getElementById("item_name"); // Campo de entrada de item
var addButton = document.getElementById("add_button"); // Botão de adicionar item
var lista = document.getElementById("lista"); // Lista de itens de compra

// Recupera os itens de compras armazenados no localStorage quando a página carrega
var itensArmazenados = JSON.parse(localStorage.getItem("itens_compra")) || [];

// Função para renderizar a lista de itens
function renderizarItens() {
    lista.innerHTML = ""; // Limpa a lista antes de renderizar novamente

    for (var i = 0; i < itensArmazenados.length; i++) {
        adicionarItem(itensArmazenados[i]);
    }
}

// Renderiza a lista ao carregar a página
renderizarItens();

// Adiciona evento de clique ao botão de adicionar
addButton.addEventListener("click", addItemCompra);

// Adiciona evento de pressionar Enter no campo de texto
itemInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addItemCompra();
        event.preventDefault(); // Evita que a tecla Enter envie o formulário (comportamento padrão)
    }
});

// Função para adicionar um novo item de compra
function addItemCompra() {
    var text = itemInput.value.trim();

    if (text.length === 0) {
        alert('O item da lista de compras deve ter um ou mais caracteres');
        return; // Evita a adição de itens em branco
    }

    adicionarItem(text);
    itemInput.value = ""; // Limpa o campo de entrada
    salvarItensCompra(); // Salva os itens após uma alteração
}

// Função para adicionar um item à lista
function adicionarItem(text) {
    text = text.charAt(0).toUpperCase() + text.slice(1);
    // Cria um elemento de lista (li) para o novo item
    var listItem = document.createElement("li");
    listItem.className = "lista-item"; // Define a classe do item

    // Cria um checkbox para marcar o item como concluído
    var check = document.createElement("input");
    check.type = "checkbox";
    check.className = "item-check";

    // Cria um botão de "Remover" para remover o item da lista
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.className = "remove-button";

    // Adiciona um ouvinte de evento para marcar/desmarcar o item
    check.addEventListener("change", function () {
        if (check.checked) {
            textElement.classList.add("completed-text");
        } else {
            textElement.classList.remove("completed-text");
        }
        salvarItensCompra(); // Salva os itens após uma alteração
    });

    // Adiciona um ouvinte de evento para remover o item quando o botão "Remover" é clicado
    removeButton.addEventListener("click", function () {
        removerItem(listItem); // Chama a função para remover o item
        salvarItensCompra(); // Salva os itens após a remoção
    });

    // Cria um elemento de texto para o texto do item
    var textElement = document.createElement("span");
    textElement.textContent = text;

    // Adiciona os elementos criados ao item da lista
    listItem.appendChild(check);
    listItem.appendChild(textElement);
    listItem.appendChild(removeButton);

    // Adiciona o item da lista à lista principal
    lista.appendChild(listItem);
}

// Função para remover um item da lista
function removerItem(item) {
    lista.removeChild(item); // Remove o item da lista
    salvarItensCompra(); // Salva os itens após a remoção
}

// Função para salvar os itens de compras no localStorage
function salvarItensCompra() {
    itensArmazenados = Array.from(lista.querySelectorAll(".lista-item span")).map(function (item) {
        return item.textContent;
    });

    localStorage.setItem("itens_compra", JSON.stringify(itensArmazenados));
}