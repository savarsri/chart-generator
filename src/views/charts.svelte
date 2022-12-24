<script>
    import ChartsCard from "./charts-card.svelte";

    let pieChart={
        title: 'Pie Chart',
        description: 'A pie chart is a type of graph that represents the data in the circular graph.',
        imgSrc: 'src/assets/chartify-logo.png'
    }

    let barChart={
        title: 'Bar Chart',
        description: 'Graphical representation of data, quantities,or numbers using bars or strips.',
        imgSrc: 'src/assets/bar-chart.png'
    }

    let horiBarChart={
        title: 'Horizontal Bar Chart',
        description: 'Horizontal bar graphs represent the data horizontally',
        imgSrc: 'src/assets/hori-bar-chart.png'
    }

    let lineChart={
        title: 'Line Chart',
        description: "Graphical representation of an asset's historical price action that connects a series of data points with a continuous line.",
        imgSrc: 'src/assets/line-chart.png'
    }

    let radarChart={
        title: 'Radar Chart',
        description: 'A radar chart is a graphic that displays three or more variables growing out of its core.',
        imgSrc: 'src/assets/radar-chart.png'
    }

    let doughnutChart={
        title: 'Doughnut Chart',
        description: '  It show the proportions of categorical data, with the size of each piece representing the proportion of each category',
        imgSrc: 'src/assets/doughnut-chart.png'
    }

</script>

<main>
    <div id="container">
        <div class="row">
            <div id="wrapper">
                <ChartsCard {...pieChart}/>
            </div>
            <div id="wrapper">
                <ChartsCard {...barChart}/>
            </div>
            <div id="wrapper">
                <ChartsCard {...lineChart}/>
            </div>
        </div>
       <div class="row">
        <div id="wrapper">
            <ChartsCard {...radarChart}/>
        </div>
        <div id="wrapper">
            <ChartsCard {...horiBarChart}/>
        </div>
        <div id="wrapper">
            <ChartsCard {...doughnutChart}/>
        </div>
       </div>    
    </div>
</main>

<style>

    .row{
        margin: auto;
        display: flex;
    }

    #container{
        border-radius: 25px;
        margin: 25px auto;
        display: grid;
        height: 670px;
        width: 1196px;
        background-color: white;
    }

    #wrapper{
        margin: auto 35px;
    }

    #wrapper:hover{
        cursor: pointer;
    }

</style>