<script>
    import { Pie } from 'svelte-chartjs';
  
    import {
      Chart as ChartJS,
      Title,
      Tooltip,
      Legend,
      ArcElement,
      CategoryScale,
    } from 'chart.js';
  
    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

    export let labels = ["January", "February", "March", "April", "May"];
    export let datasets = [
    {
      label: "Blueberry",
      backgroundColor: "rgb(53, 162, 235)",
      data: labels.map(() => Math.round(Math.random() * 1000)),
    },
    {
      label: "Apples",
      backgroundColor: "rgb(237, 37, 78)",
      data: labels.map(() => Math.round(Math.random() * 1000)),
    },
  ];

  export let data = {
    labels,
    datasets,
  };

  </script>
  
  <Pie {data} options={{ responsive: true }} />
  