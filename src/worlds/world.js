/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(function (require) {

    "use strict";

    function World() {
        this.entityList = [];
        this.length = this.entityList.length;
        this.current = -1;
        this.width = 1000;
        this.height = 1000;
        this.Player = {};
    }

    World.prototype.addEntity = function(entitiy){
        this.length++;
        this.entityList.push(entitiy);
        this.sort();
        return this.entityList;
    };

    World.prototype.update = function(time){

        while(this.next()){
            var el = this.getCurrent();
            el.update(time);

            if(el.pos.x - el.radius < 0) {el.pos.x = el.radius;}
            // if(el.pos.x + el.radius > this.Playground.width) {el.pos.x = this.Playground.width - el.radius;}

            if(el.pos.y - el.radius < 0) {el.pos.y = el.radius;}
            // if(el.pos.y + el.radius > this.Playground.height) {el.pos.y = this.Playground.height - el.radius;}
        }
    };

    World.prototype.render = function (ctx) {
//        if(this.Playground !== null)
            // this.Playground.render(ctx);
    };

    World.prototype.setPlayer = function(player){
        this.addEntity(player);
        this.Player = player;
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
        if (a.length === 0) {return [];}

        var left = [], right = [], pivot = a[0];

        for (var i = 1; i < a.length; i++) {
            (a[i].z < pivot.z) ? left.push(a[i]) : right.push(a[i]);
        }

        return qsortRec(left).concat(pivot, qsortRec(right));
    }

    return World;
});
