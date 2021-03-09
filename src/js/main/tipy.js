import tippy, { followCursor } from 'tippy.js';
import 'tippy.js/dist/tippy.css';

//https://processwire.com/talk/topic/21154-how-to-use-tippyjs-in-a-module/


tippy('#date-college', {
    content: 'August 2018 - Present<br>Expected: December 2022',
    animateFill: true,
    allowHTML: true
});

tippy('#date-school', {
    content: 'August 2015 - June 2018',
    animateFill: true,
    allowHTML: true
});

tippy('#tec', {
    content: 'Private University #1 in Mexico',
    followCursor: true,
    followCursor: 'horizontal',

    plugins: [
        followCursor
    ],
    animateFill: true,
});

tippy('#info-main', {
    content: 'More relevant projects with an image of each project.',
    animateFill: true,
    allowHTML: true
});

tippy('#info-others', {
    content: 'Normal projects without an image of each project.',
    animateFill: true,
    allowHTML: true
});

tippy('#info-resume', {
    content: 'Update your last resume with a new one.',
    animateFill: true,
    allowHTML: true
});

tippy('#info-transcript', {
    content: 'Update your last transcript with a new one.',
    animateFill: true,
    allowHTML: true
});

const subMenu = document.createElement("ul");

const aboutEl = document.createElement("li");
const experienceEl = document.createElement("li");
const workEl = document.createElement("li");
const contactEl = document.createElement("li");

const aboutAnch = document.createElement("a");
const experienceAnch = document.createElement("a");
const workAnch = document.createElement("a");
const contactAnch = document.createElement("a");

aboutEl.appendChild(aboutAnch);
experienceEl.appendChild(experienceAnch);
workEl.appendChild(workAnch);
contactEl.appendChild(contactAnch);

aboutAnch.href = "#about";
experienceAnch.href = "#experience";
workAnch.href = "#work";
contactAnch.href = "#contact";

aboutAnch.classList.add("text-white");
experienceAnch.classList.add("text-white");
workAnch.classList.add("text-white");
contactAnch.classList.add("text-white");

aboutAnch.innerText = "About";
experienceAnch.innerText = "Experience";
workAnch.innerText = "Work";
contactAnch.innerText = "Contact";

aboutEl.classList.add("px-2", "py-2")
experienceEl.classList.add("px-2", "py-2")
workEl.classList.add("px-2", "py-2")
contactEl.classList.add("px-2", "py-2")

subMenu.classList.add("flex", "flex-col", "px-1", "divide-y", "divide-white", "divide-opacity-20");
subMenu.appendChild(aboutEl);
subMenu.appendChild(experienceEl);
subMenu.appendChild(workEl);
subMenu.appendChild(contactEl);

tippy('#main-menu', {
    content: subMenu.outerHTML,
    hideOnClick: "toggle",
    trigger: "click",
    interactive: true,
    animateFill: true,
    allowHTML: true
});