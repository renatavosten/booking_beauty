<template>
  <div class="content">
    <h1 class="text-center">Korisnik početna:</h1>
    <div class="main-list">
      <p>Popis salona: </p>
      <div class="pointer" @click="gotoDetails(podatak)" :key="podatak.id" v-for="podatak in saloni">
        <Ispis :ispis="podatak"/>
      </div>
    </div>
  </div>
</template>

<script>
import Ispis from '@/components/Ispis.vue';
import store from '@/store.js';

export default {
  name: 'KorisnikPocetna',
  components: {
    Ispis
  },
  
  data () {
    return store;  
  },

  methods: {
    gotoDetails(podatak) {
      this.$router.push({path:`/salon/${podatak.id}`})
    }
  }
}
</script>



<style lang = "scss">

.text-center{
    color: rgb(209, 49, 123);
    font-style: italic;
    margin-bottom: 60px;
}
.content{
    background: #fff;
    max-width: 960px;
    margin: 30px auto;
    padding:  20px 30px;
    border-radius: 10px 120px 10px 10px;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.1)
}
.pointer{
  cursor: pointer;
}



</style>