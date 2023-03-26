import "core-js";
import sass from "sass"
import "./styles/style.scss";

const checkbox = document.getElementById("checkbox");
const form = document.getElementById("form");
const label = document.getElementById("label")
let checkboxState = false;


const isValid = (e) => {
    if (e.target.checked) {
        checkboxState = true;
    } else {
        checkboxState = false;
    }
}

const fillPopup = ({ popup, username, email }) => {
    popup.id = "newsletter";
    popup.innerHTML = `
<h3>Newsletter</h3>
Dzięki ${username} za zapis do Newslettera,
teraz od czasu do czasu otrzymasz od nas maila,
na adres, który podałeś w formularzu ${email}.
Dziękujemy za zaufanie :)
`;
const closeBtn = document.createElement("button");
closeBtn.id = "close__button";
closeBtn.textContent = "X";
popup.appendChild(closeBtn);
removePopup(closeBtn,popup);
}

const createPopup = () => {
    if (!document.getElementById("newsletter")) {
        let userName = document.getElementById("user-name").value;
        let userEmail = document.getElementById("user-email").value;
        const popupContainer = document.createElement("div");
        const dataPopup = {
            popup: popupContainer,
            username: userName,
            email: userEmail
        };
        fillPopup(dataPopup);
        document.body.insertAdjacentElement('afterbegin', popupContainer);
    }
}


const removePopup = (button,element) => {
        button.addEventListener("click",()=>{
            element.remove();
        })
}

const submitHandler = (e) => {
    e.preventDefault();
    if (checkboxState) {
        label.classList.remove("invalid")
        createPopup();
    } else {
        label.classList.add("invalid")
    }
}

checkbox.addEventListener('change', isValid);
form.addEventListener("submit", submitHandler)