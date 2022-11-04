var users = localStorage.getItem("users");
$(document).ready(function(){
    users = JSON.parse(users); // Convert String as an Object
    if (users === null) // If there is nothing intialize
        users = [];

    listRegistrants();
});

function listRegistrants() {
    var users = localStorage.getItem("users");
    users = JSON.parse(users); // Convert String as an Object
    if (users === null) // If there is nothing intialize
        users = [];

    $("#tbl-list").html("");
    $("#tbl-list").html(
            "<thead>" +
            "<tr>" +                
            "<th>User Name</th>" +
			"<th>Gender</th>" +
            "<th>Email</th>" +
            "<th>Contact</th>" +
            "<th>Address</th>" +
            "<th>Country</th>" +
            "<th>Language</th>" +
            "<th>Edit? </th>" +
            "<th>Delete? </th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            "</tbody>"
            ); 
			
			
			for (var user in users) {
				var registrant = JSON.parse(users[user]);	 

				$("#tbl-list tbody").append("<tr>" +                    
						"<td>" + registrant.user_name + "</td>" +
						"<td>" + registrant.gender + "</td>" +
						"<td>" + registrant.email + "</td>" +
						"<td>" + registrant.contact + "</td>" + 
                        "<td>" + registrant.address + "</td>" + 
                        "<td>" + registrant.country + "</td>" + 
                        "<td>" + registrant.language + "</td>" + 
                        "<td> <img src='images/edit.png' alt='Edit'>  </td>" +
                        "<td> <img src='images/delete.png' alt='Delete'>  </td>" +
                        "</tr>"
                );
    } 
  }
/*
  $(".btnEdit").bind("click", function () {
   
    var registrant;

    for (var user in users) {
        registrant = JSON.parse(users[user]);
        if (re)

    selected_index = parseInt($(this).attr("alt").replace("Edit", ""));

    var registrant = JSON.parse(users[selected_index-1]);

            $("#user_name").val(registrant.user_name);
                            //gender: gender.value,
            $("#email").val(registrant.email);
            $("#pwd").val(registrant.password);
            $("#contact").val(registrant.contact);
            $("#address").val(registrant.address),
            $("#country").val(registrant.country),
                            //language:lang,
            $("#comments").val(registrant.comments);
            $("#user_name").attr("readonly", "readonly");
            $("#email").focus();
         }
    });
  });
*/