/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define([
    'entities/default/entity',
        'entities/default/shapes/simpleShape',
        'entities/default/shapes/circleShape',
        'entities/default/shapes/staticShape',
        'entities/default/player',
        'entities/default/playground'
], function (Entity, SimpleShape, CircleShape, StaticShape, Player, Playground) {

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
        inheritFrom: function () {
            var i = 0,
                inheritChain = [],
                base,
                NewEntity = {};

            for (; i < arguments.length; i++) {
                var currArg;
                if(typeof arguments[i] === "string"){
                    console.log(arguments);
                    base = this.getEntityClass(arguments[i]).prototype;
                    currArg = base;
                } else {
                    currArg = arguments[i];
                }
                inheritChain.push(currArg);
            }
            
            NewEntity.prototype = Object.create.apply(base, inheritChain);
            NewEntity.prototype.constructor = NewEntity;
            NewEntity.prototype._parent = inheritChain[inheritChain.length - 1];


            if(NewEntity !== null){
                return NewEntity.prototype;
            } else {
                return false;
            }
        },
    };

    return EntityFactory;

});
