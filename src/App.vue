<!-- ovo je novo sto radi -->
<template>
  <div id="app">
    <div class="bg-white">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav class="navbar navbar-expand-lg navbar-light mb-2">
              <router-link class="btn btn-outline-danger" to="/">Početna</router-link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <router-link v-if="!authenticated" class="btn btn-outline-danger my-2 my-sm-0 mr-2" to="/login">Prijava</router-link>
                    <span v-if="authenticated">
                      <a @click="logout" class="btn btn-outline-danger my-2 my-sm-0 mr-2" href="#">Odjava</a>
                    </span>
                  </li>
                  <div class="divider"/>
                  <li class="nav-item">
                    <router-link v-if="authenticated" class="btn btn-outline-danger my-2 my-sm-0 mr-2" to="/settings">Postavke</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link v-if="!authenticated" class="btn btn-outline-danger my-2 my-sm-0 mr-2" to="/register">Registracija</router-link>
                  </li>
                </ul>
              </div>   
            </nav>
          </div>
        </div>
      </div>
    </div>            
    <div class="container">
      <router-view/>
    </div>
    <div id="footer" class="text-center mt-5">Footer. (c) 2019.</div>
  </div>
</template>

<script type="text/javascript">

import store from '@/store.js';


export default {
  data() {
    return store;
  },

  
        
  methods: {
   logout() {
     firebase.auth().signOut();
    },
    afterLoginAkcije() {
    console.log("subscribe");
        db.collection('Korisnici').where("tipKorisnika", "==", "Salon")
        .onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            const data = change.doc.data()
            if(change.type !== "added") {
              return 
            }
            const podatak = {
              id: change.doc.id,
              inputSalon: data.inputSalon,
              inputGrad: data.inputGrad
            };
            this.saloni.unshift(podatak);
          });
        })
    },
  },
  mounted () {
    //const self = this;
    // kad nešto počne sa "on..." vjerojatno je trigger
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user.email);
        this.userEmail = user.email;
        this.authenticated = true;
        db.collection("Korisnici")
          .doc(this.userEmail)
          .get()
          .then(doc => {

            this.afterLoginAkcije();
            
            if (doc.exists) {
              console.log("Document data:", doc.data());
              this.tipKorisnika = doc.data().tipKorisnika;
             
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          });
       if (this.$route.name !== "home")
        this.$router.push({ name: "home" }).catch(err => console.log(err))
      }else {
        console.log("User is not logged in");
        this.authenticated = false;
        if (this.$route.name !== "pocetna")
          this.$router.push({ name: "pocetna" }).catch(err => console.log(err))
      }
    });
    
    
  }
}
</script>

<style lang="scss">
nav.navbar{
  background-color: white;
}
.bg-white{
  background-color: white;
  border-bottom: #cccc 1px solid;
  margin-bottom: 20px;
  padding: 10px;
}
//#navbarDropdownMenuLink{
  //color:#FF00B1;
//}
a{
  color: #FF00B1;
}

.divider{
    width:5px;
    height:auto;
    display:inline-block;
}


</style>
