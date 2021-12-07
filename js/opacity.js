var slider = document.getElementById("myRange");
var output = document.getElementById("slide");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  var complete_value = this.value / 100
  console.log(complete_value)
  document.getElementById("Image2").style.opacity = complete_value;

}
