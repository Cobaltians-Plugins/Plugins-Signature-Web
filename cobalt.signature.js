(function(cobalt) {
  var plugin = {
    name: 'CobaltSignaturePlugin',
    classes: {
      ios: 'SignaturePlugin',
      android: 'io.kristal.signature.Signature'
    },
    init: function() {
      cobalt.signature = this.sign.bind(this);
    },
    sign: function(params, callback) {
      cobalt.plugins.send(this, "sign", params, callback);
    }
  };
  cobalt.plugins.register(plugin);

})(cobalt || {});