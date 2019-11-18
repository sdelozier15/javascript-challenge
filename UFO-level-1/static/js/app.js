var tableData = data;

var tbody = d3.select("tbody");
var ufoFilter = 0;

console.log(data);

data.forEach((ufoEntry) => {
	var row = tbody.append("tr");
	Object.entries(ufoEntry).forEach(([key, value]) => {
		var cell = tbody.append("td");
		cell.text(value);
	});
});

var submit = d3.select("#filter-btn");

submit.on("click", function () {

	// Disable page from refreshing
	d3.event.preventDefault();

	// Select datetime as input
	var inputElement = d3.select("#datetime");

	// Obtain search value
	var inputValue = inputElement.property("value");
	var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
	newTable(filteredData);

});

// Perform datetime filter on table data
function newTable(ufoFilter) {

	tbody.html("");
	ufoFilter.forEach((ufoEntry) => {
		var row = tbody.append("tr");
		Object.entries(ufoEntry).forEach(([key, value]) => {
			var cell = tbody.append("td");
			cell.text(value);
		});
	});
}