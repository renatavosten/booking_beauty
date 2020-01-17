<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-10">
        <div class="card border-info mb-3">
          <h1 class="card-header text-info text-center mb-5">Vaš profil:</h1>
          <div class="card-body">
            <h5>Naziv salona:</h5>
            <p>{{ profil.inputSalon }}</p>
            <br />
            <h5>Grad:</h5>
            <p>{{ profil.inputGrad}}</p>
            <br />
            <h5>Usluge koje pružamo:</h5>
            <p>
              <ul>
                <li :key="usluga" v-for="usluga in profil.vrstaUsluge">{{usluga}} </li>
              </ul>
            </p>
            <br />
            <h5>Fotografije:</h5>
            <p><img  :src="profil.url" width="200" height="200"/></p>
          </div>
        </div>
      </div>
      <div class="col-sm-1"></div>
    </div>
  </div>
</template>

<script>

import store from "@/store.js";

export default {
  name: "ProfileLook",
  
  data() {
    return store;
  },
  computed: {
    Ispis() {
      return this.profil;
    }
  },
  mounted() {
    db
      .collection("Korisnici")
      .doc(this.userEmail)
      .get()
      .then(doc => {
        let data = doc.data();
        console.log(data);
        this.profil = {
          id: doc.id,
          inputSalon: data.inputSalon,
          inputGrad: data.inputGrad,
          vrstaUsluge: data.vrstaUsluge,
          url: data.url
        };
      })
      .catch(err => {
        console.warn(err);
      })
  }
};
</script>