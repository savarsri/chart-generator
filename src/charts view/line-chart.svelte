<script>
    import { Line } from "svelte-chartjs";

    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale,
    } from "chart.js";

    ChartJS.register(
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale
    );

    let data_visible = false;

    const data = {
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
        ],
        datasets: [
            {
                label: "My First dataset",
                fill: true,
                lineTension: 0.3,
                backgroundColor: "rgba(225, 204,230, .3)",
                borderColor: "rgb(205, 130, 158)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBackgroundColor: "rgb(205, 130, 158)",       
                pointHoverBackgroundColor: "rgb(255, 255, 255)",               
                pointHitRadius: 10,
                pointRadius: 5,
                data: [65, 59, 80, 81, 56, 55, 40],
            },
            {
                label: "My Second dataset",
                fill: true,
                lineTension: 0.3,
                backgroundColor: "rgba(184, 185, 210, .3)",
                borderColor: "rgb(35, 26, 136)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBackgroundColor: "rgb(35, 26, 136)",
                pointHoverBackgroundColor: "rgb(255, 255, 255)",
                pointRadius: 5,
                pointHitRadius: 10,
                data: [28, 48, 40, 19, 86, 27, 90],
            },
        ],
    };

    const setData = () => {
        data_visible = !data_visible;
    };
</script>

<main class="fullScreen">
    <div class="details">
        <button on:click={setData}>Data</button>
      </div>
    <div class="chart">
        <Line {data} options={{ responsive: true }} />
    </div>
</main>

<style>
    main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: lime;
  }

  .details {
    height: 100%;
    width: 30%;
    background-color: white;
  }

  .chart {
    margin: 5%;
    width: 70%;
    background-color: white;
  }
</style>
