<template>
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <div class="card border-danger mb-3">
                <h1 class="card-header text-danger text-center mb-5">Registracija </h1>
                <div class="card-body">
                    <form @submit.prevent="register">
                        <div v-if="errorMessage" class="alert alert-danger">
                          <strong>Ups!</strong>
                            {{ errorMessage }}
                        </div>
                        
                        <div class="form-group col-md-12">
                            <label for="emailField">Email:</label>
                            <input v-model="email" type="email" class="form-control" id="emailField" placeholder="Upišite email">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="passwordField">Lozinka:</label>
                            <input v-model="password" type="password" class="form-control" id="passwordField" placeholder="Upišite lozinku">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="confirmPasswordField">Potvrda lozinke:</label>
                            <input v-model="passwordConfirmation" type="password" class="form-control" id="confirmPasswordField" placeholder="Potvrdite lozinku">
                        </div>
                        <div v-if="password != passwordConfirmation" class="alert alert-danger" role="alert">Lozinke nisu jednake.</div>
                        <div class="form-group col-md-12">
                          <label for="tipKorisnika">Tip korisnika</label>
                          <select v-model="odabraniKorisnik" id="tipKorisnika" class="form-control">
                           <!-- <option value="tipKorisnika" >Osoba</option>
                          <option value="tipKorisnika" disabled>Salon</option>-->
                            <option v-for="i in tipKorisnika" v-bind:key="i"> {{ i }} </option>
                          </select>
                        </div>
                        <div class="text-center">
                            <button v-if="password === passwordConfirmation" type="submit" class="btn btn-primary mt-5">Registriraj se</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
                                        
        <div class="col-sm-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            errorMessage: '',
            odabraniKorisnik:"",
            email: '',
            password: '',
            passwordConfirmation: '',
            tipKorisnika: ["Osoba", "Salon"]
        }
    },
  
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          // postavi podatke o korisniku
          // ovdje ide kod nakon POVRATKA UPITA za ragistraciju i to ako nije prošlo
          let id = this.email;
          // sada moramo spremiti te dodatne podatke
          // Add a new document in collection "cities"
          db.collection("Korisnici")
            .doc(id)
            .set({
              tipKorisnika: this.odabraniKorisnik
            })
            .then(function() {
              console.log("Document successfully written!");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });
        })
        .catch(error => {
          // ovdje ide kod nakon POVRATKA UPITA za ragistraciju i to ako nije prošlo
          console.error(error);
          this.errorMessage = error.message;
        });
      // ovdje se izvršava kod koji ide NAKON SLANJA UPITA za registraciju
    }
  }
};
</script>