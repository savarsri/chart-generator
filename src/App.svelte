<script>
  import Router from "svelte-spa-router";
  import Charts from "./views/charts.svelte";
  import BarChart from "./charts view/bar-chart.svelte";
  import NotFound from "./views/NotFound.svelte";
  import PieChart from "./charts view/pie-chart.svelte";
  import LineChart from "./charts view/line-chart.svelte";
  import RadarChart from "./charts view/radar-chart.svelte";
  import HoriBarChart from "./charts view/horiBar-chart.svelte";
  import DoughnutChart from "./charts view/doughnut-chart.svelte";

  let routes = {
    "/": Charts,
    "/bar-chart": BarChart,
    "/pie-chart": PieChart,
    "/line-chart": LineChart,
    "/radar-chart": RadarChart,
    "/horiBar-chart": HoriBarChart,
    "/doughnut-chart": DoughnutChart,
    "*": NotFound,
  }
</script>

<main>
  <Router {routes}/>
</main>

<style></style>