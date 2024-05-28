/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    // 初始化结果数组 result、当前行的单词数组 currentLine 和当前行长度 currentLength
    let result = [];
    let currentLine = [];
    let currentLength = 0;

    // 遍历单词列表 words
    for (let word of words) {
        // 如果加入当前单词不会超出最大宽度
        if (currentLength + word.length + currentLine.length <= maxWidth) {
            // 将当前单词添加到当前行
            currentLine.push(word);
            // 更新当前行长度
            currentLength += word.length;
        } else {
            // 如果加入当前单词会超出最大宽度
            // 计算需要添加的空格数
            let spaces = maxWidth - currentLength;
            // 计算每个单词之间应该插入的空格数,以及最后一个单词后面应该插入的额外空格数
            let numSpaces = currentLine.length - 1 || 1;
            // 构建当前行的字符串
            let line = '';
            for (let i = 0; i < currentLine.length; i++) {
                line += currentLine[i];
                if (i < numSpaces) {
                    line += ' '.repeat(Math.floor(spaces / numSpaces) + (i < spaces % numSpaces ? 1 : 0));
                }
            }
            // 将当前行添加到结果数组
            result.push(line);
            // 重置当前行的单词数组和长度
            currentLine = [word];
            currentLength = word.length;
        }
    }

    // 处理最后一行
    if (currentLine.length) {
        let lastLine = currentLine.join(' ');
        lastLine += ' '.repeat(maxWidth - lastLine.length);
        result.push(lastLine);
    }

    // 返回最终结果
    return result;
};