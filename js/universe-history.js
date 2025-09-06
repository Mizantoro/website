// https://stackoverflow.com/questions/18481308/set-mouse-wheel-to-horizontal-scroll-using-css
const item = document.documentElement;

window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) item.scrollLeft += 100;
    else item.scrollLeft -= 100;
});
