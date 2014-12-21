/* jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/* global define */
define(function(require){

    "use strict";

    var Renderer = {
        _canvas: null,
        _ctx: null,
        World: {},

        render: function() {
            this.World.render(this._ctx);
        },
        
        renderPause: function() {
            
        },

        setDOM: function (canvas) {
            this._canvas = canvas[0];
            this._ctx = canvas[0].getContext("2d");
        },

        setWorld: function (world){
            this.World = world;
        },
        
        init: function() {
            
        },
    };

    return Renderer;
});
