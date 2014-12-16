/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(function () {
    
    "use strict";
    
    function Vector (posX, posY) {
    
        this.x = posX,
        this.y = posY;
    }
    
    Vector.prototype.lengthSquare = function (){
            return (this.x * this.x) + (this.y * this.y);
    }
    
        
    Vector.prototype.length = function(){
        return Math.sqrt(this.lengthSquare()) || 0;
    }

    Vector.prototype.normalize = function(){
        this.div(this.length());
        return this;
    }
    
    Vector.prototype.angle = function(){
        return Math.atan2(this.y, this.x);
    }

    // Start Rechenoperationen
    Vector.prototype.add = function(vector){
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }

    Vector.prototype.sub = function(vector){
        this.x -= vector.x;
        this.y -= vector.y;
        return this;
    }

    Vector.prototype.mul = function(d){
        this.x *= d;
        this.y *= d;
        return this;
    }

    Vector.prototype.div = function(d){
        if(d !== 0) this.x /= d;
        if(d !== 0) this.y /= d;
        return this;
    }
    // Ende Rechenoperationen
        
    
    return Vector;
    
});