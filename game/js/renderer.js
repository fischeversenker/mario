define(function(){
    
    "use strict";
       
    var _canvas,
        _ctx,
        World;

    function _render() {
            _ctx.clearRect(0,0,_canvas.width, _canvas.height);
        
//        _ctx.fillStyle = "#00FF00";
//        _ctx.fillRect(0, 0, _canvas.width, _canvas.height); // GREEN BG
        
        World.Playground.render(_ctx);
        while (World.next()) {
            World.getCurrent().render(_ctx);
        }
    }
    
    function _renderPause() {
            _ctx.clearRect(100,100,_canvas.width-200, _canvas.height-200);
    }
    
    return {
        init: function(canvas){
            _canvas = canvas;
            _ctx = canvas.getContext("2d");
        },
        setWorld: function(world){
            World = world;
        },
        render: _render,
        renderPause: _renderPause,
    };
}); 