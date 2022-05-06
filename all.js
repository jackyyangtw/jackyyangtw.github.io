$(document).ready(function () {
    //navbar滑動效果
    const navbarHeight = document.querySelector(".navbar").clientHeight;
    $(".scroll-to-anchor").click(function (e) {
        e.preventDefault();
        var target = $(this).attr("href");
        var targetPos = $(target).offset().top;
        $("html").animate({ scrollTop: targetPos - navbarHeight }, 500);
    });
    // progress bar animation
    var showSkill = false;
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        var skillTop = $("#skills").position().top;
        if (skillTop <= scrollTop + windowHeight / 8 && !showSkill) {
            showSkill = true;
            $(".progress-bar").each(function () {
                let thisValue = $(this).data("progress");
                $(this).css("width", thisValue + "%");
            });
        }
        var scrollPos = $(window).scrollTop();
        $(".animated_fadeIn").each(function () {
            var thisPos = $(this).offset().top;
            if (thisPos <= windowHeight / 1.5 + scrollPos) {
                $(this).addClass("fadeIn");
            }
        });
    });
});

function changeNavBarBg() {
    const header = document.querySelector(".header");
    const navbar = document.querySelector(".navbar");
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };
    const handler = function (entries) {
        const [entry] = entries;
        if (!entry.isIntersecting) {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        } else {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        }
    };
    let observer = new IntersectionObserver(handler, options);
    observer.observe(header);
}
if (screen.width >= 992) {
    changeNavBarBg();
}

function scrollToTop() {
    const logo = document.querySelectorAll(".scroll_top");
    logo.forEach((el) => {
        el.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    });
}
scrollToTop();

const navMobileArrow = document.querySelector(".navbar__arrow");
const navMobileContent = document.querySelector(".navbar__mobile-content");
const mavMobile = document.querySelector(".navbar__mobile");
const navMobileLogo = document.querySelector(".navbar__mobile-logo");
let isArrowClick = false;
const slideDown = (elem) => {
    elem.style.height = `${elem.scrollHeight + 1}px`;
};
const slideUp = (elem) => (elem.style.height = `0px`);

navMobileLogo.addEventListener("click", function (e) {
    isArrowClick = false;
    e.stopImmediatePropagation();
    e.preventDefault();
    slideUp(navMobileContent);
    navMobileArrow.style.transform = "rotate(0deg)";
});
mavMobile.addEventListener("click", function () {
    isArrowClick = !isArrowClick;
    if (isArrowClick && navMobileArrow && navMobileContent) {
        navMobileArrow.style.transform = "rotate(-180deg)";
        slideDown(navMobileContent);
    } else {
        navMobileArrow.style.transform = "rotate(0deg)";
        slideUp(navMobileContent);
    }
});
