<template>
    <div class="list-item">
      <p class="round">
        <strong>{{ ispis.inputSalon }}</strong>
        <br />
        <i>{{ ispis.inputGrad }}</i>
      </p>
      
    </div>
</template>

<script>
export default {
    props: ["ispis"]
}
</script>

<style lang ="scss">

p.round {
  border: 2px solid pink;
  border-radius: 5px;
}
strong {
  font-size: 20px;
}

</style>