//sections_select__________________________________________
var home_button = document.getElementById("home")
var adicione_button = document.getElementById("adicione")
var procure_button = document.getElementById("procure")

var compare_section = 0

home_button.addEventListener("click", function () {
	compare_section = 0
})

adicione_button.addEventListener("click", function () {
	compare_section = 1
})

procure_button.addEventListener("click", function () {
	compare_section = 2
})
