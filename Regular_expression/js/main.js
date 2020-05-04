class RegularExpressin {
    constructor() {
        this.text = '';
        this.getText('text.txt')
            .then(data => {
                this.text = data;
                this.runTask1();
                this.runTask2();
            })
            .catch(error => {
                console.log(error);
              })
    }
    
    getText(url){
        return fetch(url)
            .then(result => result.text())
            .catch(error => {
            console.log(error);
            })
    }
    runTask1() {
        let result;
        result = this.text.replace(/'/g, '<span class="colorReplace">"</span>');
        document.querySelector('.task_1').innerHTML = `<p>${result}<p>`
    }
    runTask2() {
        let result;
        result = this.text.replace(/\B'/g, '<span class="colorReplace">"</span>');
        document.querySelector('.task_2').innerHTML = `<p>${result}<p>`
    }
    
}
new RegularExpressin();

