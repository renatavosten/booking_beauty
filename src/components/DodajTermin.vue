<template>
    <div id="kalendar">
      <form @submit.prevent="updateTermin">
      <h1 class="text-center">Dodaj slobodni termin:</h1>
       
        <h6> Izaberi vrijeme i datum </h6>
      <date-picker v-model="range" lang="en" range confirm type="datetime" format="YYYY-MM-DD [at] HH:mm a" width="1000"  >
        

      </date-picker>
      <div class="form-group-col-md-12">
          <label for="usluga">Naziv usluge:</label>
          <input v-model="inputUsluga" type="text" class="form-control" id="usluga" placeholder="Upiši vrstu usluge">
      </div>
       <div class="text-center">
                  <button type="submit" class="btn btn-primary mt-5">Kreiraj termin</button>
                </div> 
                 </form>
      </div>
     
</template>
<script>
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
  export default {
    name:"kalendar",
    components: { DatePicker },
    data() {
      return {
        bookirano: true,
        year:"",
        date:"",
        time:'',
        //timePickerOptions:{
        //start: '00:00',
       // end:'23:30'
       // },
       datetime:'',
        range:''
      
      }
      },
    methods: {
        updateTermin() {
          var user = firebase.auth().currentUser;
            if (user) {
              let start = this.range[0] //'2020-01-08 18:00'
              let end = this.range[1]
              console.log(start, end);
              let termin =  {
                start: start,
                end: end,
                title: 'Ime i prezime',
                content: this.inputUsluga   
              }
              db.collection("Korisnici")
              .doc(user.email)
              .collection('Kalendar')
              //.doc('slobodni_termini')
              .add(termin)
              .then(_ => {
                console.log("Document successfully written!");
                alert("Uspješno je dodan novi termin");
              });
             
              
               
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
