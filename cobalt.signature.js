(function(cobalt){
    var plugin={
        name:"signature",

        init:function(options){
            //create shortcuts
            cobalt.signature=this.sign.bind(this);

            if (options){
                this.config(options);
            }

        },
        config:function(settings){

        },
        handleEvent:function(json){
            cobalt.log(this.name, ' plugin : unknown event received :', json)
        },
        sign:function(option,callback){
            this.send("sign",option, callback);
         },
        send:function(action, data, callback){
        cobalt.send({ type : "plugin", name : this.name, action : action, data : data }, callback);
        }
    };
    cobalt.plugins.register(plugin);

})(cobalt || {});