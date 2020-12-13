// from data.js
let tableData = data;

// YOUR CODE HERE!
let form = d3.select("form");
let button = d3.select("#filter-btn");

// 
// Output
let tbody = d3.select("tbody");


button.on("click", filterdata);
form.on("submit", filterdata);

function filterdata() {

    d3.event.preventDefault();
    let inputData = d3.select("#datetime").property("value");;
    // let inputData = datetime.value();
    let filteredData = tableData.filter(ele => ele.datetime === inputData);
    console.log(filteredData)

    filteredData.forEach((ele) => {
        let table_row = tbody.append("tr");
        Object.entries(ele).forEach(([key, value]) => {
            table_row.append("td").text(value);
        });


    });

}