const htmlConditinalCompileIfdef = (htmlStr, targetPlat) => {
  return htmlStr.replace(/<!-- ifdef targetPlat=(.*?) -->(.*?)<!-- endif -->/g, (match, platStr, content) => {
    if (platStr.split('|').includes(targetPlat)) {
      // 命中编译条件：保留当前被条件编译包裹的区块（包括条件编译注释指令）
      return content
    }
    
    // 删除当前被条件编译包裹的区块（包括条件编译注释指令）
    return ''
  })
}

const htmlConditinalCompileIfndef = (htmlStr, targetPlat) => {
  return htmlStr.replace(/<!-- ifndef targetPlat=(.*?) -->(.*?)<!-- endif -->/g, (match, platStr, content) => {
    if (!platStr.split('|').includes(targetPlat)) {
      // 命中编译条件：保留当前被条件编译包裹的区块（包括条件编译注释指令）
      return content
    }
    
    // 删除当前被条件编译包裹的区块（包括条件编译注释指令）
    return ''
  })
}

export default (htmlStr, targetPlat) => htmlConditinalCompileIfdef(htmlConditinalCompileIfndef(htmlStr, targetPlat), targetPlat)

