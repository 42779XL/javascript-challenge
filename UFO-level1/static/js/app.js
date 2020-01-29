// UFO Level 1: Automatic Table and Date Search

// Assign the data from `data.js` to a descriptive variable
var ufoData = data;

// Get a reference to the html table body
var tbody = d3.select("tbody");

// Populate table body row by row
// Loop through each ufo object data from ufo dataset provided
ufoData.forEach(ufo => {
  // Use d3 append function to add rows for the table
  var row = tbody.append("tr");
  // Add ufo data to the table, one cell at a time
  Object.entries(ufo).forEach(([key, value]) => {
    var cell = row.append("td");
  // Use d3 to update each cell's text with ufo data values (Date, City, State,......)
  cell.text(value);
  });
});

// Use html form to listen for events and search through each input to find the rows that match user input
// Select the button
var button = d3.select("#filter-btn");
// Use D3 events listener to execute a function
button.on("click", function() {
  // When button clicked, get input elements
  var inputElement = d3.select("#date");
  // Get input value 
  var inputValue = inputElement.property("value");
  //  Use fileter function to get filtered value from specific date
  var filteredData = ufoData.filter(ufoData => ufoData.datetime === inputValue);
  
  // Before check the filtered values, have to drop the existing table value
  tbody.html("");
  // Then populate filtered table body, row by row
  filteredData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
  });
});

// Refresh table for next filtering
var refeshButton = d3.select("#refresh-btn");
refeshButton.on("click", function() {
  var tbody = d3.select("tbody");
  // Make sure before repopulate refreshed table
  tbody.html("");
  ufoData.forEach(ufo => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    });
  });
});
