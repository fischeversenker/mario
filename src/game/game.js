/* jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/* global define */
define(['eventManager', 'renderer', 'world', 'entities/simpleShape', 'input', 'entities/playground', 'entities/staticShape', 'camera', 'entities/circleShape'], function(EventManager, Renderer, World, SimpleShape, Input, Playground, StaticShape, Camera, CircleShape){

    var Game = {
        running: false,
        lastTime: new Date().getTime(),

        start: function(){
            this.running = true;
            this.lastTime = new Date().getTime();
            this.mainloop(this);
        },

        stop: function(){
            this.running = false;
            Renderer.renderPause();
        },

        mainloop: function(ctx) {
            if(!this.running) return;
            requestAnimFrame(function(){ctx.mainloop(ctx);});

            var time = new Date().getTime();

            Renderer.render();

            World.update(time - this.lastTime);
            Camera.update(time - this.lastTime);

            this.lastTime = time;
        },

        init: function() {

            $('#pause-animation').click(function(e){
                e.preventDefault();
                this.running = false;
            });

            EventManager.on('pp', function(ctx){
                if(ctx.running)
                    ctx.stop();
                else
                    ctx.start();
            }, this);

            Input.init();
            this.World = World;

            Camera.init(this, this.World);

            this.World.init();
            this.World.setPlayground(new Playground(1000, 1000, "#8b8b8b"));

            Renderer.setSurroundings(World, Camera);

            this.Player = new SimpleShape(0, 0, 10, 75, 30, "#31d400");
            World.addEntity(this.Player);
            World.addEntity(new CircleShape(150, 100, 5, 150, 100, "#e09b00"));
            World.addEntity(new CircleShape(50, 100, 6, 75, 25, "#9be000"));
            World.addEntity(new StaticShape(195, 995, 1, 230, 30, "#3521a5"));
            World.addEntity(new StaticShape(100, 395, 20, 120, 300, "#a521a5"));
            World.addEntity(new StaticShape(425, 295, 1, 300, 150, "#21a572"));
            World.addEntity(new StaticShape(700, 800, 1, 400, 300, "#a52154"));

            this.start();
        },

    }

    return Game;

});
