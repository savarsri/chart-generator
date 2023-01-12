<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function btnClick () {
        dispatch('btnClick');
    }
</script>

<main>
    <div id="container">
        <div class="wrapper">
            <div class="style1">
                Create <br />Your Chart
            </div>
            <div class="style2">Online chart generator with live preview!</div>
            <div>
                <button class="primaryButton" on:click={btnClick}> Create Chart </button>
            </div>
            <!-- <img src="src/assets/chart-background.jpg" alt="Background"> -->
        </div>
    </div>
</main>

<style>
    .primaryButton {
        width: 236px;
        height: 67px;
        font-size: 24px;
        margin: 75px 0;
    }

    .style1 {
        margin: 10px 0;
    }

    .style2 {
        margin: 25px 0;
    }

    #container {
        border-radius: 25px;
        margin: 25px auto;
        display: flex;
        height: 590px;
        width: 1196px;
        background-color: white;
        background-image: url("src/assets/chart-background.jpg");
        background-color: #ffffff;
        background-position: center;
        background-size: cover;
    }

    .wrapper {
        margin: auto 100px;
        text-align: left;
    }
</style>
