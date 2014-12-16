// Filename: game/game.js
/* jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/* global define */
define(['game/js/eventManager.js', 'game/js/renderer.js', 'game/js/world.js', 'game/js/entities/simpleshape.js', 'game/js/input.js', 'game/js/entities/playground.js'], function(EventManager, Renderer, World, SimpleShape, Input, Playground){
   
    var running = false,
        lastTime = new Date().getTime();
    
    function start(){
        running = true;
        mainloop();

    }
    
    function stop(){
        
        running = false;
        Renderer.renderPause();
    }
    
    function mainloop() {
        if(!running) return;
        requestAnimFrame(mainloop);
        
        var time = new Date().getTime();
        
        Renderer.render();
        World.update(time - lastTime);
        
        lastTime = time;
    }
    
    return {
        init: function () {
            
            $('#pause-animation').click(function(e){
                e.preventDefault();
                running = false;
            });
            
            EventManager.on('pp', function(){
                if(running)
                    stop();
                else
                    start();
            });
            
            Input.init();
            
            World.init();
            World.setPlayground(new Playground(600, 600, "#0f0"));
            
            Renderer.setWorld(World);
            
            World.addEntity(new SimpleShape(0, 0, 100, 50, "#f0f", World.Playground));
            
            start();
        },
        
        
    };
    
});