<template>
  <div class="home">
    <div class="container">
      <div v-if="!authenticated">
        <Pocetna />
      </div>
      <div v-if="tipKorisnika ==='Salon'">
        <!--<div v-if="tipKorisnika === 'Salon'">-->
          <SalonPocetna />
      </div>
      <div v-else-if="tipKorisnika === 'Osoba'">
        <KorisnikPocetna />
      </div>     
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";
import Pocetna from '@/components/Pocetna.vue';
import SalonPocetna from '@/components/SalonPocetna.vue';
import KorisnikPocetna from '@/components/KorisnikPocetna.vue';
import Profile from '@/components/Profile.vue';
import DodajSliku from '@/components/DodajSliku.vue';
import ProfileLook from '@/components/ProfileLook.vue';

export default {
  data () {
    return store;  
  },
  name: 'home',
  components: {
    Pocetna,
    SalonPocetna,
    KorisnikPocetna,
    Profile,
    DodajSliku,
    ProfileLook
  }
}
</script>


