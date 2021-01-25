am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);

    var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

    networkSeries.data = [{
        name: 'Spring',
        children: [{
            name: 'rhubarb', value: 1
        }, {
            name: 'asparagus', value: 1
        }, {
            name: 'cauliflower', value: 1
        }, {
            name: 'cucumber', value: 1
        }, {
            name: 'jersey', value: 1
        }, {
            name: 'potatoes', value: 1
        }, {
            name: 'sprouting', value: 1
        }, {
            name: 'broccoli', value: 1
        }, {
            name: 'radishes', value: 1
        }, {
            name: 'savoy', value: 1
        }, {
            name: 'sorrel', value: 1
        }, {
            name: 'spinach', value: 1
        }, {
            name: 'greens', value: 1
        }, {
            name: 'onions', value: 1
        }, {
            name: 'watercress', value: 1
        }]

    }, {
        name: 'Summer',
        children: [{
            name: 'blueberries', value: 1
        }, {
            name: 'currants', value: 1
        }, {
            name: 'elderflower', value: 1
        }, {
            name: 'loganberries', value: 1
        }, {
            name: 'currants', value: 1
        }, {
            name: 'elderflower', value: 1
        }, {
            name: 'loganberries', value: 1
        }, {
            name: 'plums', value: 1
        }, {
            name: 'rasberries', value: 1
        }, {
            name: 'strawberries', value: 1
        }, {
            name: 'tayberries', value: 1
        }, {
            name: 'aubergine', value: 1
        }, {
            name: 'beetroot', value: 1
        }, {
            name: 'beans', value: 1
        }, {
            name: 'broccoli', value: 1
        }, {
            name: 'carrots', value: 1
        }, {
            name: 'courgettes', value: 1
        }, {
            name: 'cucumber', value: 1
        }, {
            name: 'fennel', value: 1
        }, {
            name: 'peas', value: 1
        }, {
            name: 'garlic', value: 1
        }, {
            name: 'lettuce', value: 1
        }, {
            name: 'leaves', value: 1
        }, {
            name: 'potatoes', value: 1
        }, {
            name: 'radishes', value: 1
        }, {
            name: 'rocket', value: 1
        }, {
            name: 'onions', value: 1
        }, {
            name: 'sorrel', value: 1
        }, {
            name: 'tomatoes', value: 1
        }, {
            name: 'watercress', value: 1
        }]
    }, {
        name: 'Autumn',
        children: [{
            name: 'apples', value: 1
        }, {
            name: 'blackberries', value: 1
        }, {
            name: 'damsons', value: 1
        }, {
            name: 'elderberries', value: 1
        }, {
            name: 'pears', value: 1
        }, {
            name: 'plums', value: 1
        }, {
            name: 'quince', value: 1
        }, {
            name: 'sloes', value: 1
        }, {
            name: 'beetroot', value: 1
        }, {
            name: 'carrot', value: 1
        }, {
            name: 'celeriac', value: 1
        }, {
            name: 'fennel', value: 1
        }, {
            name: 'mushrooms', value: 1
        }, {
            name: 'kale', value: 1
        }, {
            name: 'leeks', value: 1
        }, {
            name: 'lettuce', value: 1
        }, {
            name: 'marrow', value: 1
        }, {
            name: 'potatoes', value: 1
        }, {
            name: 'pumpkin', value: 1
        }, {
            name: 'rocket', value: 1
        }, {
            name: 'sorrel', value: 1
        }, {
            name: 'squashes', value: 1
        }, {
            name: 'sweetcorn', value: 1
        }, {
            name: 'tomatoes', value: 1
        }, {
            name: 'watercress', value: 1
        }]
    }, {
        name: 'Winter',
        children: [{
            name: 'apples', value: 1
        }, {
            name: 'pears', value: 1
        }, {
            name: 'beetroot', value: 1
        }, {
            name: 'brussels', value: 1
        }, {
            name: 'cabbage', value: 1
        }, {
            name: 'cauliflower', value: 1
        }, {
            name: 'celeriac', value: 1
        }, {
            name: 'chicory', value: 1
        }, {
            name: 'fennel', value: 1
        }, {
            name: 'artichokes', value: 1
        }, {
            name: 'kale', value: 1
        }, {
            name: 'leeks', value: 1
        }, {
            name: 'parsnips', value: 1
        }, {
            name: 'potatoes', value: 1
        }, {
            name: 'cabbage', value: 1
        }, {
            name: 'swede', value: 1
        }, {
            name: 'turnips', value: 1
        }]

    }];

    networkSeries.dataFields.linkWith = "linkWith";
    networkSeries.dataFields.name = "name";
    networkSeries.dataFields.id = "name";
    networkSeries.dataFields.value = "value";
    networkSeries.dataFields.children = "children";
    networkSeries.links.template.distance = 1;
    networkSeries.nodes.template.tooltipText = "{name}";
    networkSeries.nodes.template.fillOpacity = 1;
    networkSeries.nodes.template.outerCircle.scale = 1;

    networkSeries.nodes.template.label.text = "{name}"
    networkSeries.fontSize = 8;
    networkSeries.nodes.template.label.hideOversized = true;
    networkSeries.nodes.template.label.truncate = true;
    networkSeries.minRadius = am4core.percent(2);
    networkSeries.manyBodyStrength = -5;
    networkSeries.links.template.strokeOpacity = 0;

}); // end am4core.ready()