/* jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/* global define */
define(['vector2'], function(Vector2){

    "use strict";

    var _canvas,
        _ctx,
        World,
        Camera;

    function _render() {
        _ctx.clearRect(0,0,_canvas.width, _canvas.height);
        _ctx.save();
        _ctx.translate(-(Camera.pos.x - Camera.width / 2), -(Camera.pos.y - Camera.height / 2));
        World.Playground.render(_ctx);
        while (World.next()) {
            // World.offset = new Vector2(Camera.pos.x - Camera.width / 2,Camera.pos.y - Camera.height / 2);
            World.getCurrent().render(_ctx);
        }
        _ctx.restore();
    }

    function _renderPause() {
        _ctx.clearRect(100,100,_canvas.width-200, _canvas.height-200);
    }

    return {
        init: function(canvas){
            _canvas = canvas;
            _ctx = canvas.getContext("2d");
        },
        setSurroundings: function(world, cam){
            World = world;
            Camera = cam;
        },
        render: _render,
        renderPause: _renderPause,
    };
});
