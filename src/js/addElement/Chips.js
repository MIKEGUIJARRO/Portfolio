class Chip {
    chipElement;
    constructor(text) {
        const template = document.getElementById("template-chip");
        this.chipElement = template.content.querySelector("li").cloneNode(true);
        this.chipElement.textContent = text;
        this.chipElement.addEventListener("click", this.delete.bind(this));
    }
    delete() {
        this.chipElement.parentElement.removeChild(this.chipElement);
    }
};

class Chips {
    containerElement;   
    constructor(formElement, idContainer) {
        this.containerElement = document.getElementById(idContainer);
    };

    addChip(text) {
        const newChip = new Chip(text);
        this.containerElement.appendChild(newChip.chipElement);
    };

    getChipsValues() {
        const values = [];
        const chipsEl = this.containerElement.querySelectorAll("li");
        chipsEl.forEach((chipEl)=> {
            values.push(chipEl.textContent);
        });
        return values;
    }
};

export default Chips;