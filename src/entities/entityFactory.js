/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(['entities/default/entity',
        'entities/default/shapes/simpleShape',
        'entities/default/shapes/circleShape',
        'entities/default/shapes/staticShape',
        'entities/default/player',
        'entities/default/playground'], function (Entity, SimpleShape, CircleShape, StaticShape, Player, Playground) {

    "use strict";

    var Entities = {
            Player: Player,
            Entity: Entity,
            SimpleShape: SimpleShape,
            CircleShape: CircleShape,
            StaticShape: StaticShape,
            Playground: Playground };

    var EntityFactory = {
        /*  muss nich unbedingt in die api ... man soll ja lieber createEntity benutzten
         *  ist aber ein helper --- kanst ja noch umbauen
         *  @param {string} name from the entity class
         *  @return entity class pointer
         */
        getEntityClass: function(name) {
            return Entities[name];
        },
        /*
         *  @param {string|object}+ arguments
         *  @return inherited Object with requested inheritChain
         */
        createEntity: function () {
            var i = 0,
                // inheritChain = [],
                opts = {},
                Base,
                NewEntity = {};

            for (; i < arguments.length; i++) {
                // var currArg;
                if(typeof arguments[i] === "string"){
                    Base = this.getEntityClass(arguments[i]);
                } else {
                    opts = arguments[i];
                }
                // inheritChain.push(currArg);
                // if(base !== null) {base.prototype._parent = inheritChain[i - 1] || new Entities.Entity();}
            }
            
            if(opts === null){
                opts = {x: 250,
                    y: 250,
                    width: 100,
                    height: 200,
                    color: '#f0f'};
            }
            NewEntity = new Base(opts);
            NewEntity.prototype = Base.prototype;
            // NewEntity.prototype = Object.create.apply(base, inheritChain);
            // NewEntity.prototype._parent = inheritChain[inheritChain.length - 1];
            NewEntity.prototype.constructor = NewEntity;


            if(NewEntity !== null){
                return NewEntity;
            } else {
                return false;
            }
        },
    };

    return EntityFactory;

});
