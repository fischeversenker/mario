/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(['game/js/eventManager.js'], function (EventManager){

    "use strict";
    
    function Input() {
        
        this._pressed = {};
        
        this.LEFT = 37;
        this.UP = 38;
        this.RIGHT = 39;
        this.DOWN = 40;

    }
    
    Input.prototype.isPressed = function (keyCode) {
        return this._pressed[keyCode];
    };

    Input.prototype.keydown = function (e) {
        if( e.keyCode === this.LEFT || e.keyCode === this.RIGHT || e.keyCode === this.UP || e.keyCode === this.DOWN){
            e.preventDefault();
            this._pressed[e.keyCode] = true;
        }else if(e.keyCode === 32){
            EventManager.trigger('pp');
            e.preventDefault();
        }
    };

    Input.prototype.keyup = function (e) {
        delete this._pressed[e.keyCode];
    };

    Input.prototype.init = function (){
        $(document).keydown(this.keydown.bind(this));
        $(document).keyup(this.keyup.bind(this));
    }

    return new Input();

});