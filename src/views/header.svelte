<script>
    export let title="Chartify";
</script>

<main>
    <div class="header">
        <a href="/" style="text-decoration: none;">
            <div class="nameLogoDiv">
                <div id="logo">
                    <img src="src/assets/chartify-logo.png" alt="Logo" height="50px">
                </div>
                <div id="name">
                    <h2>{title}</h2>
                </div>
            </div>
        </a>
        <!-- <div class="buttonDiv">
            <div class="center">
                <button class="primaryButton">
                    Log In
                </button>
            </div>
            <div class="center">
                <button class="secondaryButton">
                    Sign Up
                </button>
            </div>
        </div> -->
    </div>
</main>

<style>
    #name{
        color: black;
        margin: auto 10px;
    }

    #logo{
        margin: auto 10px;
    }

    .header{
        margin: 0;
        background-color: rgb(255, 255, 255);
        position: relative;
        display: flex;
        box-shadow: 3px 3px 3px rgba(60, 60, 60, 0.43);
        justify-content: space-between;
    }

    .nameLogoDiv{
        margin: 0;
        background-color: rgb(255, 255, 255);
        padding: 5px;
        position: relative;
        display: flex;
    }

</style>