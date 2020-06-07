google.charts.load('current', {'packages':['corechart', 'line', 'bar']})
google.charts.setOnLoadCallback(pieChart)
google.charts.setOnLoadCallback(lineChart)
google.charts.setOnLoadCallback(barChart)


function pieChart() {
    var data = new google.visualization.DataTable()
    data.addColumn('string', 'Topping')
    data.addColumn('number', 'Slices')

    data.addRows([
        ['Front-End', 2],
        ['Back-End', 3],
        ['Full-Stack', 4],
    ])

    var options = {
        title: 'Pie Graph',
        width: 500,
        height: 400,
    }

    var chart = new google.visualization.PieChart(document.getElementById('pie-chart'))
    chart.draw(data, options)
}

function lineChart() {
    var data2 = new google.visualization.DataTable()
    data2.addColumn('number', 'Day')
    data2.addColumn('number', 'Guardians of the Galaxy')
    data2.addColumn('number', 'The Avengers')
    data2.addColumn('number', 'Transformers: Age of Extinction')

    data2.addRows([
        [1,  37.8, 80.8, 41.8],
        [2,  30.9, 69.5, 32.4],
        [3,  25.4,   57, 25.7],
        [4,  11.7, 18.8, 10.5],
        [5,  11.9, 17.6, 10.4],
        [6,   8.8, 13.6,  7.7],
        [7,   7.6, 12.3,  9.6],
        [8,  12.3, 29.2, 10.6],
        [9,  16.9, 42.9, 14.8],
        [10, 12.8, 30.9, 11.6],
        [11,  5.3,  7.9,  4.7],
        [12,  6.6,  8.4,  5.2],
        [13,  4.8,  6.3,  3.6],
        [14,  4.2,  6.2,  3.4]
      ])

      var options2 = {
          
        chart:{
          title: "Line graph",
          subtitle: "More infomations"
      },
      width:500,
      height: 400,
    }

    var chart2 = new google.charts.Line(document.getElementById('line-chart'));
    chart2.draw(data2, google.charts.Line.convertOptions(options2))
}


function barChart() {
    var data = google.visualization.arrayToDataTable([
        ['City', 'COVID-19 Cases'],
        ['brasil', 400],
        ['São Paulo', 600],
        ['Curitiba', 800],
    ])

    var options = {
        title: 'COVID-19 Cases (Number Infected)',
        chartArea: {width:'50%'},
        hAxis: {
            title: "Total Population",
            minValue: 0,
        },
        vAxis: {
            title: 'City'
        }
    }

    var chart3 = new google.visualization.BarChart(document.getElementById('bar-chart'))
    chart3.draw(data, options)
}