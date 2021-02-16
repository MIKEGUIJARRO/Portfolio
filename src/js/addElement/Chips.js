class Chip {
    chipElement;
    constructor(text, element = undefined) {
        if (element === undefined) {
            //Add a new chip from input value
            const template = document.getElementById("template-chip");
            this.chipElement = template.content.querySelector("li").cloneNode(true);
            this.chipElement.textContent = text;

        } else {
            this.chipElement = element;
        }
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
        chipsEl.forEach((chipEl) => {
            values.push(chipEl.textContent);
        });
        return values;
    }

    isEmpty() {
        const chips = this.containerElement.querySelectorAll("li");
        return chips.length === 0 ? true : false;
    }

    addInitialClickListeners() {
        const chips = this.containerElement.querySelectorAll("li");
        chips.forEach((chip) => {
            const newChip = new Chip(undefined, chip);
        });
    }

};

export default Chips;