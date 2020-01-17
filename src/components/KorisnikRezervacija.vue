<template>
  <div id="pregled">
    <vue-cal
      :selected-date="selectedDate"   
      :time-from="8 * 60"
      :time-to="23 * 60"
      :disable-views="['years', 'year',]"
      hide-weekdays="[7]"
      editable-events
      resize-x
      :events="events"
      @event-change="onChange"
    ></vue-cal>
  </div>
</template>
<script>
import moment from "moment";
import SalonInfo from '@/components/SalonInfo.vue';
export default {
  props: ["info"],
  name: "pregled",
  components: { 
    "vue-cal": vuecal ,
    SalonInfo
  },
  
  data: () => ({
    start: null,
    end: null,
    selectedEvent: {},
    showDialog: false,
    events: [
      /*{
        start: "2020-01-08 14:00",
        end: "2020-01-08 18:00",
        title: "(Upisi Ime i prezime)",
        usluga:"manikura",
        content: "Slobodan termin"
      },
      {
        //
        start: "2020-01-10 10:00",
        end: "2020-01-10 15:00",
        title: "( Upisi ime i prezime)",
        usluga:"manikura",
        content: "Slobodan termin"
        
      }*/
    ]
    
  }),
  mounted() {
    this.getEvents();
  },
  methods: {
    onChange(promijenjeniEvent) {
      console.log(promijenjeniEvent.id),
                  console.log(promijenjeniEvent.title);
                  //var user = firebase.auth().currentUser;
                  //if(user){
                  db.collection("Korisnici")
                          .doc(this.info.id)
                          .collection("Kalendar")
                          .doc(promijenjeniEvent.id)
                          .update({ 
                            title:promijenjeniEvent.title, });
                            console.log("Uspješno dodano ime");
                            alert('Uspješno ste rezervirali termin');
                            //}
    },
    getEvents() {
      //var user = firebase.auth().currentUser;
      //if (user) {
        console.log(this.info);
        db.collection("Korisnici")
          .doc(this.info.id)
          .collection("Kalendar")
          //.doc('slobodni_termini')
          .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
              const data = change.doc.data();
              let start = moment(data.start.toDate()).format("YYYY-MM-DD HH:mm")
              let end = moment(data.end.toDate()).format("YYYY-MM-DD HH:mm")
              
              if (change.type === "added" && data.start) {
                const termin = {
                  start: start,
                  end: end,
                  id: change.doc.id,
                  title: data.title,
                  content: data.content
                };
                console.log(termin);
                this.events.unshift(termin);
                return;
              }
            });
          });
      //}
    }
    //onEventClick (event, e) {
    //  this.selectedEvent = event
    //this.showDialog = true
    // Prevent navigating to narrower view (default vue-cal behavior).
    // e.stopPropagation()
    //}
  }
};
</script>

   

<style lang ="scss">
.vuecal__event {
    color: #191819;
    background-color: hsla(318, 72%, 67%, 0.8);
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    left: 0;
    width: 100%;
    z-index: 1;
    -webkit-transition: left .3s,width .3s,-webkit-box-shadow .3s;
    transition: left .3s,width .3s,-webkit-box-shadow .3s;
    transition: box-shadow .3s,left .3s,width .3s;
    transition: box-shadow .3s,left .3s,width .3s,-webkit-box-shadow .3s;
    overflow: hidden;
}
</style>