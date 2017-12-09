
/*
 * Settings
 */
var WIDTH = 200;
var HEIGHT = 300;
var OFFWHITE = "#f9fafc";
var BLUE = "#3b79b4";


function Pong(appendToElementId, window, document) {
    
        var element = document.getElementById(appendToElementId);
        var animate = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    
        var canvas = document.createElement("canvas");
        canvas.width = WIDTH;
        canvas.height = HEIGHT;
        canvas.style.borderRadius = '5px';
        canvas.style.border = '2px solid ' + OFFWHITE;
    
        var context = canvas.getContext('2d');
        context.fillStyle = BLUE;
        context.font = "12px sans-serif";
    
        var player = new Player();
        var computer = new Computer();
    
        var ball = new Ball();
    
        var keysDown = {};

        element.appendChild(canvas);
        animate(step);
    
        var keydownEvent = function (event) {
            keysDown[event.keyCode] = true;
        };
        var keyupEvent = function (event) {
            delete keysDown[event.keyCode];
        };
        var elementDestroyed = function (event) {
            window.removeEventListener('keydown', keydownEvent, false);
            window.removeEventListener('keyup', keyupEvent, false);
            window.removeEventListener('DOMNodeRemoved', elementDestroyed, false);
        };
    
        window.addEventListener("keydown", keydownEvent);
        window.addEventListener("keyup", keyupEvent);
        window.addEventListener("DOMNodeRemoved", elementDestroyed);
    
        return element;
    };

