document.getElementById("link").addEventListener("click", function(event){
    event.preventDefault();
    var newText = prompt("Введите новый текст для ссылки:");
    if (newText) {
        this.textContent = newText;
    }
});
