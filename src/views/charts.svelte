<script>
    import ChartsCard from "./charts-card.svelte";
    import Header from "./header.svelte";
    import Home from "./home.svelte";
    import {link} from 'svelte-spa-router'

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

    let horiBarChart={
        title: 'Horizontal Bar Chart',
        description: 'Horizontal bar graphs represent the data horizontally',
        imgSrc: 'src/assets/hori-bar-chart.png'
    }

    let doughnutChart={
        title: 'Doughnut Chart',
        description: '  It show the proportions of categorical data, with the size of each piece representing the proportion of each category',
        imgSrc: 'src/assets/doughnut-chart.png'
    }

    const scroll_to_charts = () => {
        window.scrollTo(0, 725);
    }

</script>

<main>
    <Header/>
    <Home on:btnClick={scroll_to_charts}/>
    <div id="container">
        <div class="row">
            <a href="/pie-chart" use:link>
                <div id="wrapper">
                    <ChartsCard {...pieChart}/>
                </div>
            </a>
            <a href="/bar-chart" use:link>
                <div id="wrapper">
                    <ChartsCard {...barChart}/>
                </div>
            </a>
            <a href="/line-chart" use:link>
                <div id="wrapper">
                    <ChartsCard {...lineChart}/>
                </div>
            </a>
        </div>
       <div class="row">
        <a href="/radar-chart" use:link>
            <div id="wrapper">
                <ChartsCard {...radarChart}/>
            </div>
        </a>
        <a href="/horiBar-chart" use:link>
            <div id="wrapper">
                <ChartsCard {...horiBarChart}/>
            </div>
        </a>
        <a href="/doughnut-chart" use:link>
            <div id="wrapper">
                <ChartsCard {...doughnutChart}/>
            </div>
        </a>
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

    a{
        text-decoration:none
    }

</style>