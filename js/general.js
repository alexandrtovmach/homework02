/**
 * Created by Alexandr on 07.07.2017.
 */
function init() {
    document.getElementsByClassName('c_aside')[0].addEventListener('click', showSideBar);
}
var phase = 0;
function showSideBar() {
    var element = document.getElementsByClassName('c_aside')[0]
    if (!phase) {
        element.firstElementChild.style.left = '0px';
        phase = 1;
    } else {
        event.target.parentElement.firstElementChild.style.left = '';
        phase = 0;
    }
}