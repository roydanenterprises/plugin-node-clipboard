/* global Clipboard, document */

var PluginClipboard = {

  /**
   * The function defined as the onready callback within the plugin configuration.
   */
  init: function () {

    var clipboard = new Clipboard('.sg-tab-title-active', {
      target: function (trigger) {
        console.log(trigger);
        var t = trigger.id;
        console.log(t);
        t = t.replace('-tab', '-panel');
        console.log(t);
        return document.getElementById(t);
      }
    });

  }
};
