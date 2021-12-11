function pessoa() {
    this.idade = 0;

    setInterval(function() { // Dispara uma outra função apartir de um determinado intervalo que você passou.
        this.idade++
        console.log(this.idade);
    }.bind(this), 2000) // O tempo
}

new pessoa