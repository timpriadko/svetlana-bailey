window.onload = function() {
    var pageHeight = document.documentElement.clientWidth * 1.49 + 'px';
    document.querySelector('.background-wrap') ? document.querySelector('.background-wrap').style.height = pageHeight : '';

    if (window.screen.width >= 360) {
        // svetlana page
        document.querySelector('.background-wrap') ? document.querySelector('.background-wrap').style.height = document.documentElement.clientWidth * 1.75 + 'px' : '';
        // cv page
        document.querySelector('.contacts-page-wrap') ? document.querySelector('.contacts-page-wrap').style.height = document.documentElement.clientWidth * 4.1 + 'px' : '';
    }
    if (window.screen.width >= 640) {
        // cv page
        document.querySelector('.contacts-page-wrap') ? document.querySelector('.contacts-page-wrap').style.height = document.documentElement.clientWidth * 1.7 + 'px' : '';
    }
    if (window.screen.width >= 768) {
        // svetlana page
        document.querySelector('.background-wrap') ? document.querySelector('.background-wrap').style.height = document.documentElement.clientWidth * 1.6 + 'px' : '';
        // cv page
        document.querySelector('.contacts-page-wrap') ? document.querySelector('.contacts-page-wrap').style.height = document.documentElement.clientWidth * 2.7 + 'px' : '';
    }
    if (window.screen.width >= 1024) {
        // cv page
        document.querySelector('.contacts-page-wrap') ? document.querySelector('.contacts-page-wrap').style.height = document.documentElement.clientWidth * 1.7 + 'px' : '';
    }
    if (window.screen.width >= 1280) {
        // svetlana page
        document.querySelector('.background-wrap') ? document.querySelector('.background-wrap').style.height = document.documentElement.clientWidth * 1.6 + 'px' : '';
        // cv page
        document.querySelector('.contacts-page-wrap') ? document.querySelector('.contacts-page-wrap').style.height = document.documentElement.clientWidth * 1.5 + 'px' : '';
    }
    if (window.screen.width >= 1366) {
        document.querySelector('.contacts-page-wrap') ? document.querySelector('.contacts-page-wrap').style.height = document.documentElement.clientWidth * 1.3 + 'px' : '';
    }
    if (window.screen.width >= 1920) {
        // svetlana page
        document.querySelector('.background-wrap') ? document.querySelector('.background-wrap').style.height = document.documentElement.clientWidth * 1.5 + 'px' : '';
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
    var interval = 1000 / 35;
    var plusSize = 0;
    var m_top = 0;

    
    setInterval(function() {
        if (scrollTopArea) {
            if (svetlanaBackground.getBoundingClientRect().y <= 0) {
                plusSize += 0.2;
            } else {
                plusSize = 0;
            }
        }
        
        if (scrollBottomArea) {
            if (svetlanaBackground.getBoundingClientRect().y >= -(document.querySelector('.background-wrap').style.height.slice(0, -2) -document.documentElement.clientHeight)) {
                plusSize -= 0.2;
            } else {
                plusSize = 0;
            }
        }

        m_top = m_top + plusSize;
        svetlanaBackground ? svetlanaBackground.style.marginTop = m_top + 'px' : '';
                
    }, interval);

    // Scroll handler
    function scrollHandler(e) {
        scrollTopArea = e.pageY < scrollAreaHeight;
        scrollBottomArea = e.pageY > document.documentElement.clientHeight - scrollAreaHeight;
        
        if (!scrollTopArea && !scrollBottomArea) {
            plusSize = 0;
        }
    }
    
    // Stop scroll handler
    function stopScrollHandler(e) {
        console.log(e.pageY)
        if (e.pageY < 0 && !scrollTopArea) {
            plusSize = 0;
            console.log('+')
        }
        
    }
}