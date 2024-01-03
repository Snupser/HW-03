function outputText() {
    var inputValue = document.getElementById("input").value;
    console.log(inputValue);
  
    document.getElementById("duplicateField").innerText = "Введенный текст: " + inputValue;
  
    document.getElementById("input").value = "";
  }