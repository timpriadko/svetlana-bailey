window.onload = function() {
    var pageHeight = document.documentElement.clientWidth * 1.49 + 'px';
   

    if (window.screen.width >= 360 && window.screen.height >= 640) {
        // cv page
        document.querySelector('.contacts-page-wrap') ? document.querySelector('.contacts-page-wrap').style.height = document.documentElement.clientWidth * 4.1 + 'px' : '';
        // mobile bg height & scroll
        document.querySelector('.first-page') ? window.scrollTo(0, 1430) : window.scrollTo(0, 310);

    }
    if (window.screen.width >= 360 && window.screen.height >= 720) {
        document.querySelector('.first-page') ? window.scrollTo(0, 1430) : window.scrollTo(0, 310);

    }
    if (window.screen.width >= 414) {
        // mobile bg height & scroll
        document.querySelector('.first-page') ? window.scrollTo(0, 1430) : window.scrollTo(0, 310);

    }
    if (window.screen.width >= 640) {
        // mobile bg height & scroll
        document.querySelector('.first-page') ? window.scrollTo(0, 1430) : window.scrollTo(0, 170);
    }
    if (window.screen.width >= 720) {
        // mobile bg height & scroll
        document.querySelector('.first-page') ? window.scrollTo(0, (1430)) : window.scrollTo(0, 170);
    }
    if (window.screen.width >= 768 && window.screen.width < 1024) {
        // cv page
        document.querySelector('.contacts-page-wrap') ? document.querySelector('.contacts-page-wrap').style.height = document.documentElement.clientWidth * 2.7 + 'px' : '';
        // mobile bg height & scroll
        document.querySelector('.main').style.height = document.documentElement.clientWidth * 1.75 + 'px';
        document.querySelector('.first-page') ? window.scrollTo(0, 1430) : window.scrollTo(0, 510);
    }
    if (window.screen.width >= 1024) {
        document.querySelector('.first-page') ? window.scrollTo(0, 1430) : '';
        // cv page
        document.querySelector('.contacts-page-wrap') ? document.querySelector('.contacts-page-wrap').style.height = document.documentElement.clientWidth * 1.7 + 'px' : '';
    }
    if (window.screen.width >= 1280) {
        document.querySelector('.first-page') ? window.scrollTo(0, 1430) : '';
        // cv page
        document.querySelector('.contacts-page-wrap') ? document.querySelector('.contacts-page-wrap').style.height = document.documentElement.clientWidth * 1.5 + 'px' : '';
    }
    if (window.screen.width >= 1366) {
        document.querySelector('.first-page') ? window.scrollTo(0, 1430) : '';
        document.querySelector('.contacts-page-wrap') ? document.querySelector('.contacts-page-wrap').style.height = document.documentElement.clientWidth * 1.3 + 'px' : '';
    }
    if (window.screen.width >= 1920) {
        document.querySelector('.first-page') ? window.scrollTo(0, 1430) : '';
        // cv page
        document.querySelector('.contacts-page-wrap') ? document.querySelector('.contacts-page-wrap').style.height = document.documentElement.clientWidth * 1.1 + 'px' : '';
    }

    function firstPageResolutionMultiplier() {
        if (window.screen.width >= 1920) {
            return -50;
        }
        if (window.screen.width >= 1600) {
            return -500;
        }
        if (window.screen.width >= 1280) {
            return -800;
        }
        if (window.screen.width >= 1024) {
            return -900;
        }
    }

    window.addEventListener('mousemove', scrollHandler, false);
    window.addEventListener('mouseout', stopScrollHandler, false);

    //UI
    var svetlanaBackground = document.querySelector('.background-wrap');
    var cvPage = document.querySelector('.contacts-page-wrap');
    var scrollAreaHeight = document.documentElement.clientHeight / 10;


    var scrollTopArea, scrollBottomArea;
    var allowScroll = true;
    var interval = 1000 / 35;
    var plusSize = 0;
    var m_top = 0;


    if (window.screen.width >= 1024) {
        setInterval(function() {
            if (scrollTopArea) {
                if (svetlanaBackground.getBoundingClientRect().y <= 0 - 20) {
                    if (allowScroll === true) {
                        plusSize += 0.2;
                    }

                } else {
                    plusSize = 0;
                }
            }

            if (scrollBottomArea) {
                if (document.querySelector('.first-page')) {
                    if (svetlanaBackground.getBoundingClientRect().y >= -(document.querySelector('.background-wrap').offsetHeight - document.documentElement.clientHeight + firstPageResolutionMultiplier())) {
                        if (allowScroll === true) {
                            plusSize -= 0.2;
                        }
                    } else {
                        plusSize = 0;
                    }
                } else {
                    if (svetlanaBackground.getBoundingClientRect().y >= -(document.querySelector('.background-wrap').offsetHeight - document.documentElement.clientHeight - 17)) {
                        if (allowScroll === true) {
                            plusSize -= 0.2;
                        }
                    } else {
                        plusSize = 0;
                    }
                }
            }

            m_top = m_top + plusSize;
            svetlanaBackground ? svetlanaBackground.style.marginTop = m_top + 'px' : '';

        }, interval);
    }

    // Scroll handler
    function scrollHandler(e) {
        scrollTopArea = e.pageY < scrollAreaHeight;
        scrollBottomArea = e.pageY > document.documentElement.clientHeight - scrollAreaHeight;

        if (!scrollTopArea && !scrollBottomArea) {
            plusSize = 0;
            allowScroll = true;
        }
        if (scrollTopArea) {
            allowScroll = true;
        }
        if (scrollBottomArea) {
            allowScroll = true;
        }
    }

    // Stop scroll handler
    function stopScrollHandler(e) {
        if (e.pageY < 0) {
            allowScroll = false;
            plusSize = 0;
        }
        if (e.pageY > document.documentElement.clientHeight) {
            allowScroll = false;
            plusSize = 0;
        }
        if (e.pageX < 0) {
            allowScroll = false;
            plusSize = 0;
        }
        if (e.pageX > document.querySelector('.background-wrap').offsetWidth) {
            allowScroll = false;
            plusSize = 0;
        }
    }
}

window.addEventListener("orientationchange", function() {
    window.location.reload(true);
    // Landscape orientation
    // if (screen.orientation.angle === 90 || screen.orientation.angle === -90) {
    //     if (window.screen.width >= 640) {
    //         console.log('+');
    //         window.location.reload(true);
    //     }
    // }
});