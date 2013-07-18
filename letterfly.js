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

    function Animation(el, durationSeconds){
        this.el = el;
        this.originalText = el.textContent;
        this.text = this.originalText;
        this.durationSeconds = durationSeconds;
        this.index = 0;

        var getBinaryByteString = function(bytes) {
            var bits;
            var byteStrings = [];
            var getBits = function (b) {
                var bits = [];
                var bit = false;
                var val;
                for (var i = 7; i >= 0; i--) {
                    val = Math.pow(2, i);
                    bit = (b >= val);
                    if (bit) {
                        b -= val;
                    }
                    bits[7 - i] = bit ? 1 : 0;
                }
                return bits;
            };
            for (var i = 0; i < bytes.length; i++) {
                bits = getBits(bytes[i]);
                byteStrings.push(bits.join(''));
            }
            return byteStrings.join(' ');
        };

        var getHexByteString = function (bytes) {

        };

        var getHex = function(b) {

        };

        var getBytes = function (str) {
            var bytes = [];
            var c;
            for (var i = 0; i < str.length; i++) {
                c = str.charCodeAt(i);
                bytes.push(c);
            }
            return bytes;
        };

        var updateText = function () {
            var index = ++this.index;
            var clearString = this.originalText.substr(index);
            var byteString = this.originalText.substr(0, index);
            var bytes = getBytes(byteString);
            this.el.textContent = clearString + bytes.join('');
            if (index < (this.originalText.length - 1)) {
                setTimeout(updateText.bind(this), 1000);
            }
        };

        this.start = function () {
            this.originalBytes = getBytes(this.originalText);
            this.el.textContent = getBinaryByteString(this.originalBytes);
            this.startTime = new Date();
            //setTimeout(updateText.bind(this), 100);
        };
    }

    function letterflown(args) {
        var el = args.target;
        //removeClass(el, 'flying');
        console.log(el.nodeName + " letterflown");
    }

    var lfElements = document.querySelectorAll(".letterfly");
    var el, i;
    for (i = 0; i < lfElements.length; i++) {
        el = lfElements[i];
        el.addEventListener('transitionend', letterflown, true);
        addClass(el, 'flying');
        var animation = new Animation(el, 2);
        animation.start();
        console.log(el.nodeName + " letterflying");
    }
})();