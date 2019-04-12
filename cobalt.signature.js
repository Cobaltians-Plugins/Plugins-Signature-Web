(function(cobalt){
    var plugin={
        classes: {
        	ios: 'SignaturePlugin',
			android:'io.kristal.signature.Signature'
        },
        init:function(){
            cobalt.signature=this.sign.bind(this);
        },
        sign:function(option,callback){
            cobalt.plugins.send(this, "sign",option, callback);
        }
    };
    cobalt.plugins.register(plugin);

})(cobalt || {});