<template>
  <div class="settings">
    <div class="container">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="card border-info mb-3">
            <h1 class="card-header text-info text-center mb-5">Postavke - promjena lozinke</h1>
            <div class="card-body">
              <form @submit.prevent="update">
                <div class="form-group col-md-12">
                  <label for="exampleInputPassword1"> Postojeća lozinka</label>
                  <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Postojeća lozinka"/>
                </div>
                <div class="form-group col-md-12">
                  <label for="exampleInputPassword2">Nova lozinka</label>
                  <input v-model="newPassword" type="password" class="form-control" id="exampleInputPassword2" placeholder="Nova lozinka"/>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary">Promijeni lozinku</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //errorMessage: '',
      email: '',
      password: '',
      newPassword: '',
      successful: '',
    };
  },
  methods: {
    update() {
      var user = firebase.auth().currentUser;
      user.updatePassword(this.newPassword).then(function() {
            console.log("Successfully updated."); 
        })
        alert("Uspješna promjena lozinke");
        if (this.$route.name !== "home")
              this.$router.push({ name: "home" }).catch(err => console.log(err))
        .catch(function(error) {
          // An error happened.
        });
        
    }
  }
};
</script>