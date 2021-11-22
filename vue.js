const app = new Vue ({
   el: '#app',

   data: {
      errorMsg: false,
      mail: '',
      emails: []

   },

   methods: {
      getMail(){
         for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
               .then((response) =>{
                  //console.log('intero oggetto', response);

                  const data = response.data;
                  //console.log('oggetto data:', data);
                  console.log('mail ottenuta', data.response);

                  this.mail = data.response;

                  this.emails.push(this.mail);
                  console.log('array emails', this.emails);
                  
               })

               .catch((error) => {
                  console.log(error);
                  this.errorMsg = true;
               })      
         }
         
      }

   },

   mounted(){
      this.getMail();
   }

})