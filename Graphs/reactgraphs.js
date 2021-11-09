<!DOCTYPE html>
<html>
  <head>
 <title>Pie with Dropdown and JSON</title>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

<style>
    .chart {
    width: 100%;
    }

    #piechart {
    height: 600px;
    }

</style>
</head>
<body>

  <form id="form1" name="form1" onchange="drawChart()" >

     <select id="thedropdown">
     <option value="male">Male</option>
     <option value="female">Female</option>
     </select>

  </form>

    <div id="piechart" class="chart"></div>

   <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);


    function drawChart() {
     mygender = document.getElementById("thedropdown").value;

     info = [{gender: "male", work: 40, eat: 8, commute: 4, tv: 3, sleep: 40},
     {gender: "female", work: 45, eat: 9, commute: 3, tv: 5, sleep: 50}
     ];


    for(i=0; i<info.length; i++) {
    if(mygender == info[i].gender) {
       work = info[i].work;
       eat = info[i].eat;
       commute = info[i].commute;
       tv = info[i].tv;
       sleep = info[i].sleep;

    }// end if
    } // end for

    var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Week'],
          ['Work',     work],
          ['Eat',      eat],
          ['Commute',  commute],
          ['Watch TV', tv],
          ['Sleep',    sleep]
        ]);
        var options = {
          title: 'Weekly Activities',
          colors: ['orange','#00cc33', 'pink', 'yellow','lightblue']
        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }

    // this function makes the chart responsive; include the name of the proper drawChart function; if more than one chart on page, include additional statements for each drawChart function
    window.onresize = function() {
    drawChart();
    }

    </script>
</body>
</html>
