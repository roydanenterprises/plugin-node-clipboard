![license](https://img.shields.io/github/license/roydanenterprises/plugin-node-clipboard.svg)
[![npm](https://img.shields.io/npm/v/plugin-node-clipboard.svg)](https://www.npmjs.com/package/plugin-node-clipboard)
[![Gitter](https://img.shields.io/gitter/room/pattern-lab/node.svg)](https://gitter.im/pattern-lab/node)

# Clipboard Plugin for Pattern Lab Node

The Clipboard plugin uses [clipboard.js](https://clipboardjs.com/) to allow users to copy code snippets from the code panel. This is also compatible with [Plugin Node Tab](https://github.com/pattern-lab/plugin-node-tab).

[Read more about Pattern Lab Node Plugins](https://github.com/pattern-lab/patternlab-node/wiki/Creating-Plugins)

![](https://github.com/roydanenterprises/plugin-node-clipboard/blob/dev/sample.png?raw=true)

## Installation

Follow the [instructions](https://github.com/pattern-lab/patternlab-node/wiki/Installing-Plugins) found on the Pattern Lab Node wiki.

> Make sure you replace the example with

```
npm install plugin-node-clipboard
```

Post-installation,  the plugin should be added as a key to the `plugins` object in your main Pattern Lab project's `patternlab-config.json` file.

Example:

```
"plugins": {
  "plugin-node-clipboard": {
    "enabled": true,
    "initialized": false
  }
}
```

## Enabling / Disabling the Plugin

After install, you may manually enable or disable the plugin by finding the `plugin-node-clipboard` key within your main Pattern Lab project's `patternlab-config.json` file and setting the `enabled` flag. In the future this will be possible via CLI.
