
# babel-plugin-conditional-compile
**[英文文档](README.md)**

## 概览

一个用于处理XML的用于条件编译的核心库。

## 安装

要安装此插件，请运行以下命令：

```bash
npm install --save-dev xml-conditional-compile
```

或者，如果您正在使用Yarn：

```bash
yarn add --dev xml-conditional-compile
```

## 使用方法
该库作为核心库，提供了纯函数形式的API，可以用在各个构建工具的扩展或者插件中，来帮助完成条件编译。
```js
import xmlConditionalCompile from 'xml-conditional-compile'

const newHtmlStr = xmlConditionalCompile(originalHtmlStr)
```

### 编码与条件编译

在您的xml文件中，您可以使用特殊注释来标记条件编译的代码块。

```xml
<body>
<!-- ifdef targetPlat=WX|TT -->
    <h1>targetPlat命中WX|TT，这一段才会保留</h1>
    <h1>gnidaeH1</h1>
<!-- endif -->
<!-- ifndef targetPlat=WX|TT -->
    <h1>targetPlat命中WX或者TT，这一段会删除</h1>
    <h1>gnidaeH1</h1>
<!-- endif -->
    <p>My first paragraph.</p>
</body>
```

## 开源协议
[LICENSE](LICENSE)