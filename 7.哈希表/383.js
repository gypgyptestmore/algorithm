// 判断1中的字符能否由2中字符构成,2中每个字符只能在1中用一次
var canConstruct = function (ransomNote, magazine) {
  const hashTable = {};
  //   hashTable记录第一个字符每个元素出现的次数
  for (let i of ransomNote) {
    hashTable[i] = (hashTable[i] || 0) + 1;
  }
  // 2. 遍历 magazine,检查每个字符是否在 hashTable 中,如果在则减 1
  for (let j of magazine) {
    if (j in hashTable && hashTable[j] > 0) {
      hashTable[j]--;
    }
  }
  // 1中要是还有字符，就是在2中没匹配到的，false
  for (let key in hashTable) {
    if (hashTable[key] > 0) {
      return false;
    }
  }
  return true;
};

const ransomNote = "a";
const magazine = "ba";
let a = canConstruct(ransomNote, magazine);
console.log(a);

// 时间复杂度(总时间):O(m+n),空间复杂度(任一个空间)：O(min(m,n))
