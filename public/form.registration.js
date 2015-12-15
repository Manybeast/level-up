/**
 * Created by IlyaLitvinov on 12.12.15.
 */
var RegistrationForm = (function () {
    function isValidName(str) {
        return /^[A-Za-z]*$/.test(str);
    }

    function RegistrationForm() {
        this.btnSubmit = $('.registration-form .btn__submit');
        this.fieldName = $('.registration-form .field_input');
        this.handleEvents();
    }

    RegistrationForm.prototype.handleEvents = function () {
        this.btnSubmit.on('click', this.validate.bind(this))
    };

    RegistrationForm.prototype.validate = function () {
        var value = this.fieldName.val();

        if (value && isValidName(value)) {
            this.fieldName.parent().removeClass('notValid');
            console.log(value);
        } else {
            this.fieldName.parent().addClass('notValid');
        }
    };

    return RegistrationForm;
})();