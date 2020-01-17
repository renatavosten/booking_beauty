<template>
    <div class="container">
        <div v-if="podatak">
          <div class="row">
            <div class="col-sm-1"></div>
            <div class="col-sm-10">
              <div class="card border-info mb-3">
                <h1 class="card-header text-info text-center mb-5">Profil salona: {{ podatak.inputSalon }}</h1>
                <div class="card-body">
                  <h5>Naziv salona:</h5>
                  <p>{{ podatak.inputSalon }}</p>
                  <br />
                  <h5>Grad:</h5>
                  <p>{{ podatak.inputGrad}}</p>
                  <br />
                  <h5>Usluge koje pružamo:</h5>
                  <p>
                    <ul>
                      <li :key="usluga" v-for="usluga in podatak.vrstaUsluge">{{usluga}} </li>
                    </ul>
                  </p>
                  <br />
                  <h5>Fotografije:</h5>
                  <p><img  :src="podatak.url" width="200" height="200"/></p>
                  <!--<div class="text-center">
                    <button type="button" class="btn btn-light">
                      <router-link to="/korisnikrezervacija">Rezerviraj termin</router-link>
                    </button>
                  </div>-->
                </div>
              </div>
              <KorisnikRezervacija :info="podatak"/>
            </div>
            <div class="col-sm-1"></div>
          </div>
        </div>
    </div>
</template>

<script>
import store from "@/store.js";
import KorisnikRezervacija from '@/components/KorisnikRezervacija.vue';
export default {
    props: ['id'],
    data() {
        return {
            podatak: null
        }
    },
    mounted() {
        console.log(this.id);
        db.collection("Korisnici")
          .doc(this.id)
          .get()
          .then(doc => {
              this.podatak = doc.data();
              this.podatak.id = doc.id;
          })
    },
    name: "salon-info",
    components: {
      KorisnikRezervacija
    }
}
</script>