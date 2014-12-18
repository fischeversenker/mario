/* jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/* global define */
define(['physics/vector2'], function(Vector2){

    "use strict";

    var Renderer = {
        _canvas: null,
        _ctx: null,
        Scene: null,

        render: function() {
            this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
            this._ctx.save();
            this._ctx.translate(-(this.Scene.Camera.pos.x - this.Scene.Camera.width / 2), -(this.Scene.Camera.pos.y - this.Scene.Camera.height / 2));
            this.Scene.render(this._ctx);
            this._ctx.restore();
        },
        renderPause: function() {
            this._ctx.clearRect(0,0,this._canvas.width, this._canvas.height);
        },

        init: function (canvas) {
            this._canvas = canvas;
            this._ctx = canvas.getContext("2d");
        },
        setScene: function(scene){
            this.Scene = scene;
        },
    };

    return Renderer;
});
