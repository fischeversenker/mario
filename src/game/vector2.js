/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(function () {

    "use strict";

    function Vector2 (posX, posY) {

        this.x = posX,
        this.y = posY;
    }

    Vector2.prototype.lengthSquare = function (){
            return (this.x * this.x) + (this.y * this.y);
    }


    Vector2.prototype.length = function(){
        return Math.sqrt(this.lengthSquare()) || 0;
    }

    Vector2.prototype.normalize = function(){
        this.div(this.length());
        return this;
    }

    Vector2.prototype.angle = function(){
        return Math.atan2(this.y, this.x);
    }

    // Start Rechenoperationen
    Vector2.prototype.add = function(vector){
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }

    Vector2.prototype.sub = function(vector){
        this.x -= vector.x;
        this.y -= vector.y;
        return this;
    }

    Vector2.prototype.mul = function(d){
        this.x *= d;
        this.y *= d;
        return this;
    }

    Vector2.prototype.div = function(d){
        if(d !== 0) this.x /= d;
        if(d !== 0) this.y /= d;
        return this;
    }
    // Ende Rechenoperationen


    return Vector2;

});
