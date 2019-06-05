window.onload = function() {
    var pageHeight = document.documentElement.clientWidth * 1.49 + 'px';
    // document.querySelector('.background-wrap') ? document.querySelector('.background-wrap').style.height = pageHeight : '';

    if (window.screen.width >= 360) {
        // // svetlana page
        // document.querySelector('.background-wrap') ? document.querySelector('.background-wrap').style.height = document.documentElement.clientWidth * 1.75 + 'px' : '';
        // cv page
        document.querySelector('.contacts-page-wrap') ? document.querySelector('.contacts-page-wrap').style.height = document.documentElement.clientWidth * 4.1 + 'px' : '';
        // mobile bg height & scroll
        document.querySelector('.main').style.height = document.documentElement.clientWidth * 1.75 + 'px';
        document.querySelector('.first-page') ? window.scrollTo(0, 610) : window.scrollTo(0, 310);
        
    }
    if (window.screen.width >= 414) {
        // mobile bg height & scroll
        document.querySelector('.main').style.height = document.documentElement.clientWidth * 1.75 + 'px';
        document.querySelector('.first-page') ? window.scrollTo(0, 610) : window.scrollTo(0, 310);
        
    }
    if (window.screen.width >= 640) {
        // cv page
        document.querySelector('.contacts-page-wrap') ? document.querySelector('.contacts-page-wrap').style.height = document.documentElement.clientWidth * 1.7 + 'px' : '';
        // mobile bg height & scroll
        document.querySelector('.main').style.height = document.documentElement.clientWidth * 0.5 + 'px';
        document.querySelector('.first-page') ? window.scrollTo(0, 560) : window.scrollTo(0, 170);
    }
    if (window.screen.width >= 768 && window.screen.width < 1024) {
        // // svetlana page
        // document.querySelector('.background-wrap') ? document.querySelector('.background-wrap').style.height = document.documentElement.clientWidth * 1.6 + 'px' : '';
        // cv page
        document.querySelector('.contacts-page-wrap') ? document.querySelector('.contacts-page-wrap').style.height = document.documentElement.clientWidth * 2.7 + 'px' : '';
        // mobile bg height & scroll
        document.querySelector('.main').style.height = document.documentElement.clientWidth * 1.75 + 'px';
        document.querySelector('.first-page') ? window.scrollTo(0, 970) : window.scrollTo(0, 510);
    }
    if (window.screen.width >= 1024) {
        // cv page
        document.querySelector('.contacts-page-wrap') ? document.querySelector('.contacts-page-wrap').style.height = document.documentElement.clientWidth * 1.7 + 'px' : '';
    }
    if (window.screen.width >= 1280) {
        // // svetlana page
        // document.querySelector('.background-wrap') ? document.querySelector('.background-wrap').style.height = document.documentElement.clientWidth * 1.6 + 'px' : '';
        // cv page
        document.querySelector('.contacts-page-wrap') ? document.querySelector('.contacts-page-wrap').style.height = document.documentElement.clientWidth * 1.5 + 'px' : '';
    }
    if (window.screen.width >= 1366) {
        document.querySelector('.contacts-page-wrap') ? document.querySelector('.contacts-page-wrap').style.height = document.documentElement.clientWidth * 1.3 + 'px' : '';
    }
    if (window.screen.width >= 1920) {
        // // svetlana page
        // document.querySelector('.background-wrap') ? document.querySelector('.background-wrap').style.height = document.documentElement.clientWidth * 1.5 + 'px' : '';
        // cv page
        document.querySelector('.contacts-page-wrap') ? document.querySelector('.contacts-page-wrap').style.height = document.documentElement.clientWidth * 1.1 + 'px' : '';
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
                if (svetlanaBackground.getBoundingClientRect().y >= -(document.querySelector('.background-wrap').offsetHeight - document.documentElement.clientHeight - 15)) {                
                    if (allowScroll === true) {
                        plusSize -= 0.2;
                    }                
                } else {
                    plusSize = 0;
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