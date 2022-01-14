// Exemplo de Callback no browser
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!');
}


// Variação utilizando Arrow Function
document.getElementsByTagName('body')[0].onclick = e => console.log('O evento ocorreu!');

// Com esse exemplo o Callback fica muito mais facil de entender.