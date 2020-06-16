export const op = {
    "title": {
        "text": "Top 10 States with Most Number of Cases",
        "align": "center",
        "x": 10
    },
    "subtitle": {
        "text": "",
        "align": "left",
        "x": 10
    },
    "colors": [
        "#e91e63",
        "#FFF263",
        "#6AF9C4",
        "#ff5722",
        null
    ],
    "legend": {
        "align": "left",
        "verticalAlign": "top",
        "itemMarginBottom": 10,
        "x": 0,
        "symbolRadius": 2,
        "floating": false
    },
    "plotOptions": {
        "series": {
            "marker": {
                "enabled": false
            },
            "lineWidth": 3,
            "animation": false
        }
    },
    "chart": {
        "type": "column",
        "polar": false,
        "zoomType": "xy",
        "width": null,
        "borderWidth": 1,
        "borderRadius": 10
    },
    "series": [
        {
        "name":"state",
            "data": [],
            "turboThreshold": 0,
            "_colorIndex": 0,
            "_symbolIndex": 0,
            "type": "column"
        },
        {
            "data": [],
            "turboThreshold": 0,
            "_colorIndex": 1,
            "_symbolIndex": 0,
            "type": "column"
        }
    ],
    "yAxis": {
        "title": {
            "text": "Count"
        }
    },
    "xAxis": {
        "opposite": false,
        "reversed": false
    },
    "data": {
        "csv": "State;Cases;null\nAndaman and Nicobar Islands;38;\nAndhra Pradesh;6163;\nArunachal Pradesh;91;\nAssam;4049;\nBihar;6470;\nChandigarh;352;\nChhattisgarh;1662;\nDadra and Nagar Haveli and Daman and Diu;36;\nDelhi;41182;\nGoa;564;\nGujarat;23544;\nHaryana;7208;\nHimachal Pradesh;518;\nJammu and Kashmir;5041;\nJharkhand;1745;\nKarnataka;7000;\nKerala;2461;\nLadakh;549;\nLakshadweep;0;\nMadhya Pradesh;10802;\nMaharashtra;107958;\nManipur;458;\nMeghalaya;44;\nMizoram;112;\nNagaland;168;\nOdisha;3909;\nPuducherry;194;\nPunjab;3140;\nRajasthan;12694;\nSikkim;68;\nTamil Nadu;44661;\nTelangana;4974;\nTripura;1076;\nUttarakhand;1819;\nUttar Pradesh;13615;\nWest Bengal;11087;",
        "seriesMapping": [
            {
                "x": 0,
                "y": 1
            },
            {
                "x": 0,
                "y": 2
            }
        ]
    },
}