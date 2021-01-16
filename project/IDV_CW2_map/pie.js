
// d3tool http://d3pie.org/
function pie() {


    var pie = new d3pie("pieChart", {
        "header": {
            "title": {
                "text": "Population",
                "fontSize": 24,
                "font": "courier"
            },
            "subtitle": {
                "text": "The proportion of region ",
                "color": "#999999",
                "fontSize": 8,
                "font": "courier"
            },
            "location": "pie-center",
            "titleSubtitlePadding": 10
        },
        "footer": {
            "text": "",
            "color": "#999999",
            "fontSize": 10,
            "font": "open sans",
            "location": "bottom-left"
        },
        "size": {
            "canvasHeight": 280,
            "canvasWidth": 420,
            "pieInnerRadius": "94%",
            "pieOuterRadius": "78%"
        },
        "data": {
            "sortOrder": "label-desc",
            "content": [
                {
                    "label": "North East",
                    "value": 0.0475504153854148,
                    "color": "#50667f"
                },
                {
                    "label": "North West",
                    "value": 0.130505238906619,
                    "color": "#8a8acb"
                },
                {
                    "label": "Yorkshire and the Humber",
                    "value": 0.097989677,
                    "color": "#3bb2d0"
                },
                {
                    "label": "East Midlands",
                    "value": 0.08579135,
                    "color": "#007ea3"
                },
                {
                    "label": "West Midlands",
                    "value": 0.105371558,
                    "color": "#ed6498"
                },
                {
                    "label": "Eastern",
                    "value": 0.110904265,
                    "color": "#41afa5"
                },
                {
                    "label": "London",
                    "value": 0.158667592,
                    "color": "#e0d86e"
                },
                {
                    "label": "South East",
                    "value": 0.163267135,
                    "color": "#ff9900"
                },
                {
                    "label": "South West",
                    "value": 0.087421176,
                    "color": "#e55e5e"
                }
            ]
        },
        "labels": {
            "outer": {
                "format": "label-percentage1",
                "pieDistance": 20
            },
            "inner": {
                "format": "none"
            },
            "mainLabel": {
                "fontSize": 11
            },
            "percentage": {
                "color": "#999999",
                "fontSize": 11,
                "decimalPlaces": 0
            },
            "value": {
                "color": "#cccc43",
                "fontSize": 11
            },
            "lines": {
                "enabled": true,
                "color": "#777777"
            },
            "truncation": {
                "enabled": true
            }
        },
        "effects": {
            "pullOutSegmentOnClick": {
                "effect": "linear",
                "speed": 200,
                "size": 8
            }
        },
        "misc": {
            "colors": {
                "segmentStroke": "#ffffff"
            },
            "pieCenterOffset": {
                "x": -30
            }
        }
    });
}
