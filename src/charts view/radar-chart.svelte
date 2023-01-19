<script>
    import { Radar } from "svelte-chartjs";

    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        PointElement,
        RadialLinearScale,
        LineElement,
    } from "chart.js";
    import Header from "../views/header.svelte";

    ChartJS.register(
        Title,
        Tooltip,
        Legend,
        PointElement,
        RadialLinearScale,
        LineElement
    );

    let data_visible = false;
    let index_labels, index_datasets;

    let labels = [
        "Eating",
        "Drinking",
        "Sleeping",
        "Designing",
        "Coding",
        "Cycling",
        "Running",
    ];
    let datasets = [
        {
            label: "My First dataset",
            backgroundColor: "#c275a2",
            borderColor: "#c275a2",
            data: [65, 59, 90, 81, 56, 55, 40],
        },
        {
            label: "My Second dataset",
            backgroundColor: "#47e1a7",
            borderColor: "#47e1a6",
            data: [28, 48, 40, 19, 96, 27, 100],
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
                label: "New dataset",
                backgroundColor: "#297ded",
                borderColor: "#2c7fed",
                data: [58, 40, 45, 27, 66, 47, 10],
            },
        ];
    };

    const add_Label = () => {
        labels = [...labels, "June"];
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
    <Header title="Radar Chart"/>
    <div>
        <div class="details">
            <button on:click={setData}>Data</button>
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
                                    <input
                                        type="color"
                                        id="data_color"
                                        bind:value={datasets.borderColor}
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
            <Radar {data} options={{ responsive: true }} />
        </div>
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        background: lime;
    }

    main > div {
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
        background-color: white;
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
