/* jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/* global define */
define(function(require){

    "use strict";

    var Renderer = {
        _canvas: null,
        _ctx: null,
        Core: {},

        render: function() {/*
            Core.DOM.getContext("2d").clearRect(0, 0, Core.DOM.width, Core.DOM.height);
            Core.DOM.getContext("2d").save();
            Core.DOM.getContext("2d").fillStyle = '#0f0';
            while(Core.World.next()){
                console.log(Core.World.getCurrent());
                Core.World.getCurrent().render(Core.DOM.getContext("2d"));
            }
            Core.DOM.getContext("2d").fillRect(0, 0, Core.DOM.width, Core.DOM.height);
            Core.DOM.getContext("2d").restore();*/
            while(this.Core.World.next()){
                this.Core.World.getCurrent().render(this._ctx);
            }
        },
        renderPause: function() {
            Core.DOM.getContext("2d").clearRect(0,0,Core.DOM.width, Core.DOM.height);
        },

        setDOM: function (canvas) {
            this._canvas = canvas[0];
            this._ctx = canvas[0].getContext("2d");
        },

        init: function(core) {
            this.Core = core;
        },
    };

    return Renderer;
});
