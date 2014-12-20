/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(['./vector2', 'events/input'], function (Vector2, Input) {

    "use strict";

    var Physics = {
        
        World: {},
    
        createVector2: function(x, y) {
            return new Vector2(x, y);
        },
        
        update: function (timeSpan) {
            if(this.World.Player){
                var p = this.World.Player;
                
                var i = this.createVector2(
                    (Input.isPressed(Input.LEFT) ? -1 : 0) + (Input.isPressed(Input.RIGHT) ? 1 : 0),
                    (Input.isPressed(Input.UP) ? -1 : 0) + (Input.isPressed(Input.DOWN) ? 1 : 0));

        //        i.normalize(); // AUSPROBIEREN!
                if(i.lengthSquare() !== 0){
                    this.sollVelocity.add(new Vector2(i.x, i.y).div(this.VELOCITY_DAMP));
                }else{
                    this.sollVelocity.sub(new Vector2(this.sollVelocity.x, this.sollVelocity.y).div(this.VELOCITY_DAMP)); // Jedes Mal was von der Geschwindigkeit abziehen
                }

                if(this.sollVelocity.lengthSquare() < 0.1 && i.length() === 0){
                    this.sollVelocity.mul(0);
                }else if(this.sollVelocity.length() > this.MAX_SPEED){
                    this.sollVelocity.div(this.sollVelocity.length() / this.MAX_SPEED);
                }

                var delta = {abs: Math.abs(this.sollVelocity.length() - this.istVelocity.length()),
                             x: this.sollVelocity.x - this.istVelocity.x,
                             y: this.sollVelocity.y - this.istVelocity.y};

                if(delta.abs > 0.1){
                    this.istVelocity.add(new Vector2(delta.x, delta.y).div(this.VELOCITY_DAMP)); // Beschleunigen
                }else{
                    this.istVelocity = this.sollVelocity;
                }


                if(this.istVelocity.lengthSquare() !== 0){
                    this.sollAngle = this.istVelocity.angle();
                    this.pos.add(new Vector2(this.istVelocity.x, this.istVelocity.y).mul(time));
                }

            }
        },
        
        setWorld: function (world) {
            this.World = world;
        },
        
    };

    return Physics;
});
