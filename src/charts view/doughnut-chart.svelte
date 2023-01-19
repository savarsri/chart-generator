<script>
    // @ts-nocheck
  
    import { Doughnut } from 'svelte-chartjs';
  
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
      ArcElement,
    } from "chart.js";
    import Header from '../views/header.svelte';
  
    ChartJS.register(
      LinearScale,
      CategoryScale,
      BarElement,
      PointElement,
      LineElement,
      Legend,
      Tooltip,
      LineController,
      BarController,
      ArcElement,
    );
  
    let data_visible = false;
    let index_labels, index_datasets;

    let labels = ["Red", "Green", "Yellow", "Grey", "Dark Grey"];
    let datasets = [
        {
            label:"Dataset 1",
            data: [300, 50, 100, 40, 120],
            backgroundColor: [
                "#F7464A",
                "#46BFBD",
                "#FDB45C",
                "#949FB1",
                "#4D5360",
            ],
            hoverBackgroundColor: [
                "#FF5A5E",
                "#5AD3D1",
                "#FFC870",
                "#A8B3C5",
                "#616774",
            ],
        },
    ];

    $: data = {
        labels,
        datasets,
    };
  
    const setData = () => {
      data_visible = !data_visible;
    }
  
    const add_Dataset = () => {
      datasets = [...datasets,{
            label: "New Dataset",
            data: [300, 50, 100, 40, 120],
            backgroundColor: [
                "#F7464A",
                "#46BFBD",
                "#FDB45C",
                "#949FB1",
                "#4D5360",
            ],
            hoverBackgroundColor: [
                "#FF5A5E",
                "#5AD3D1",
                "#FFC870",
                "#A8B3C5",
                "#616774",
            ],
        },]
    }
  
    const add_Label = () => {
      labels = [...labels,"Blue"];
    }
  
    const delete_Label = () => {
      labels.splice(index_labels,1);
      labels = labels;
    }
  
    const delete_Dataset = () => {
      datasets.splice(index_datasets,1);
      datasets = datasets;
    }
  
  </script>
  
  <main class="fullScreen">
    <Header title="Doughnut Chart"/>
    <div>
      <div class="details">
        <button on:click={setData}>Data</button>
      </div>
      {#if data_visible}
        <div class="data_Div">
          <div>
            <div class="data_Div_Header">
              <h3>Chart data</h3>
              <button class="secondaryButton" on:click={setData}>X</button>
            </div>
            <div class="data_Div_Body">
              <div class="dataset_Div">
                {#each datasets as datasets , index }
                <div>
                  <input type="text" bind:value={datasets.label}>
                  <button on:click={()=>{index_datasets=index; delete_Dataset();}}>-</button>
                </div>
                {/each}
              </div>
                {#each labels as labels , i}
                  <div class="label_Div">
                    <input type="text" bind:value={labels}>
                    <button on:click={()=>{index_labels=i; delete_Label();}}>-</button>
                    {#each datasets as datasets}
                    <input type="color" id="data_color" bind:value={datasets.backgroundColor[i]} />
                      <input type="text" bind:value={datasets.data[i]}> 
                    {/each}
                  </div>
                {/each}
                <button on:click={add_Label}>add label</button>
                <button on:click={add_Dataset}>add Dataset</button>
            </div>
          </div>
        </div>
      {/if}
      <div class="chart">
          <Doughnut {data} options={{ responsive: true }} />
      </div>
    </div>
  </main>
  
  <style>
    main {
    display: flex;
    flex-direction: column;
    background: lime;
  }

  main>div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 89%;
  }
  
    .details {
      height: 100%;
      width: 30%;
      background-color: white;
    }
  
    .chart {
      margin: 5%;
      width: 70%;
      height: 95%;
      display: flex;
      justify-content: center;
      background-color: white;
    }
  
    .data_Div_Header{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      background-color: aqua;
    }
  
    .data_Div_Body{
      overflow: auto;
    }
  
    .label_Div{
      display: flex;
      width: max-content;
      background-color: aqua;
      margin: 2%;
    }
  
    .label_Div > input{
      margin: 0% 1%;
    }
  
    .dataset_Div{
      display: flex;
      flex-direction: row;
      margin-left: 15%;
    }
  
  </style>
  