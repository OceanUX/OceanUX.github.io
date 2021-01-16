
// vertical bar chart with baseline
function drawVisualization() {
    var data = google.visualization.arrayToDataTable([
        ['Region of England', 'Current Rent', 'Possible afford Rent', 'Average Rent'],
        ['North East', 5270.4, 6698.47, 7070.9],
        ['North West', 5745.6, 7150.92, 7070.9],
        ['Yorkshire and the Humber', 6283.2, 7103.72, 7070.9],
        ['East Midlands', 6024, 7175.26, 7070.9],
        ['West Midlands', 5884.8, 7486.82, 7070.9],
        ['Eastern', 7771.2, 8038.92, 7070.9],
        ['London', 11505.6, 10263.16, 7070.9],
        ['South East', 8270.4, 8691.59, 7070.9],
        ['South West', 6883.2, 7747.49, 7070.9],
    ]);

    var options = {
        colors: ['#3bb2d0', '#3887be', '#fbb03b', '#f3b49f', '#f6c7b6'],
        backgroundColor: 'transparent',
        legend: { position: 'none', alignment: 'end', textStyle: { fontSize: 6 } },
        chartArea: { width: 350, left: 70 },
        vAxis: {
            title: 'Rent per annual ( £ ) '
        },
        seriesType: 'bars',
        series: { 2: { type: 'line' } } //the second key in array is show in line type
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
// bar chart
function drawMultSeries() {
    var data = google.visualization.arrayToDataTable([
        ['City', 'Work people (age 16-65)', 'Others', { role: 'annotation' }],
        ['North East', 1660539, 997370, ''],
        ['North West', 4542517, 2749576, ''],
        ['Yorkshire and the Humber', 3416898, 2062717, ''],
        ['East Midlands', 2983294, 1820855, ''],
        ['West Midlands', 3651170, 2249587, ''],
        ['Eastern', 3781756, 2419458, ''],
        ['London', 6014073, 2894008, ''],
        ['South East', 5616593, 3517032, ''],
        ['South West', 3382627, 2217108, ''],
    ]);

    var options = {
        title: "Working population base on region",
        isStacked: 'percent', //let bar to 100% present
        legend: { position: 'bottom', maxLines: 3 },
        chartArea: { width: 430, right: 20 },
        hAxis: {
            minValue: 0,
            ticks: [0, .3, .6, .9, 1] //to divide several section by vertical line
        },
        colors: ['#239ab9', '#cccccc',]
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_work'));
    chart.draw(data, options);

}
// vertical bar chart
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Region", "Average income", { role: "style" }],
        ["North East", 22328.2442748092, "#50667f"],
        ["North West", 23836.389280677, "#8a8acb"],
        ["Yorkshire and the Humber", 23679.060665362, "#3bb2d0"],
        ["East Midlands", 23917.5257731959, "#007ea3"],
        ["West Midlands", 24956.0632688928, "#ed6498"],
        ["Eastern", 26796.4071856287, "#41afa5"],
        ["London", 34210.5263157895, "#e0d86e"],
        ["South East", 28971.9626168224, "#ff9900"],
        ["South West", 25824.9641319943, "#e55e5e"]
    ]);

    var options = {
        title: "Average income based on region",
        subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        bar: { groupWidth: "50%" },
        legend: { position: "none" },
        chartArea: { width: 450, right: 20 },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("chart_income"));
    chart.draw(data, options);
}

// bubble chart
function drawSeriesChart() {
    var data = google.visualization.arrayToDataTable([
        ['ID', 'Average income', 'Current Rent', 'Pressure of rent affordable', 'Proportion of income'],
        ['North East', 22328.2442748092, 5270.4, 'Low', 0.2360],
        ['North West', 23836.389280677, 5745.6, 'Low', 0.2410],
        ['Yorkshire and the Humber', 23679.060665362, 6283.2, 'Low', 0.2410],
        ['East Midlands', 23917.5257731959, 6024, 'Medium', 0.2519],
        ['West Midlands', 24956.0632688928, 5884.8, 'Low', 0.2358],
        ['Eastern', 26796.4071856287, 7771.2, 'Medium', 0.2900],
        ['London', 34210.5263157895, 11505.6, 'High', 0.3363],
        ['South East', 28971.9626168224, 8270.4, 'Medium', 0.2855],
        ['South West', 25824.9641319943, 6883.2, 'Medium', 0.2665]
    ]);

    var options = {
        title: 'Correlation between rent per year, avarage income and related percentage',
        hAxis: { title: 'Average income', ticks: [20000, 25000, 30000, 35000] },
        vAxis: { title: 'Current Rent', ticks: [5000, 6000, 7070.9, 8000, 9000, 10000, 11000, 12000, 13000], baseline: 7070, baselineColor: '#47bc00', gridlines: { color: "#fff" } },
        bubble: { textStyle: { fontSize: 9, color: 'transparent', auraColor: 'none' } },
        colorAxis: {
            minValue: 0.2360,
            colors: ['#e0d86e', '#ff9900', '#e55e5e'],
            legend: { position: 'none' }
        },
    };

    var chart = new google.visualization.BubbleChart(document.getElementById('chart_rent'));
    chart.draw(data, options);
}