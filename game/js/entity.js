/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(['game/js/vector.js', 'game/js/renderer.js', 'game/js/input.js'], function (Vector, RenderControl, Input) {
    
    "use strict";
    
    function Entity(x, y, width, height) {
        this.pos = new Vector(x || 0, y || 0);
        this.velocity = new Vector(0, 0);
        this.width = width || 100;
        this.height = height || 100;
    }
    
    Entity.prototype.update = function(time) {
        
    };
    
    Entity.prototype.render = function(ctx) {
        
    };
    
    Entity.prototype.getCenter = function (){
        return new Vector(this.width / 2, this.height / 2);
        
    };
    
    return Entity;
});