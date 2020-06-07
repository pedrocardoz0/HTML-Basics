google.charts.load('current', {'packages':['corechart']})
google.charts.setOnLoadCallback(firstGraph)
google.charts.setOnLoadCallback(secondGraph)




function firstGraph() {
    var data = new google.visualization.DataTable()
    data.addColumn('string', 'Topping')
    data.addColumn('number', 'Slices')

    data.addRows([
        ['Front-End', 2],
        ['Back-End', 3],
        ['Full-Stack', 4],
    ])

    var options = {
        title: 'First Graph',
        width: 400,
        height: 300,
    }

    var chart = new google.visualization.PieChart(document.getElementById('first'))
    chart.draw(data, options)
}

function secondGraph() {
    var data2 = new google.visualization.DataTable()
    data2.addColumn('string',  'Topping')
    data2.addColumn('number', 'Slices')

    data2.addRows([
        ['Sp', 40],
        ['Rj', 30],
        ['Pr', 30],
    ])

    var options2 = {
        title: "Casos de corona vírus",
        height: 300,
        width: 400,
    }

    var chart2 = new google.visualization.PieChart(document.getElementById('second'))
    chart2.draw(data2, options2)
}