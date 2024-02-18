# babel-plugin-conditional-compile
**[README-zh-CN](README_zh_CN.md)**

## Overview

A pure function lib as core for HTML conditional compilation.

## Install

To install the plugin, run the following command:

```bash
npm install --save-dev xml-conditional-compile
```

Or, if you're using Yarn:

```bash
yarn add --dev xml-conditional-compile
```

## Usage

### Configuration

This library serves as the core library and provides APIs in pure functional form. It can be used in extensions or plugins of various building tools to help complete conditional compilation.

```js
import htmlConditionalCompile from 'xml-conditional-compile'

const newHtmlStr = htmlConditionalCompile(originalHtmlStr)
```

### Coding with Conditional Compilation

In your xml files, you can use special comments to mark code blocks for conditional compilation.

```xml
<body>
<!-- ifdef targetPlat=WX|TT -->
    <h1>如果targetPlat命中WX|TT这里就会保留</h1>
    <h1>gnidaeH1</h1>
<!-- endif -->
    <p>My first paragraph.</p>
<!-- ifndef targetPlat=WX|TT -->
    <h1>如果targetPlat命中WX|TT这里就会删除</h1>
    <h1>gnidaeH2</h1>
<!-- endif -->
</body>
```

## License
[LICENSE](LICENSE)

