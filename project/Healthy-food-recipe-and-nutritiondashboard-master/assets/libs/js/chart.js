google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
    var data = google.visualization.arrayToDataTable([
        ['City', 'Current diet beginning 2020', 'Planned diet by end of 2020'],
        ['No specific diet', 45721918, 40429180],
        ['Vegetarian', 3432419, 5947780],
        ['Vegan', 1100470, 2174739],
        ['Pescetarian', 2148537, 3851646]
    ]);

    var options = {
        titleTextStyle: {
            color: 'black',
            fontSize: 18
        },
        title: 'UK Population Diet Preferences in 2020',
        colors: ['#6d36f7', '#b99aff'],
        chartArea: { width: '50%' },
        // width: ,
        height: 400,
        hAxis: {
            title: 'Total Population',
            minValue: 0,
            ticks: [10000000, 30000000, 50000000]
        },
        vAxis: {
            title: 'Type of diet'
        },
    };
    // draw diet comparison bar chart
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

// draw diet price comparison bar chart
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Diet", "Yearly Cost in £GBP", { role: "style" }],
        ["Vegan", 2073, "6d36f7"],
        ["Normal balanced diet", 2002, "7c40ff"],
        ["Pescetarian", 1973, "9b6dff"],
        ["Vegetarian", 1545, "b99aff"]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2]);

    var options = {
        titleTextStyle: {
            color: 'black',
            fontSize: 18
        },
        title: "Yearly cost of various diet types per person",
        // width: 700,
        height: 400,
        colors: ['#6d36f7'],
        bar: { groupWidth: "80%" },
        legend: { "position": "bottom" },
        hAxis: {
            title: 'Yearly Cost in £ (GBP)',
            minValue: 0,
            ticks: [500, 1000, 1500, 2000, 2500]
        },
        vAxis: {
            title: 'Type of diet'
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById("barchart_dietprice"));
    chart.draw(view, options);
}
google.load('visualization', '1', {
    packages: ['corechart', 'bar']
});
google.setOnLoadCallback(getData);


function getData() {
    //by crafully reading and following the documentation at https://developers.google.com/chart/interactive/docs/querylanguage#group-by
    // we can understand that in order to ask our query to the stylesheet we need to insert the key of the google spreadsheet (FOUND inside its URL),
    //and instead of specifying the range we want to see in the graph, we set the query in the data source by adding to the URL
    // /gviz/tq?tq=YOUR_QUERY_STRING to get your final query string
    // I used the encoder to select B, count(B) group by B in order to get my data.
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1oRcF_ac5NOFTjxrzKgLYlrMd-j5NjGU04zS5MfbPh8I/gviz/tq?tq=select%20B%2C%20count(B)%20group%20by%20B');
    // Send the query with a callback function, to be executed when the data is reeady
    // drawBasic will get passed the response object with the data in it
    query.send(drawBasic);
}


function drawBasic(response) {
    // this functions takes the data from the responses on the spreadsheet.
    // From here on the process to modify the graph is the same as the chart with already embedded data.
    var data = response.getDataTable();

    var options = {
        title: 'What type of diet are you going to have in 2020? ',
        subtitle: 'from the  22nd till 29th of December 2019',
        height: 300,
        colors: ['#6d36f7'],
        legend: { position: "none" },
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_poll'));

    chart.draw(data, options);
}