/* jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/* global define */
define(function(){

    "use strict";

    var listeners = {},
        eventManager = {};

    eventManager.trigger = function(name) {
        for(var i in listeners[name]){
            listeners[name][i]["callBack"](listeners[name][i]["context"]);
        }
    };

    eventManager.on = function(name, cB, ctx) {
        if  (!(name in listeners)) {
            listeners[name] = [];
        }
        return listeners[name].push({callBack: cB, context: ctx});
    };

    eventManager.off = function(name, index){
        listeners[name].slice(index, 1);
    };

    return eventManager;

});
