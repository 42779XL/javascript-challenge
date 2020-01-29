// UFO Level 1: Automatic Table and Date Search

// Assign the data from `data.js` to a descriptive variable
var ufoData = data;

// Get a reference to the html table 
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
var filterButton = d3.select("#filter-btn");
// Use D3 events listener to execute function
filterButton.on("click", function() {
// When filter button clicked, get input elements
    if (inputElement = d3.select("#date")) { 
  // Get the input value 
    var inputValue = inputElement.property("value");

    // Check input value
    console.log(inputValue);

    // Use fileter function to filter out the output of ufo data
    var filteredData = ufoData.filter(ufoData => ufoData.datetime === inputValue);
  }
  // Check if the selected input can be picked up outside of if section   
  // console.log(d3.select("#city"));
  
    else if (inputElement = d3.select("#city")) {
    var inputValue = inputElement.property("value");
    console.log(inputElement);
    // Check input value
    console.log(inputValue.toLowerCase());

    // Use fileter function to filter out the output of ufo data
    var filteredData = ufoData.filter(ufoData => ufoData.city === inputValue);
  }
   
  // Before use the filter again, need to drop the existing table value
  // remove any data from the ufo data table
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

