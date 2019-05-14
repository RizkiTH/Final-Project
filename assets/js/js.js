console.log(planets)

var currentPathname = window.location.pathname;
console.log(currentPathname);

switch (currentPathname){
	case "/planets.html":
		var globalCounter = 0;
		var tbody = document.getElementById('tbody');
		for (var i = 0; i < Object.keys(planets).length; i++){
			var tr = "<tr>";
			// if (planets[i].value.toString().substring(planets[i].value.toString().indexOf('.'), planets[i].value.toString().length) < 2) planets[i].value += "0";

			// tr += "<td>" + planets[i].key + "</td>" + "<td>" + planets[i].value.toString() + "</td></tr>";
			tr += 	"<td>" + planets[i].name + "</td>" + 
					"<td>" + planets[i].diameter + "</td>" +
					"<td>" + planets[i].gravity.toString() + "</td>" +
					"<td>" + planets[i].terrain.toString() + "</td>" +
					"<td>" + planets[i].surface_water.toString() + "</td>" +
					"<td>" + planets[i].population.toString() + "</td>";

			tr += "</tr>";
			tbody.innerHTML += tr;
		}
	break;
	
	case "/actors.html":
		var globalCounter = 0;
		var tbody = document.getElementById('tbody');
		for (var i = 0; i < Object.keys(actors).length; i++){
			var tr = "<tr>";
			// if (planets[i].value.toString().substring(planets[i].value.toString().indexOf('.'), planets[i].value.toString().length) < 2) planets[i].value += "0";

			// tr += "<td>" + planets[i].key + "</td>" + "<td>" + planets[i].value.toString() + "</td></tr>";
			tr += 	"<td>" + actors[i].name + "</td>" + 
					"<td>" + actors[i].gender + "</td>" +
					"<td>" + actors[i].height + "</td>" +
					"<td>" + actors[i].hair_color.toString() + "</td>" +
					"<td>" + actors[i].skin_color.toString() + "</td>" +
					"<td>" + actors[i].eye_color.toString() + "</td>";

			tr += "</tr>";
			tbody.innerHTML += tr;
		}
	break;

	case "/films.html":
		var globalCounter = 0;
		var tbody = document.getElementById('tbody');
		for (var i = 0; i < Object.keys(films).length; i++){
			var tr = "<tr>";
			// if (planets[i].value.toString().substring(planets[i].value.toString().indexOf('.'), planets[i].value.toString().length) < 2) planets[i].value += "0";

			// tr += "<td>" + planets[i].key + "</td>" + "<td>" + planets[i].value.toString() + "</td></tr>";
			tr += 	"<td>" + films[i].title + "</td>" + 
					"<td>" + films[i].director + "</td>" +
					"<td>" + films[i].producer + "</td>" +
					"<td>" + films[i].release_date.toString() + "</td>" +
					"<td>" + films[i].opening_crawl.toString() + "</td>";

			tr += "</tr>";
			tbody.innerHTML += tr;
		}
	break;

	case "/starships.html":
		var globalCounter = 0;
		var tbody = document.getElementById('tbody');
		for (var i = 0; i < Object.keys(starships).length; i++){
			var tr = "<tr>";
			// if (planets[i].value.toString().substring(planets[i].value.toString().indexOf('.'), planets[i].value.toString().length) < 2) planets[i].value += "0";

			// tr += "<td>" + planets[i].key + "</td>" + "<td>" + planets[i].value.toString() + "</td></tr>";
			tr += 	"<td>" + starships[i].name + "</td>" + 
					"<td>" + starships[i].model + "</td>" +
					"<td>" + starships[i].starship_class + "</td>" +
					"<td>" + starships[i].manufacturer + "</td>" +
					"<td>" + starships[i].consumables.toString() + "</td>" +
					"<td>" + starships[i].hyperdrive_rating.toString() + "</td>" +
					"<td>" + starships[i].created.toString() + "</td>";

			tr += "</tr>";
			tbody.innerHTML += tr;
		}
	break;

	case "/species.html":
		var globalCounter = 0;
		var tbody = document.getElementById('tbody');
		for (var i = 0; i < Object.keys(species).length; i++){
			var tr = "<tr>";
			// if (planets[i].value.toString().substring(planets[i].value.toString().indexOf('.'), planets[i].value.toString().length) < 2) planets[i].value += "0";

			// tr += "<td>" + planets[i].key + "</td>" + "<td>" + planets[i].value.toString() + "</td></tr>";
			tr += 	"<td>" + species[i].name + "</td>" + 
					"<td>" + species[i].classification + "</td>" +
					"<td>" + species[i].average_height + "</td>" +
					"<td>" + species[i].skin_colors + "</td>" +
					"<td>" + species[i].eye_colors.toString() + "</td>" +
					"<td>" + species[i].average_lifespan.toString() + "</td>" +
					"<td>" + species[i].language.toString() + "</td>";

			tr += "</tr>";
			tbody.innerHTML += tr;
		}
	break;

	case "/vehicles.html":
		var globalCounter = 0;
		var tbody = document.getElementById('tbody');
		for (var i = 0; i < Object.keys(vehicles).length; i++){
			var tr = "<tr>";
			// if (planets[i].value.toString().substring(planets[i].value.toString().indexOf('.'), planets[i].value.toString().length) < 2) planets[i].value += "0";

			// tr += "<td>" + planets[i].key + "</td>" + "<td>" + planets[i].value.toString() + "</td></tr>";
			tr += 	"<td>" + vehicles[i].name + "</td>" + 
					"<td>" + vehicles[i].model + "</td>" +
					"<td>" + vehicles[i].vehicle_class + "</td>" +
					"<td>" + vehicles[i].manufacturer + "</td>" +
					"<td>" + vehicles[i].crew + "</td>" +
					"<td>" + vehicles[i].passengers.toString() + "</td>" +
					"<td>" + vehicles[i].consumables.toString() + "</td>";

			tr += "</tr>";
			tbody.innerHTML += tr;
		}
	break;
}
//planets




//pencarian tabel
function search() {
	var input, filter, table, tr, td, i, j, txtValue, cell;
	input = document.getElementById("search");
	filter = input.value.toUpperCase();
	table = document.getElementById("tbody");
	tr = table.getElementsByTagName("tr");

	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];

		if (td) {
			txtValue = td.textContent || td.innerText;

			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			}else{
				tr[i].style.display = "none";
			}
		}
	}

	// cari apapun di tabel [GAGAL]
	// for (i = 0; i < tr.length; i++) {
	// 	td = tr[i].getElementsByTagName("td");
	// 	for (j = 0; j < td.length; j++{
	// 		cell = tr[i].getElementsByTagName("td")[j];
	// 		if (cell) {
	// 			if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
	// 				tr[i].style.display = "";
	// 				break;
	// 			}
	// 		}
	// 	}
	// }
}

//buat ngurutin tabel
function urutkanTabel(n) {
	var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	table = document.getElementById("myTable");
	switching = true;
	// urutkan secara askending
	dir = "asc";
	//buat loop sampai tidak bisa di-switch lagi
	while (switching){
		switching = false;
		rows = table.rows;

		//loop ke semua row table kecuali header
		for (i = 1; i < (rows.length - 1); i++){
			//tidak ada yang di-switch
			shouldSwitch = false;

			x = rows[i].getElementsByTagName("TD")[n];
			y = rows[i+1].getElementsByTagName("TD")[n];

			//cek urutannya

			if (dir == "asc") {
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					//jika iya, tandai dan hentikan loop
					shouldSwitch = true;
					break;
				}
			}else if(dir == "desc"){
				if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
					//jika iya, tandai dan hentikan loop
					shouldSwitch = true;
					break;
				}
			}
		}

		if (shouldSwitch) {
			//jika switch sudah ditandai, buat switchnya dan tandai switch selesai
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
			//setiap kali switch selesai, naikkan counter 1 step
			switchcount++;
		}else{
			//jika tidak ada yg bisa di switch lagi ganti dari "asc" ke "desc" dan lakukan loop lagi
			if (switchcount == 0  && dir == "asc") {
				dir = "desc";
				switching = true;
			}
		}
	}
}