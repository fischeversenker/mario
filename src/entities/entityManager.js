/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(['entities/EntityFactory', 'lists/entityList', 'shapes/simpleShape', 'shapes/simpleShape'], function (EntityFactory, EntityList, SimpleShape, StaticShape) {

    "use strict";

    var Shapes = {
        SimpleShape: SimpleShape,
        StaticShape: StaticShape,
    };

    var EntityManager = {
        /*
         *  @param {string|object}+ arguments
         *  @return inherited Object with requested inheritChain
         */
        getEntityFactory: function () {
            return EntityFactory;
        },

        createEntity: function (name) {
            return new EntityFactory.getEntityClass(name)();
        },

        createShape: function (name) {
            var s = new Shapes[name];
            return new Shapes[name]();
        },

        getEntityList: function () {
            return new EntityList();
        },
    };

    return EntityManager;

});
