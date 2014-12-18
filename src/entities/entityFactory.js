/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(['defaultEntities/entity',
        'defaultEntities/simpleShape',
        'defaultEntities/circleShape',
        'defaultEntities/staticShape',
        'defaultEntities/playground'], function (Entity, SimpleShape, CircleShape, StaticShape, Playground) {

    "use strict";

    var Entities = {
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
                inheritChain = [],
                base,
                args = {},
                NewEntity = {};

            for (; i < arguments.length; i++) {
                var currArg;
                if(typeof arguments[i] === "string"){
                    base = this.getEntityClass(arguments[i]);
                    currArg = base.prototype;
                } else {
                    currArg = arguments[i];
                }
                inheritChain.push(currArg);
                if(base !== null) {base.prototype._parent = inheritChain[i - 1] || new Entities.Entity();}
            }

            if(base === Entities.SimpleShape){
                args = {x: 50,
                        y: 150,
                        width: 100,
                        height: 200,
                        color: '#f0f'};
                NewEntity = new base(args);
            }

            NewEntity.prototype = Object.create.apply(base, inheritChain);
            NewEntity.prototype._parent = inheritChain[inheritChain.length - 1];
//            NewEntity.prototype.constructor = NewEntity;



            return NewEntity;
        },
    };

    return EntityFactory;

});
