var compare_section = 0
var none = ""

home_button.addEventListener("click", function () {
	compare_section = 0
})

adicione_button.addEventListener("click", function () {
	compare_section = 1
})

procure_button.addEventListener("click", function () {
	compare_section = 2
})

setInterval(function () {
	if (compare_section==0) {
		if (window.innerWidth >= 770) {
			home_button.style.color = "black"
			home_button.style.borderBottom = "3px solid #13aa52"
			home_button.style.height = "78px"

			adicione_button.style.color = "#333333"
			adicione_button.style.borderBottom = "none"
			adicione_button.style.height = "80px"

			procure_button.style.color = "#333333"
			procure_button.style.borderBottom = "none"
			procure_button.style.height = "80px"

		}
		else {
			home_button.style.color = "#13aa52"
			home_button.style.borderBottom = "none"
			home_button.style.height = "45px"

			adicione_button.style.color = "#333333"
			adicione_button.style.borderBottom = "none"
			adicione_button.style.height = "45px"

			procure_button.style.color = "#333333"
			procure_button.style.borderBottom = "none"
			procure_button.style.height = "45px"			
		}
	}

	if (compare_section==1) {
		if (window.innerWidth >= 770) {
			adicione_button.style.color = "black"
			adicione_button.style.borderBottom = "3px solid #13aa52"
			adicione_button.style.height = "78px"

			home_button.style.color = "#333333"
			home_button.style.borderBottom = "none"
			home_button.style.height = "80px"

			procure_button.style.color = "#333333"
			procure_button.style.borderBottom = "none"
			procure_button.style.height = "80px"

		}
		else {
			adicione_button.style.color = "#13aa52"
			adicione_button.style.borderBottom = "none"
			adicione_button.style.height = "45px"

			home_button.style.color = "#333333"
			home_button.style.borderBottom = "none"
			home_button.style.height = "45px"

			procure_button.style.color = "#333333"
			procure_button.style.borderBottom = "none"
			procure_button.style.height = "45px"			
		}
	}

	if (compare_section==2) {
		if (window.innerWidth >= 770) {
			procure_button.style.color = "black"
			procure_button.style.borderBottom = "3px solid #13aa52"
			procure_button.style.height = "78px"

			home_button.style.color = "#333333"
			home_button.style.borderBottom = "none"
			home_button.style.height = "80px"

			adicione_button.style.color = "#333333"
			adicione_button.style.borderBottom = "none"
			adicione_button.style.height = "80px"

		}
		else {
			procure_button.style.color = "#13aa52"
			procure_button.style.borderBottom = "none"
			procure_button.style.height = "45px"

			home_button.style.color = "#333333"
			home_button.style.borderBottom = "none"
			home_button.style.height = "45px"

			adicione_button.style.color = "#333333"
			adicione_button.style.borderBottom = "none"
			adicione_button.style.height = "45px"			
		}
	}

},100)