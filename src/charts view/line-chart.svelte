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
    let index_labels, index_datasets;

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
            label: "Dataset 2",
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
                backgroundColor: "rgba(184, 185, 210, .3)",
                borderColor: "rgb(255, 78, 0)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBackgroundColor: "rgb(255, 78, 0)",
                pointHoverBackgroundColor: "rgb(255, 255, 255)",
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
</script>

<main class="fullScreen">
    <div class="details">
        <button on:click={setData}>Data</button>
    </div>
    {#if data_visible}
        <div class="data_Div">
            <div>
                <div class="data_Div_Header">
                    <h3>Chart data</h3>
                    <button class="secondaryButton" on:click={setData}>X</button
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
