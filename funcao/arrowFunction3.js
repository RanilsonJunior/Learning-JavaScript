let comparacaoComThis = function (param) {
    console.log(this === param);
}

comparacaoComThis(global)

