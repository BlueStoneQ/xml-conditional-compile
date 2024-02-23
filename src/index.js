const xmlConditinalCompileIfdef = (htmlStr, targetPlat) => {
  return htmlStr.replace(/<!-- ifdef targetPlat=(.*?) -->(.*?)<!-- endif -->/g, (match, platStr, content) => {
    if (platStr.split('|').includes(targetPlat)) {
      // 命中编译条件：保留当前被条件编译包裹的区块（包括条件编译注释指令）
      return content
    }
    
    // 未命中编译条件，删除当前被条件编译包裹的区块（包括条件编译注释指令）
    return ''
  })
}

const xmlConditinalCompileIfndef = (htmlStr, targetPlat) => {
  return htmlStr.replace(/<!-- ifndef targetPlat=(.*?) -->(.*?)<!-- endif -->/g, (match, platStr, content) => {
    if (platStr.split('|').includes(targetPlat)) {
      // 命中编译条件：删除当前被条件编译包裹的区块（包括条件编译注释指令）
      return ''
    }
    
    // 未命中编译条件，保留当前被条件编译包裹的区块（包括条件编译注释指令）
    return content
  })
}

export default (htmlStr, targetPlat) => xmlConditinalCompileIfdef(xmlConditinalCompileIfndef(htmlStr, targetPlat), targetPlat)

