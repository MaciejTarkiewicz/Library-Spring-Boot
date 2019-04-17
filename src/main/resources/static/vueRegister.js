window.onload = () => {
    new Vue({
        el: "#app",
        data: {
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
            error: ''
        },
        methods: {
            register() {
               if(this.password !== this.confirmPassword){
                    alert("Passwords do not match");
                    return;
                }
                axios({
                    method: 'post',
                    url: 'register',
                    data: {username: this.username, password: this.password, confirmPassword: this.confirmPassword, email: this.email}
                }).then(function (response) {
                    document.location.replace("/welcome");
                }).catch(err => {
                  //this.error = err.toString()
                    alert("Fill in all fields")
                });
            }
        },
    })



}