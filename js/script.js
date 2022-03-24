

// Descrizione:
// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// Generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.



const app = new Vue({
    el: '#app',

    
    data: {

        emailList: [],
        
    },

    methods: {

        createRandomList: function(){

            const self = this;

            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function (randomEmail) {
                self.emailList.push(randomEmail.data.response);
                })
            }
        }
    },

    mounted(){
        this.createRandomList();
     },

  });