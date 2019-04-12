(function(cobalt){
    var plugin={
        name:"signature",
        init:function(){
            //create shortcuts
            cobalt.signature=this.sign.bind(this);
        },
        handleEvent:function(json){
            cobalt.log(this.name, ' plugin : unknown event received :', json)
        },
        sign:function(option,callback){
            cobalt.plugins.send(this, "sign",option, callback);
        }
    };
    cobalt.plugins.register(plugin);

})(cobalt || {});