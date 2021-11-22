const app = new Vue ({
   el: '#app',

   data: {
      errorMsg: false,
      mail: ''

   },

   mounted(){
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
         .then((response) =>{
            console.log('intero oggetto', response);

            const data = response.data;
            console.log('oggetto data:', data);
            console.log('mail ottenuta', data.response);

            this.mail = data.response;
         })

         .catch((error) => {
            console.log(error);
            this.errorMsg = true;
         })


   },

   methods: {


   }

})