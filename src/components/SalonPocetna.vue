<template>
  <div class="container">
      <h1 class="text-center">Odaberite:</h1>
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <div class="btn-group-vertical">
            <button type="button" class="btn btn-light">  
              <router-link to="/profile">Uredi podatke o salonu</router-link>
            </button>
            <button type="button" class="btn btn-light">
              <router-link to="/dodajsliku">Dodaj sliku salona</router-link>
            </button>
            <button type="button" class="btn btn-light">
              <router-link to="/profilelook">Pogledaj svoj profil</router-link>
            </button>
            <button type="button" class="btn btn-light">
              <router-link to="/pogledajrezervacije">Pogledaj rezervacije</router-link>
            </button>
            <button type="button" class="btn btn-light">
              <router-link to="/dodajtermin"> Dodaj slobodne termine</router-link>
            </button>
          </div>
        </div>
        <div class="col-sm-4"></div>
      </div>
      
  </div>
</template>

<script>
export default {
  name: 'SalonPocetna',
  props: {
    msg: String
  }
}
</script>

<style lang ="scss">

.btn-group-vertical {
  display:inline;
  
}
</style>