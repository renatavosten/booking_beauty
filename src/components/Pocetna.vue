<template>
  <div class="media">
          <div class="media-body">
            <h1 class="text">Booking Beauty</h1>
          </div>
          <img src="slika1.png" class="ml-3" alt="...">
        </div>
</template>

<script>
export default {
  name: 'Pocetna',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
  .ml-3{
    width: 620px;
    height: 660px;
    -webkit-transform:rotate(270deg);
    -moz-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    -o-transform: rotate(270deg);
    transform: rotate(270deg);
    
  }
  .text{
    padding-top: 220px;
    color: rgb(209, 49, 123);
    font-style: italic;
    font-size: 100px;
  }
  
</style>
