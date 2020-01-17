<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="card border-success mb-3">
              <h1 class="card-header text-success text-center mb-5">Prijava </h1>
              <div class="card-body">
                <form @submit.prevent="login">
                  <div class="form-group col-md-12">
                    <label for="exampleInputEmail1" >Email:</label>
                    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                  </div>
                  <div class="form-group col-md-12">
                    <label for="exampleInputPassword1">Lozinka:</label>
                    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Lozinka">
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn btn-primary mt-5">Prijavi se</button>
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
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
        console.log(error)
      });
      console.log("Prijava uspješna!");
    }
  }
}
</script>