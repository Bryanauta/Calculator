function Calculator() {
    this.display = document.querySelector('.display');

    this.start = () => {
        this.clickBtns();
        this.enterPressed();
    };

    this.enterPressed = () => {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13) {
                this.result()
            }
        });
    }

    this.clickBtns = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            
            if(el.classList.contains('btn-num')) {
                this.addNumDisplay(el);
            };

            if(el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if(el.classList.contains('btn-del')) {
                this.deleteOne();
            }

            if(el.classList.contains('btn-eq')) {
                this.result();
            }
        });
    }
    
    this.result = () => {
        try {
            const res = eval(this.display.value);

            if(!res) {
                alert('Wrong information!');
                return;
            };

            this.display.value = String(res);
        } catch(e) {
            alert('Wrong information!');
            return;
        };
    };
    
    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    }

    this.clearDisplay = () => {
        this.display.value = ' ';
    };

    this.deleteOne = () => {
        this.display.value = this.display.value.slice(0, -1);
    };
};

const calculator = new Calculator();
calculator.start();