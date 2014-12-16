/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(['game/js/vectorFactory.js'], function (VectorFactory) {
    
    "use strict";

    /*  
     *  @parma {number} x
     */
    function createElement(x, y, z, w, h){
        var pos = VectorFactory.createVector(x, y),
            velocity,
            zIndex = z,
            width = w,
            height = h,
            MAXSPEED = 1;

        function update(Input, canvas){
            var x = (Input.left() ? -1 : 0) + (Input.right() ? 1 : 0),
                y = (Input.up() ? -1 : 0) + (Input.down() ? 1 : 0);
            velocity = VectorFactory.createVector(x, y);
            
            if(velocity.length() !== 0) {
                // angle = velocity.angle();
                velocity.normalize();
                pos.add(velocity.mul(MAXSPEED * zIndex));
                
            }
            if(pos.getX() < 0){
                pos.setX(0);
            }
            if(pos.getX() > canvas.width - width){
                pos.setX(canvas.width - width);
            }
            if(pos.getY() < 0){
                pos.setY(0);
            }
            if(pos.getY() > canvas.height - height){
                pos.setY(canvas.height - height);
            }
        }
        
        function setPosition(vector){
            pos = vector;
        }
        
        function setZIndex(z){
            zIndex = z;
        }
        
        return {
            getPosition: function () {
                return pos;
            },
            getX: function(){
                return pos.getX();
            },
            getY: function(){
                return pos.getY();
            },
            getWidth: function(){
                return width;
            },
            getHeight: function(){
                return height;
            },
            getZIndex: function () {
                return zIndex;
            },
            getDimensions: function() {
                return [width, height];
            },
            setPosition: setPosition,
            setZIndex: setZIndex,
            setVelocity: function(newVel){
                velocity = newVel;
            },
            update: update
        };
    
    }

    return {
        createElement: createElement
    };
    
});