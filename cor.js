const container = document.querySelector('.container-conteudo');
const colorSelect = document.getElementById('cor-favorita');
const container2 = document.querySelector('.container-cor')
const body = document.querySelector('.body-container')
 
    function trocaCor() {
        const selectedColor = colorSelect.value;
        container.style.backgroundColor = selectedColor;
        container2.style.backgroundColor = selectedColor;

        if (selectedColor === '#412e28') {
            body.style.color = '#edf6ee';
            body.style.backgroundColor = '#d1c089'
            body.style.setProperty('--cor-fonte1', '#edf6ee');
            body.style.setProperty('--cor-fundo2', 'black');
            body.style.setProperty('--cor-place', '#edf6ee');
        } else if (selectedColor === '#f0f1bc') {
            body.style.color = '#ff360e';
            body.style.backgroundColor = '#30182b'
            body.style.setProperty('--cor-fonte1', '#ff360e');
            body.style.setProperty('--cor-place', 'black');
        } else if (selectedColor === '#72a061') {
            body.style.color = '#d7ffc2';
            body.style.backgroundColor = '#b5dfa2'
            body.style.setProperty('--cor-fonte1', '#d7ffc2');
            body.style.setProperty('--cor-fundo2', 'black');

        } else {
            body.style.color = '#116A7B';
            body.style.setProperty('--cor-fonte1', '#116A7B'); 
            body.style.setProperty('--cor-fundo2', '#fefefe');
            body.style.backgroundColor = '#ECE5C7';
            body.style.setProperty('--cor-place', 'black');
        }
    };

   

