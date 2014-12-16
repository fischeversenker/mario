define(function(){
   
    var listeners = {},
        eventManager = {};
    
    eventManager.trigger = function(name) {
        listeners[name][0]();
    };
    eventManager.on = function(name, callBack) {
        if  (!(name in listeners)) {
            listeners[name] = [];
        }
        return listeners[name].push(callBack);
    };
    eventManager.off = function(name, index){
        listeners[name].slice(index, 1);
    };
    
    return eventManager;
    
});