<script>
// @ts-nocheck


  import {
    Chart,
    getDatasetAtEvent,
    getElementAtEvent,
    getElementsAtEvent,
  } from 'svelte-chartjs';

  import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    BarElement,
    PointElement,
    LineElement,
    CategoryScale,
    LinearScale,
    LineController,
    BarController,
  } from 'chart.js';

  ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
  );


  let len = 5;
  let labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  $: labels.length = len;

let data = {
  labels,
    datasets: [
    {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: 'rgb(53, 162, 235)',
      data: labels.map(() => Math.random() * 1000),
    },
    {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: 'rgb(53, 162, 235)',
      data: labels.map(() => Math.random() * 1000),
    },
    {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: 'rgb(53, 162, 235)',
      data: labels.map(() => Math.random() * 1000),
    },
    {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: 'rgb(53, 162, 235)',
      data: labels.map(() => Math.random() * 1000),
    },
  ],
};


function decrement(){
    len = document.getElementById("myRange").value;
    data=data;
    console.log(len);
}

  </script>
  
     
    <main class="fullScreen">
        <div class="details">
            <input id="inoutText" type="text" placeholder="Data 1">
            <input id="myRange" type="range" min="1" max="10" value="5" on:input={decrement}>
        </div>
        <div class="chart">
            <Chart type="bar" {data}/>
        </div>
    </main>


  <style>

    main{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: lime;
    }

    .details{
        height: 100%;
        width: 30%;
        background-color: white;
    }

    .chart{
        margin: 5%;
        width: 70%;
        background-color: white;
    }
  </style>