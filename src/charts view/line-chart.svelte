<script>
    import { Line } from "svelte-chartjs";
    import downloadjs from "downloadjs";
    import html2canvas from "html2canvas";

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
    import Header from "../views/header.svelte";

    ChartJS.register(
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale
    );

    let data_visible = false,
        index_labels,
        index_datasets,
        title = "Line Chart",
        title_color = "#000000";

    let labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
    ];

    let datasets = [
        {
            label: "Dataset 1",
            fill: true,
            lineTension: 0.3,
            borderColor: "#CD829E",
            borderCapStyle: "butt",
            borderDash: [0],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBackgroundColor: "#CD829E",
            pointHoverBackgroundColor: "#ffffff",
            pointHitRadius: 10,
            pointRadius: 5,
            data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
            label: "Dataset 2",
            fill: true,
            lineTension: 0.3,
            borderColor: "#231A88",
            borderCapStyle: "butt",
            borderDash: [0],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBackgroundColor: "#231A88",
            pointHoverBackgroundColor: "#ffffff",
            pointRadius: 5,
            pointHitRadius: 10,
            data: [28, 48, 40, 19, 86, 27, 90],
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
                fill: true,
                lineTension: 0.3,
                borderColor: "#FF4E00",
                borderCapStyle: "butt",
                borderDash: [0],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBackgroundColor: "#FF4E00",
                pointHoverBackgroundColor: "#ffffff",
                pointRadius: 5,
                pointHitRadius: 10,
                data: [68, 41, 20, 39, 66, 47, 57],
            },
        ];
    };

    const add_Label = () => {
        labels = [...labels, "September"];
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
        downloadjs(dataURL, title+".png", "image/png");
    };

    const title_color_change = () => {
        document.getElementById("chart_title").style.color = title_color;
    };
</script>

<main class="fullScreen">
    <Header title="Line Chart" />
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
                        <button id="set_data_button" class="primaryButton" on:click={setData}>Data</button>
                    </div>
                </fieldset>
            </div>
            <div id="title">
                <fieldset style="flex-direction: row; justify-content:space-around" >
                    <legend>Options</legend>
                    <button class="primaryButton" on:click={download}
                        >Download</button
                    >
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
                            <button class="secondaryButton" on:click={setData}
                                >X</button
                            >
                        </div>
                        <div class="data_Div_Body">
                            <div class="dataset_Div">
                                {#each datasets as datasets, index}
                                    <div>
                                        <input
                                            type="text"
                                            bind:value={datasets.label}
                                        />
                                        <button
                                            on:click={() => {
                                                index_datasets = index;
                                                delete_Dataset();
                                            }}>-</button
                                        >
                                        <input
                                            type="color"
                                            id="data_color"
                                            bind:value={datasets.borderColor}
                                        />
                                        <input
                                            type="color"
                                            id="point_color"
                                            bind:value={datasets.pointBackgroundColor}
                                        />
                                        <input
                                            type="range"
                                            min="0"
                                            max="20"
                                            bind:value={datasets.borderDash[0]}
                                        />
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
                                    {#each datasets as datasets}
                                        <input
                                            type="text"
                                            bind:value={datasets.data[i]}
                                        />
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
        <div class="vl"></div>
        <div id="chart">
            <h2 id="chart_title" class="chart_title">{title}</h2>
            <div>
                <Line {data} options={{ responsive: true }} />
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
</style>
