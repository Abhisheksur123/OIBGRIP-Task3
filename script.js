function convert() {
    var input = document.getElementById("celsius");
    var result = document.getElementById("fahrenheit");
  
    var x = document.getElementById("unit");
    var text = x.options[x.selectedIndex].text;
  
    if (input.value !== "") {
      if (text === "Choose a unit")
      {
          alert("please select unit");
      }
      else
      {
        if (text === "Fahrenheit") {
          result.value = ((input.value - 32) * 5) / 9 + "°C";
        } else if (text === "Celsius") {
          result.value = (input.value * 9) / 5 + 32 + "°F";
        }
      } 
    } else {
      alert("Please enter temperature !!");
    }
  }
  