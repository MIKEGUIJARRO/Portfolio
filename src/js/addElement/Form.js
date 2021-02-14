import Chips from "./Chips";
import 'babel-polyfill';

class Form {
    titleInput;
    descriptionInput;
    webpageInput;
    githubInput;
    figmaInput;
    documentInput;
    technologyInput;
    chips;
    addChipBtn;
    sendBtn;
    constructor(
        formId,
        idTitleInput,
        idDescriptionInput,
        idWebpageInput,
        idGithubInput,
        idFigmaInput,
        idFile,
        idTechnologyInput,
        idAddChip,
        idSendForm) {
        const formElement = document.getElementById(formId)
        this.titleInput = document.getElementById(idTitleInput);
        this.descriptionInput = document.getElementById(idDescriptionInput);
        this.webpageInput = document.getElementById(idWebpageInput);
        this.githubInput = document.getElementById(idGithubInput);
        this.figmaInput = document.getElementById(idFigmaInput);
        this.documentInput = document.getElementById(idFile);
        this.technologyInput = document.getElementById(idTechnologyInput);
        this.chips = new Chips(document, "chips-container");
        this.addChipBtn = document.getElementById(idAddChip);
        this.sendBtn = document.getElementById(idSendForm);

        //AddEventListeners
        this.addChipBtn.addEventListener("click", this.addChipHandler.bind(this));
        this.sendBtn.addEventListener("click", this.fetchHandler.bind(this), true);
    }

    addChipHandler() {
        if (this.technologyInput.value === "") {
            return;
        }
        this.chips.addChip(this.technologyInput.value);
        this.technologyInput.value = "";
    }

    async fetchHandler(evt) {
        if (!this.titleInput.validity.valid ||
            !this.descriptionInput.validity.valid) {
            return;
        }
        if (this.documentInput && !this.documentInput.validity.valid) {
            return;
        }
        const formData = new FormData();
        const URL = "/add-element";
        const values = this.getInputValues();
        for (const data in values) {
            console.log(`${data} / ${values[data]}`)
            formData.append(data, values[data]);
        }
        formData.append("hola", "mundo");
        const response = await fetch(URL, {
            mode: "no-cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "form-data"
            },
            method: "POST", 
            body: formData
        });
        console.log(response);
    }


    getInputValues() {
        const data = {};
        const inputTextElements = [
            {
                name: "title",
                element: this.titleInput
            },
            {
                name: "description",
                element: this.descriptionInput
            },
            {
                name: "webpage",
                element: this.webpageInput
            },
            {
                name: "github",
                element: this.githubInput
            },
            {
                name: "figma",
                element: this.figmaInput
            },
        ];

        if (this.documentInput && this.documentInput.files[0]) {
            data["file"] = this.documentInput.files[0];
        }
        if (this.chips.getChipsValues().length !== 0) {
            data["technologies"] = this.chips.getChipsValues();
        }

        for (let i = 0; i < inputTextElements.length; i++) {
            if (inputTextElements[i].element.value === "") {
                continue;
            }
            data[inputTextElements[i].name] = inputTextElements[i].element.value;
        }
        return data;
    }
}

export default Form;