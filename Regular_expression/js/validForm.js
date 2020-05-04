class ValidForm {
    constructor() {
        this.values;
        this.errorEl = document.querySelectorAll('.errorMessage');
        this.formInput = document.querySelectorAll('input');
        this.validForm()
    }
    
    validForm() {
        document.querySelector('form').addEventListener('submit', e => {
            e.preventDefault();
            this.clearError();
            this.validInputValue();
            
          })
    }
    clearError() {
        for (let i = 0; i < this.errorEl.length; i++) {
            this.errorEl[i].innerHTML = '';
        }
        for (let i = 0; i < this.errorEl.length; i++) {
            this.formInput[i].classList.remove('validFailed', 'validSucess');
        }
        
    }
    getFormValues() {
        let formValues = document.querySelectorAll('.value');
        return this.values = {
                name: formValues[0].value,
                phone: formValues[1].value,
                email: formValues[2].value,
                text: formValues[3].value
            }
    }
    validInputValue() {
        this.getFormValues();
        for (let key in this.values) {
            this.validValues(key, this.values); 
        }
        
    } 
    validValues(key, values) {
        let error, type;
        switch (key) {
            case 'name': {
                if (values[key].match(/^[А-ЯЁA-Z]{1}[a-zа-яё]+$/g) == null) {
                    error = 'Ошибка. Имя не соответствует формату "Иван"';
                } else {
                error = 0;
                }
                type = 0;
                this.setError(type, error);
                break;
            }
            case 'phone': {
                if (values[key].match(/^[+]+[7]+[(]+[0-9]{3}[)]+[0-9]{3}[-]+[0-9]{4}/) == null) {
                    error = 'Ошибка. Номер телефона не соответствует формату "+7(000)000-0000"';
                } else {
                error = 0;
                }
                type = 1;
                this.setError(type, error);
                break;
            }
            case 'email': {
                if (values[key].match(/^[a-zA-Z0-9]+[-.]?[a-zA-Z0-9]+@[a-zA-Z0-9]+[.]+[a-zA-Z]+/) == null) {
                    error = 'Ошибка. Адрес элетронной почты не соответствует формату mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru';
                    
                } else {
                    error = 0;
               }
                type = 2;
                this.setError(type, error);
                break;
            }
            case 'text': {
               if (values[key] == '') {
                    error = 'Ошибка. Не введенно не одного символа'; 
                } else {
                    error = 0;
                }
                type = 3;
                this.setError(type, error);
                break;
            } 
            default: {
                error = 'Ошибка. Не введенно не одного символа'; 
                this.setError(type, error);
            }      
        }
    }

    setError(type, error) {
        
        if (error == 0) {
            this.formInput[type].classList.add('validSucess');
        } else { 
            this.errorEl[type].innerHTML = error;
            this.formInput[type].classList.add('validFailed');
        }
    }

}
new ValidForm();

