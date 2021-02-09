import tippy from 'tippy.js';
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