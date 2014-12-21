/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(['lists/list'], function (List) {

    "use strict";

    function EntityList() {
        List.call(this);
    }

    EntityList.prototype = Object.create(List.prototype, EntityList.prototype);
    EntityList.prototype.constructor = EntityList;


    EntityList.prototype.sort = function(){
        this.objects = qsortRec(this.objects);
    };

    EntityList.prototype.render = function (ctx) {
        while(this.next()){
            this.getCurrent().render(ctx);
        }
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


    return EntityList;

});
