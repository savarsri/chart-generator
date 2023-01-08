<script>
    import { Pie } from "svelte-chartjs";

    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        ArcElement,
        CategoryScale,
    } from "chart.js";

    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

    let data_visible = false;
    let index_labels, index_datasets;

    let labels = ["Red", "Green", "Yellow", "Grey", "Dark Grey"];
    let datasets = [
        {
            data: [300, 50, 100, 40, 120],
            backgroundColor: [
                "#F7464A",
                "#46BFBD",
                "#FDB45C",
                "#949FB1",
                "#4D5360",
                "#AC64AD",
            ],
            hoverBackgroundColor: [
                "#FF5A5E",
                "#5AD3D1",
                "#FFC870",
                "#A8B3C5",
                "#616774",
                "#DA92DB",
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
                data: [30, 150, 106, 76, 109],
                backgroundColor: [
                    "#FF5A5E",
                    "#5AD3D1",
                    "#FFC870",
                    "#A8B3C5",
                    "#616774",
                    "#DA92DB",
                ],
                hoverBackgroundColor: [
                    "#F7464A",
                    "#46BFBD",
                    "#FDB45C",
                    "#949FB1",
                    "#4D5360",
                    "#AC64AD",
                ],
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
    <div class="details">
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
    </div>
    <div class="chart">
        <Pie {data} options={{ responsive: true }} />
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
        display: flex;
        justify-content: center;
        margin: 5%;
        height: 90%;
        width: 70%;
        background-color: white;
    }

    .chart > div {
    }
</style>
