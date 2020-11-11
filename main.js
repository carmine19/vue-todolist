//questa variabile abilita il prototiping di vue
Vue.config.devtools = true;

// definisco l'oggetto vue avendo gia caricato la sua cdn
var app = new Vue({
    //questo è l 'elemento dove si aggancia vue, tutto quello scritto in questo id di nome app verra gestito da vue
    el: '#app',

    //qui è dove creiamo definiamo le pseudo variabili di vue, infatti non sono delle vere variabili ma oggetti che vue definisce
    //e gestisce
    data: {
        x: 0,
        y: 0,
        bianco: 'bianco',
        icone_nere: 'icone_nere',
        lista_todo: [
            'fare la spesa',
            'leggere',
            'studiare',
        ],
        todo_utente: '',
    },

    //i methods sono dove definiamo le nostre funzioni e possono essere benissimamente scritte in es6
    methods: {

        // questa funzione aggiunge con un push il todo dell utente, se il todo e uguale a se stesso pulisco l input
        aggiungo_todo() {
            let nuova_aggiunta = this.lista_todo.push(this.todo_utente);
            if (this.todo_utente === this.todo_utente) {
                this.todo_utente = '';
            }
        },

        // qui rimuovo il todo ed essendo una funzione che non si genera al click la inizializzo nel mounted
        rimuovo_todo() {
            let togli_todo = this.lista_todo.pop(this.todo_utente);
        },

        //registro gli eventi del mouse
        registroMouse(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },

        // questa funzione va lo switch di colori su delle classi impostate, in questo caso cambia le icone ed il wrapper di vue
        dark_mode() {
            if( this.bianco === 'bianco') {
                this.bianco = 'nero';
                this.icone_nere = 'icone_bianche'

            }else {
                this.bianco = 'bianco';
                this.icone_nere = 'icone_nere'
            }
        }

        },

    // il mounted è la gestione dello stato, qui possiamo anche modificare i parametri che abbiamo definito precedentemente,
    // il mounted è il constructor di delle classi di js
    mounted: function () {
        //verifico se lo stato è inizializzato correttemente
        console.log('stato montato correttamente');
        //inizializzo la funzione per rimuovere i todo
        this.rimuovo_todo()
    }

})



