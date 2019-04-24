window.onload = () => {
    new Vue({
        el: "#library",
        data: {
            title: '',
            author: '',
            productionYear: '',
            type: '',
            l: ''
        },
        methods: {
            AddBook() {
                document.location.replace("/library/add");

            },
            logout() {
                axios.get('/api/logout');
                document.location.replace("/");
            },
            delete(index){

            }
        },
        async created() {
            const { data } = await axios.get('/api/library');
            this.l = data;

        }


    })

};