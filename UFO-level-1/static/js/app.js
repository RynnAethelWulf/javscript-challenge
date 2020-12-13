// from data.js
let tableData = data;

// YOUR CODE HERE!
let form = d3.select("form");
let button = d3.select("#filter-btn");

// For Selection
d3.selectAll("#selDataset").on("change", updateTable);

function updateTable() {

    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
    // console.log(dataset);
    // let filteredDataCountry = tableData.filter(ele => ele.country === dataset);
    // console.log(filteredDataCountry)
    // tbody.html("");
    // filteredDataCountry.forEach((ele) => {
    //     let table_row = tbody.append("tr");
    //     Object.entries(ele).forEach(([key, value]) => {
    //         table_row.append("td").text(value);
    //     });


    // });

    return dataset

}


// Output
let tbody = d3.select("tbody");

button.on("click", filterdata);
form.on("submit", filterdata);

function filterdata() {
    d3.event.preventDefault();
    let dropDownTag;
    updateTable() ? dropDownTag = updateTable() : dropDownTag = "datetime";

    // let dropDownTag = "datetime";

    let inputData = d3.select("#datetime").property("value");
    // let inputData = datetime.value();

    let filteredData = tableData.filter(ele => ele[dropDownTag] === inputData);
    console.log(filteredData)
    tbody.html("");
    filteredData.forEach((ele) => {
        let table_row = tbody.append("tr");
        Object.entries(ele).forEach(([key, value]) => {
            table_row.append("td").text(value);
        });


    });

}