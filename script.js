let vm = new Vue({
    el: '#root',
    data: {
        email: '',
        emailWarning: '',
        password: '',
        passWarning: '',
        checklist: false,
        isSubmit: false
    },
    methods: {
        submit: function () {
            if (this.isSubmit === true) {
                alert(`Welcome back ${this.email}`)
            } else {
                this.validate();
            }
        },
        validate: function () {
            this.checkForm();

        },
        ValidateEmail: function (inputText) {
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (inputText.match(mailformat)) {
                return true;
            }
            else {
                return false;
            }
        }
        ,
        checkForm: function () {
            if (this.email === '') {
                this.emailWarning = 'Email field is required';
                this.checklist = false;
            } else if (this.ValidateEmail(this.email) === false) {
                this.emailWarning = 'Entered email is invalid';
                this.checklist = false;
            } else {
                this.emailWarning = '';
                this.checklist = true;
            }
            if (this.password === '') {
                this.passWarning = 'Password field is required';
            } else {
                this.passWarning = '';
            }
            if (this.checklist && this.password !== '') {
                this.isSubmit = true;
            }

        }
    }

})