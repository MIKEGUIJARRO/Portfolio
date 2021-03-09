import lax from 'lax.js';

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