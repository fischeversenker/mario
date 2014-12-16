/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(['game/js/renderer.js', 'game/js/eventManager.js'], function (RenderControl, eventManager) {
    
    "use strict";
    
    function World() {
        this.entityList = [];
        this.length = this.entityList.length;
        this.current = -1;
        this.size = {x: 2000, y: 2000};
        this.Playground = {};
    }
    
    World.prototype.init = function() {
        
    };
    
    World.prototype.addEntity = function(entitiy){
        this.length++;
        return this.entityList.push(entitiy);
    };
    
    World.prototype.update = function(time){
        for(var i in this.entityList){
            this.entityList[i].update(time);
        }
    };
    
    World.prototype.setPlayground = function(pg){
        this.Playground = pg;
    };
    
    /*iterator*/
    World.prototype.next = function() {
        this.current++;
        if(this.current < this.entityList.length){
          return true;
        }
        this.current = -1;
        return false;
    };
    World.prototype.getCurrent = function() {
       return this.entityList[this.current];
        
    };
    return new World();
});