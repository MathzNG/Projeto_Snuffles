function liberar(){

fetch('/liberar')
.then(() => {
alert("Ração liberada!");
})
.catch(() => {
alert("Erro ao liberar ração");
});

}