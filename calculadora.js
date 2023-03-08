function sumar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (validarNumeros(num1, num2)) {
      var resultado = num1 + num2;
      document.getElementById("resultado").value = resultado;
    }
  }
  
  function restar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (validarNumeros(num1, num2)) {
      var resultado = num1 - num2;
      document.getElementById("resultado").value = resultado;
    }
  }
  
  function multiplicar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (validarNumeros(num1, num2)) {
      var resultado = num1 * num2;
      document.getElementById("resultado").value = resultado;
    }
  }
  
  function dividir() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (validarNumeros(num1, num2)) {
      if (num2 === 0) {
        alert("No se puede dividir entre cero");
      } else {
        var resultado = num1 / num2;
        document.getElementById("resultado").value = resultado;
      }
    }
  }
  
  function validarNumeros(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      alert("Ingrese números válidos");
      return false;
    }
    return true;
  }
  
