<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="card border-info mb-3">
            <h1 class=" card-header text-info text-center mb-5">Ažuriraj profil</h1>
            <div class="card-body">
              <form @submit.prevent="updateSalon">
                <div class="form-group col-md-12">
                  <label for="inputSalon">Naziv beauty salona:</label>
                  <input v-model="salonName" type="text" class="form-control" id="inputSalon" placeholder="Upišite naziv beauty salona">
                </div>
                <div class="form-group col-md-12">
                  <label for="inputOib">OIB poduzeća:</label>
                  <input v-model="oib" type="text" class="form-control" id="inputOib" placeholder="Upišite OIB poduzeća">
                </div>
                 <div class="form-group col-md-12">
                  <label for="inputGrad">Grad:</label>
                  <input v-model="grad" type="text" class="form-control" id="inputGrad" placeholder="Upišite grad u kojem se nalazi vaš salon">
                </div>
                <div class="form-group col-md-12">
                    <label for="vrstaUsluge" >Vrsta usluge (Za odabir više usluga držati CTRL):</label>
                    <select v-model="odabranaUsluga" id="vrstaUsluge" class="custom-select w-100" multiple required>
                        <option v-for="k in vrstaUsluge" v-bind:key="k"> {{ k }}</option>
                    </select>   
                </div>
                     
                <div class="text-center">
                  <button type="submit" class="btn btn-primary mt-5">Ažuriraj profil</button>
                </div> 
                                            
              </form>
            </div>
          </div>
          <div class="col-sm-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
    data() {
        return {
            errorMessage: '',
            salonName: '',
            oib: '',
            grad: '',
            odabranaUsluga: [ ],
            vrstaUsluge: ["Geliranje noktiju", "Trajni lak", "Pedikura", "Depilacija voskom", "Egipatska depilacija", "Šminkanje", "Ekstenzija trepavica", "Lash lift"]
        }
    },
    methods: {
        updateSalon() {
          var user = firebase.auth().currentUser;
            if (user) {
              db.collection("Korisnici")
              .doc(user.email)
              .update({ 
                inputSalon: this.salonName,
                inputOib: this.oib,
                inputGrad: this.grad,
                vrstaUsluge: this.odabranaUsluga
              })
              //.then(function() {
                console.log("Document successfully written!");
                alert("Uspješno ažuriran profil!");
                if (this.$route.name !== "home")
                  this.$router.push({ name: "home" }).catch(err => console.log(err))
              //})
            }else {
              //.catch(function(error) {
              console.error("Error writing document: ", error);
            //}),
            }
            
            
        }
    }
}

</script>




<style lang ="scss">


</style>