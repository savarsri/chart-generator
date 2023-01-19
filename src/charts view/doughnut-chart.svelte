<script>
  // @ts-nocheck

  import { Doughnut } from "svelte-chartjs";
  import downloadjs from "downloadjs";
  import html2canvas from "html2canvas";
  import { adjust } from "../functions.js";
  import Header from "../views/header.svelte";

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
    ArcElement
  );

  let data_visible = false;
  let index_labels,
    index_datasets,
    title = "Doughnut Chart",
    title_color = "#000000";

  let labels = ["Red", "Green", "Yellow", "Grey", "Dark Grey"];
  let datasets = [
    {
      label: "Dataset 1",
      data: [300, 50, 100, 40, 120],
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
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
  };

  const add_Dataset = () => {
    datasets = [
      ...datasets,
      {
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
      },
    ];
  };

  const add_Label = () => {
    labels = [...labels, "Blue"];
  };

  const delete_Label = () => {
    labels.splice(index_labels, 1);
    labels = labels;
  };

  const delete_Dataset = () => {
    datasets.splice(index_datasets, 1);
    datasets = datasets;
  };

  const download = async () => {
    const chart = document.getElementById("chart");
    if (!chart) return;
    const canvas = await html2canvas(chart);
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, title + ".png", "image/png");
  };

  const title_color_change = () => {
    document.getElementById("chart_title").style.color = title_color;
  };

  const hover_color_change = () => {
    datasets[index_datasets].hoverBackgroundColor[index_labels] = adjust(
      datasets[index_datasets].backgroundColor[index_labels],
      20
    );
  };
</script>

<main class="fullScreen">
  <Header title="Doughnut Chart" />
  <div>
    <div class="details">
      <div id="title">
        <fieldset>
          <legend>Details</legend>
          <div style="margin: 2%;">
            <label for="title_input">Title: </label>
            <input
              type="text"
              id="title_input"
              bind:value={title}
              maxlength="50"
              style="background-color: white; color:black"
            />
          </div>
          <div style="margin: 2%;">
            <label for="title_color_input">Color: </label>
            <input
              type="color"
              id="title_color_input"
              bind:value={title_color}
              on:change={title_color_change}
            />
          </div>
        </fieldset>
      </div>
      <div id="title">
        <fieldset>
          <legend>Data</legend>
          <div>
            <label for="set_data_button">Set Data: </label>
            <button
              id="set_data_button"
              class="primaryButton"
              on:click={setData}>Data</button
            >
          </div>
        </fieldset>
      </div>
      <div id="title">
        <fieldset style="flex-direction: row; justify-content:space-around">
          <legend>Options</legend>
          <button class="primaryButton" on:click={download}>Download</button>
          <a href="/">
            <button class="secondaryButton">Back</button>
          </a>
        </fieldset>
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
                {#each datasets as datasets, index}
                  <div>
                    <input type="text" bind:value={datasets.label} />
                    <button
                      on:click={() => {
                        index_datasets = index;
                        delete_Dataset();
                      }}>-</button
                    >
                  </div>
                {/each}
              </div>
              {#each labels as labels, i}
                <div class="label_Div">
                  <input type="text" bind:value={labels} />
                  <button
                    on:click={() => {
                      index_labels = i;
                      delete_Label();
                    }}>-</button
                  >
                  {#each datasets as datasets,ind}
                    <input
                      type="color"
                      id="data_color"
                      bind:value={datasets.backgroundColor[i]}
                      on:change={() => {
                        index_datasets = ind;
                        index_labels = i;
                        hover_color_change();
                    }}
                    />
                    <input type="text" bind:value={datasets.data[i]} />
                  {/each}
                </div>
              {/each}
              <button on:click={add_Label}>add label</button>
              <button on:click={add_Dataset}>add Dataset</button>
            </div>
          </div>
        </div>
      {/if}
    </div>
    <div class="vl" />
    <div id="chart">
      <h2 id="chart_title" class="chart_title">{title}</h2>
      <div>
        <Doughnut {data} options={{ responsive: true }} />
      </div>
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
  }

  main > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90%;
  }
  
    #chart {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        width: 70%;
        padding: 2%;
        background-color: rgb(255, 255, 255);
    }

    #chart > div {
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 85%;
        width: 100%;
    }

  .data_Div_Header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: aqua;
  }

  .data_Div_Body {
    overflow: auto;
  }

  .label_Div {
    display: flex;
    width: max-content;
    background-color: aqua;
    margin: 2%;
  }

  .label_Div > input {
    margin: 0% 1%;
  }

  .dataset_Div {
    display: flex;
    flex-direction: row;
    margin-left: 15%;
  }
</style>
