/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(function () {

    "use strict";

    function List() {
        this.objects = [];
        this.length = 0;
        this.current = -1;
    }

    List.prototype.add = function (o) {
        if(this.objects.push(o)){
            this.length++;
            return true;
        }
        return false;
    };

    List.prototype.delete = function (o) {
        if(o in this.objects){
            if(this.objects.splice(this.objects.indexOf(o, 1))){
                this.length--;
                return true;
            }
            return false;
        }
        return true;
    };

    /*iterator*/
    List.prototype.next = function() {
        if(this.current + 1 < this.objects.length){
            this.current++;
            return true;
        }
        this.current = -1;
        return false;
    };

    List.prototype.getCurrent = function() {
       return this.objects[this.current];
    };

    return List;

});
