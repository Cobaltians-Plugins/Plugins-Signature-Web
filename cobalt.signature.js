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
    sign: function(option, callback) {
      this.onSignatureResult = callback;
      cobalt.plugins.send(this, "sign", option, callback);
    },
    handleEvent: function(json) {
      if (typeof cobalt.onSignatureResult === 'function') {
        cobalt.onSignatureResult(json.data)
      }
    }
  };
  cobalt.plugins.register(plugin);

})(cobalt || {});