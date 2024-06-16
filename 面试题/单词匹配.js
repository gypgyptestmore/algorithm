function findSubstring(s, words) {
    if (s.length === 0 || words.length === 0) return [];

    const wordLength = words[0].length;
    const wordCount = words.length;
    const totalLength = wordLength * wordCount;
    const wordMap = new Map();

    // 记录 words 中每个单词的出现次数
    for (const word of words) {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }

    const result = [];

    // 遍历每一个可能的起始位置
    for (let i = 0; i <= s.length - totalLength; i++) {
        const seenWords = new Map();
        let j = 0;

        while (j < wordCount) {
            const wordIndex = i + j * wordLength;
            const word = s.substring(wordIndex, wordIndex + wordLength);

            if (wordMap.has(word)) {
                seenWords.set(word, (seenWords.get(word) || 0) + 1);

                // 如果当前单词出现次数超过了在 words 中的次数，跳出循环
                if (seenWords.get(word) > wordMap.get(word)) {
                    break;
                }
            } else {
                break;
            }
            j++;
        }

        // 如果所有的单词都匹配上了
        if (j === wordCount) {
            result.push(i);
        }
    }

    return result;
}

// 示例输入输出
const s = "barfoothefoobarman";
const words = ["foo", "bar"];
console.log(findSubstring(s, words)); // 输出: [0, 9]
const a = findSubstring(s, words)
console.log(a.join(''))
console.log(a.join('').split('').map(Number))