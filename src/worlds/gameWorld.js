/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(function (require) {

    "use strict";

    function GameWorld() {
        this.entityList = [];
        this.length = this.entityList.length;
        this.current = -1;
        this.width = 1000;
        this.height = 1000;
        this.Playground = {};

    }

    GameWorld.prototype.addEntity = function(entitiy){
        this.length++;
        return this.entityList.push(entitiy);
    };

    GameWorld.prototype.update = function(time){

        this.sort();

        while(this.next()){
            var el = this.getCurrent();
            el.update(time);

            if(el.pos.x - el.radius < 0) {el.pos.x = el.radius;}
            if(el.pos.x + el.radius > this.Playground.width) {el.pos.x = this.Playground.width - el.radius;}

            if(el.pos.y - el.radius < 0) {el.pos.y = el.radius;}
            if(el.pos.y + el.radius > this.Playground.height) {el.pos.y = this.Playground.height - el.radius;}
        }
    };

    GameWorld.prototype.setPlayground = function(pg){
        this.Playground = pg;
    };

    GameWorld.prototype.sort = function(){
        this.entityList = qsortRec(this.entityList);
    };

    /*iterator*/
    GameWorld.prototype.next = function() {
        this.current++;
        if(this.current < this.entityList.length){
          return true;
        }
        this.current = -1;
        return false;
    };
    GameWorld.prototype.getCurrent = function() {
       return this.entityList[this.current];
    };

    // Rekursiver QuickSort, der a nach z-Index ordnet.
    function qsortRec(a){
        if (a.length === 0) {return [];}

        var left = [], right = [], pivot = a[0];

        for (var i = 1; i < a.length; i++) {
            a[i].z < pivot.z ? left.push(a[i]) : right.push(a[i]);
        }

        return qsortRec(left).concat(pivot, qsortRec(right));
    }

    return GameWorld;
});