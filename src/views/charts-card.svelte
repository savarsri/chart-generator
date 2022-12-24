<script>
   export let title,description,imgSrc;
</script>

<main>
    <div class="wrapper">
        <div id="image">
            <img src={imgSrc} alt="Chart" height="176px">
        </div>
        <div id="title">
            {title}
        </div>
        <div id="description">
            {description}
        </div>
    </div>
</main>

<style>

    .wrapper{
        margin: auto;
        height: 300px;
        width: 320px;
        display: grid;
        background-color: white;
        border-radius: 8px;
        box-shadow: 2px 2px 15px -6px #000;
    }

    #image{
        margin: auto;
    }

    #title{
        margin: auto;
        color: black;
        font-weight: bold;
        font-size: 28px;
        text-align: center;
    }

    #description{
        margin: auto;
        color: black;
        max-width: 300px;
        text-align: center;
        font-size: 16px;
    }

</style>