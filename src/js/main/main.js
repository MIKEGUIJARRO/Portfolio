import tippy, { followCursor } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import lax from 'lax.js';


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

window.onload = function () {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
        return window.scrollY;
    });
    const headerHeight = document.getElementById("navbar").offsetHeight;

    // Add animation bindings to elements
    lax.addElements(
        '.card',
        {
            scrollY: { //Driver name
                translateX: [
                    [`elInY`, `elCenterY - ${headerHeight}`, `elOutY - ${headerHeight}`],
                    ['-screenWidth/2', '0', 'screenWidth/2'],
                    {
                        easing: 'easeInOutQuart',
                    }
                ],
                opacity: [
                    [`elInY`, `elCenterY - ${headerHeight}`, `elOutY - ${headerHeight}`],
                    [0, 1, 0],
                    {
                        easing: 'easeInOutCubic'
                    }
                ],
                "box-shadow": [
                    [`elInY`, `elCenterY - ${headerHeight}`, `elOutY - ${headerHeight}`],
                    //["elInY+200", "elCenterY", "elOutY-200"],
                    [50, 0, 50],
                    {
                        easing: 'easeInOutQuint',
                        cssFn: (val) => {
                            return `${val}px ${val}px ${val}px rgba(0,0,0,0.5)`
                        }
                    }
                ],
            }
        },
    );
    //Padding of parent element
    const paddingBot = 24;
    lax.addElements(
        '#purpose',
        {
            scrollY: { //Driver name
                opacity: [
                    [`elInY + elHeight`, `elCenterY`],
                    [0, 1],
                    {
                        easing: 'easeInCubic'
                    }
                ],
            }
        },
    ); 

    lax.addElements(
        '#footer-text',
        {
            scrollY: { //Driver name
                translateY: [ // Padding 24
                    [`elInY - elHeight * 10`, `elInY + elHeight + ${paddingBot}`],
                    [`-elHeight * 5`, 0],
                    {
                        easing: 'easeInQuad'
                    }
                ],
            }
        },
    );
} 