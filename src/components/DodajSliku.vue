<template>
    <div class="container">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="card border-info mb-3">
            <h1 class=" card-header text-info text-center mb-5">Dodaj sliku salona</h1>
            <div class="card-body">
              <form @submit.prevent="postImage" class="mb-5">
                <croppa :width="400" :height="400" v-model="imageData"></croppa>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary mt-5">Dodaj sliku</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-sm-3"></div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Dodajsliku',
    data() {
        return {
            imageData: null
        }
            
    },
    methods: {
        postImage() {
            var user = firebase.auth().currentUser;
            this.imageData.generateBlob(blobData => {
                if (blobData != null) {
                    let imageName = user.email + "/" + Date.now() + ".png";  
                    // ako koristimo "/" u nazivu slike, Storage fino napravi direktorij.
                    // Konkretno u ovom primjeru imat ćemo direktorij nazvan po mailu korisnika.
                    // Slika će biti nazvana po trenutnom vremenu kako bi imali jedinstveni naziv slike.
                    storage
                      .ref(imageName)
                      .put(blobData)
                      .then(result => {
                          result.ref.getDownloadURL()
                           .then(url => {
                               if(user) {
                                db.collection("Korisnici")
                                .doc(user.email)
                                .update({
                                    url: url
                                })
                                .then(() => {
                                    alert("Uspješno dodana slika!");
                                    if (this.$route.name !== "home")
                                        this.$router.push({ name: "home" }).catch(err => console.log(err))
                                })
                               }else{
                                   //.catch(e => {
                                    console.error("Error adding document: ", error);
                                //});
                               }   
                           })
                           .catch(e => {
                               console.error(e)
                           })
                      })
                      .catch(e => {
                          console.error(e)
                      })
                }
            });
        }
    }

}
</script>

<style lang="scss">
.croppa-container {
  border: 3px dashed gray;
  width: 400px;
  display: block;
  margin-bottom: 10px;
  margin-left: 40px;
}


</style>