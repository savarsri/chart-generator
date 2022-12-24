import './app.css'
import Header from "./views/header.svelte";

const header = new Header({
  target: document.getElementById('header'),
})

export default header