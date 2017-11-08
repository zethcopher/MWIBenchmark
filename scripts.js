		function validate () {
					var email = document.getElementById("Email").value;
					var subject = document.getElementById("Subject").value;
					var message = document.getElementById("Message").value;
					if (email=="") {
							errorEm.style.visibility = "visible";
							return false;

					} if (subject==""){
							errorSub.style.visibility = "visible";
							return false;

					} if (message==""){
							errorMes.style.visibility = "visible";
							return false;

					} else 
							return true;
							[errorMes,errorSub,errorEm].style.visibility = "hidden";
				}

				var namesOne = ["Matt Johnson", "Bart Paden", "Ryan Doss", "Michael Spangler"]
				var nameTwo = ["Matt Johnson", "Bart Paden", "Jordan Heigle", "Elke Fallas"]

				var namesTogether = namesOne.concat(nameTwo);
				var namesSorted = namesTogether.slice().sort();

				var output = [];
					for (var i = 0; i < namesTogether.length - 1; i++) {
    					if (namesSorted[i + 1] != namesSorted[i]) {
        				output.push(namesSorted[i]);
    					}	
					}

				function makeUl(array) {

					var list = document.createElement("ul");

						for (var i = 0; i < array.length; i++){
						var item = document.createElement('li');

						item.appendChild(document.createTextNode(array[i]));
						list.appendChild(item);
						}

					return list;
				}

		function thisLinkClicked () {
					document.getElementById("listOfNames").appendChild(makeUl(output));
				}

				var executed = false;

				function clickOnlyOnce () {

					if (executed == false) {
						thisLinkClicked();
						bottomSection.style.padding = "0px 10px"
						}
					if (executed == true){
						alert("List has already been created")
					} 	
					executed = true;
			}