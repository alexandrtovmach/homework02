/**
 * Created by Alexandr on 07.07.2017.
 */
function init() {
    document.getElementsByClassName('c_aside')[0].addEventListener('click', showSideBar);
	document.addEventListener('click', function (event) {
		if ((!phaseSmallMenu)||(event.target == document.getElementsByClassName('h_panelBar')[0])||
		(event.target == document.getElementsByTagName('INPUT')[0])||
		(event.target == document.getElementsByClassName('h_search')[0])) {return}
		document.getElementsByClassName('h_panel')[0].style.display = 'none';
		phaseSmallMenu = 0;
	});
}

var phaseSideBar = 0;
var phaseSmallMenu = 0;

function showSideBar() {
    var element = document.getElementsByClassName('c_aside')[0]
    if (!phaseSideBar) {
        element.firstElementChild.style.left = '0px';
        phaseSideBar = 1;
    } else {
        element.firstElementChild.style.left = '';
        phaseSideBar = 0;
    }
}
function smallMenuShow() {
	var elem = document.getElementsByClassName('h_panelBar')[0];
	elem.previousElementSibling.style.display = 'block';
	elem.previousElementSibling.style.top = elem.getBoundingClientRect().top + 40 + 5 + 'px';
	elem.previousElementSibling.style.right = '5px';
	phaseSmallMenu = 1;
}