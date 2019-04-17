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
    sign: function(callback) {
      this.onSignatureResult = callback;
      cobalt.plugins.send(this, "sign");
    },
    handleEvent: function(json) {
      if (typeof this.onSignatureResult === 'function') {
        this.onSignatureResult(json.data)
      }
    }
  };
  cobalt.plugins.register(plugin);

})(cobalt || {});