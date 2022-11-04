// $(document).ready(function(){
// 	showAll();
// });

function validate(){
	var name = document.forms.petDetails.name.value;
	var gender = document.forms.petDetails.gender.value;
	var Number = document.forms.petDetails.category.value;

	if (isAlpha(name)){
		if (isAlpha(category)){
			addPet();
			return true;
		}
	
	}
		
	return false;
}

function isAlpha(input) {
    var characters = /^[A-Za-z]+$/; // Regular Expression [ ] - Options , A-Z - A,B, C ... Z, ^ - Any 
    if (input.value.match(characters)) {
        return true;
    }
    return false;
}


function addPet() {
			
	var name = document.forms.petDetails.name.value;
	var gender = document.forms.petDetails.gender.value;
	var category = document.forms.petDetails.category.value;
	const detail = JSON.stringify([gender, category]);
	//                               0        1
// 	[email, contact, course]
//     0      1        2 
	localStorage.setItem(name, detail);
	showAll();
}

function editPet() {
	var name = document.forms.petDetails.name.value;
    let data = JSON.parse(localStorage.getItem(name));
	document.forms.petDetails.gender.value = data[0]
    document.forms.petDetails.Number.value = data[1];
}

function deletePet() {
	var name = document.forms.petDetails.name.value;
	localStorage.removeItem(name);
	showAll();
	document.forms.petDetails.name.value = null;
	document.forms.petDetails.gender.value = null;
	document.forms.petDetails.category.value = null;
}

function clearAll() {
	localStorage.clear();
	showAll();
	document.forms.petDetails.name.value = null;
	document.forms.petDetails.gender.value = null;
	document.forms.petDetails.category.value = null;
}

// dynamically draw the table

function showAll() {

		var key = "";
		var list = "<tr><th>Name</th><th>Gender</th><th>Category</th></tr>\n";
		var i = 0;

		if (localStorage.length == 0) {
			list += "<tr><td><i>empty</i></td><td><i>empty</i></td><td><i>empty</i></td></tr>\n";
		  } else {
			for (i = 0; i < localStorage.length; i++) {

			  key = localStorage.key(i);
			  let data = JSON.parse(localStorage.getItem(key));

			  list += "<tr><td>" + key + "</td>\n<td>" +
				data[0] + "</td>\n<td>" + data[1] + "</td></tr>\n";

			}
		}
		document.getElementById('list').innerHTML = list;

}
