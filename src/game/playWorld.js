/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(['renderer', 'eventManager', 'entityFactory', 'vector2'], function (RenderControl, EventManager, EntityFactory, Vector2) {

    "use strict";

    function World() {
        this.entityList = [];
        this.length = this.entityList.length;
        this.current = -1;
        this.width = 0;
        this.height = 0;
        this.Playground = {};

        this.Player = EntityFactory.createEntity('SimpleShape', {x: 1000, y: 1000, z: 10, width: 75, height: 30, color: "#0029d4"});
        // this.offset = new Vector2(0, 0);
    }

    World.prototype.init = function(width, height) {
        this.addEntity(this.Player);
        this.Playground = EntityFactory.createEntity('Playground', {width: width, height: height, z: -1000, color: "#111"});
        this.width = this.Playground.width;
        this.height = this.Playground.height;

        this.addEntity(EntityFactory.createEntity('StaticShape', {x:  100, y: 1000, width: 50, height: 2000, z: 5, color: "#333"}))
        this.addEntity(EntityFactory.createEntity('StaticShape', {x:  300, y: 1000, width: 50, height: 2000, z: 5, color: "#333"}))
        this.addEntity(EntityFactory.createEntity('StaticShape', {x:  500, y: 1000, width: 50, height: 2000, z: 5, color: "#333"}))
        this.addEntity(EntityFactory.createEntity('StaticShape', {x:  700, y: 1000, width: 50, height: 2000, z: 5, color: "#333"}))
        this.addEntity(EntityFactory.createEntity('StaticShape', {x:  900, y: 1000, width: 50, height: 2000, z: 5, color: "#333"}))
        this.addEntity(EntityFactory.createEntity('StaticShape', {x: 1100, y: 1000, width: 50, height: 2000, z: 5, color: "#333"}))
        this.addEntity(EntityFactory.createEntity('StaticShape', {x: 1300, y: 1000, width: 50, height: 2000, z: 5, color: "#333"}))
        this.addEntity(EntityFactory.createEntity('StaticShape', {x: 1500, y: 1000, width: 50, height: 2000, z: 5, color: "#333"}))
        this.addEntity(EntityFactory.createEntity('StaticShape', {x: 1700, y: 1000, width: 50, height: 2000, z: 5, color: "#333"}))
        this.addEntity(EntityFactory.createEntity('StaticShape', {x: 1900, y: 1000, width: 50, height: 2000, z: 5, color: "#333"}))

        this.addEntity(EntityFactory.createEntity('StaticShape', {x: 1000, y:   100, width: 2000, height: 50, z: 5, color: "#555"}))
        this.addEntity(EntityFactory.createEntity('StaticShape', {x: 1000, y:   300, width: 2000, height: 50, z: 5, color: "#555"}))
        this.addEntity(EntityFactory.createEntity('StaticShape', {x: 1000, y:   500, width: 2000, height: 50, z: 5, color: "#555"}))
        this.addEntity(EntityFactory.createEntity('StaticShape', {x: 1000, y:   700, width: 2000, height: 50, z: 5, color: "#555"}))
        this.addEntity(EntityFactory.createEntity('StaticShape', {x: 1000, y:   900, width: 2000, height: 50, z: 5, color: "#555"}))
        this.addEntity(EntityFactory.createEntity('StaticShape', {x: 1000, y:  1100, width: 2000, height: 50, z: 5, color: "#555"}))
        this.addEntity(EntityFactory.createEntity('StaticShape', {x: 1000, y:  1300, width: 2000, height: 50, z: 5, color: "#555"}))
        this.addEntity(EntityFactory.createEntity('StaticShape', {x: 1000, y:  1500, width: 2000, height: 50, z: 5, color: "#555"}))
        this.addEntity(EntityFactory.createEntity('StaticShape', {x: 1000, y:  1700, width: 2000, height: 50, z: 5, color: "#555"}))
        this.addEntity(EntityFactory.createEntity('StaticShape', {x: 1000, y:  1900, width: 2000, height: 50, z: 5, color: "#555"}))
    };

    World.prototype.addEntity = function(entitiy){
        this.length++;
        return this.entityList.push(entitiy);
    };

    World.prototype.update = function(time){

        this.sort();

        while(this.next()){
            var el = this.getCurrent();
            el.update(time);

            if(el.pos.x - el.radius < 0) el.pos.x = el.radius;
            if(el.pos.x + el.radius > this.Playground.width) el.pos.x = this.Playground.width - el.radius;

            if(el.pos.y - el.radius < 0) el.pos.y = el.radius;
            if(el.pos.y + el.radius > this.Playground.height) el.pos.y = this.Playground.height - el.radius;
        }
    };

    World.prototype.setPlayground = function(pg){
        this.Playground = pg;
    };

    World.prototype.sort = function(){
        this.entityList = qsortRec(this.entityList);
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

    // Rekursiver QuickSort, der a nach z-Index ordnet.
    function qsortRec(a){
        if (a.length === 0) return [];

        var left = [], right = [], pivot = a[0];

        for (var i = 1; i < a.length; i++) {
            a[i].z < pivot.z ? left.push(a[i]) : right.push(a[i]);
        }

        return qsortRec(left).concat(pivot, qsortRec(right));
    };

    return new World();
});
