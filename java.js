
document.getElementById("send").addEventListener("click", function() {
    // Coletando os valores dos campos de entrada
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var idade = document.getElementById("idade").value;
  
    // Verificando se todos os campos foram preenchidos
    if (fname && lname && idade) {
      alert("Dados Enviados!\nPrimeiro Nome: " + fname + "\nÚltimo Nome: " + lname + "\nIdade: " + idade);
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });