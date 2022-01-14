;(function() {
    console.log('será executado na hora!');
    console.log('foge do escopo global e fica no local!');
})()


;(function(x, y) {
     console.log( x + y);
})(30, 20)


