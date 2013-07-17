/**
 * Created with JetBrains WebStorm.
 * User: terickson
 * Date: 7/17/13
 * Time: 8:12 AM
 * To change this template use File | Settings | File Templates.
 */
(function () {
    function classNames(el) {
        return el.className.split(' ');
    }

    function indexOfItem(arr, item) {
        var index = -1;
        for (var i = 0; i < arr.length; i++){
            if (arr[i] == item) {
                index = i;
            }
        }
        return index;
    }

    function addClass(el, className) {
        var names = classNames(el);
        if (indexOfItem(names, className) !== -1) {
            return;
        }
        names.push(className);
        el.className = names.join(' ');
    }

    function removeClass(el, className) {
        if (el === undefined || el === null) {
            return;
        }
        var names = el.className.split(' ');
        var index = -1;
        for (var i = 0; i < names.length; i++){
            if (names[i] == className) {
                index = i;
            }
        }
        if (index === -1){
            return;
        }
        names.splice(index, 1);
        el.className = names.join(' ');
    }



    function getBytes(text) {

    }

    function animateLetter(el, original, startTime, durationSeconds) {

    }

    function letterflown(args) {
        var el = args.target;
        removeClass(el, 'flying');
        console.log(el.nodeName + " letterflown");
    }

    var lfElements = document.querySelectorAll(".letterfly");
    var el, i;
    for (i = 0; i < lfElements.length; i++) {
        el = lfElements[i];
        el.addEventListener('transitionend', letterflown, true);
        addClass(el, 'flying');
        console.log(el.nodeName + " letterflying");
    }
})();