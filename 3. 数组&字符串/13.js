// 罗马数字转整数
// 从左往右遍历，2位2位，如果有下面的字符累加数字并去除，否则累加1位数字
function romanToInt(s) {
    let res = 0;
    let n = s.length;

    // 处理特殊情况
    for (let i = 0; i < n; i++) {
        if (s[i] == 'I' && s[i + 1] == 'V') {
            res += 4;
            i++;
        } else if (s[i] == 'I' && s[i + 1] == 'X') {
            res += 9;
            i++;
        } else if (s[i] == 'X' && s[i + 1] == 'L') {
            res += 40;
            i++;
        } else if (s[i] == 'X' && s[i + 1] == 'C') {
            res += 90;
            i++;
        } else if (s[i] == 'C' && s[i + 1] == 'D') {
            res += 400;
            i++;
        } else if (s[i] == 'C' && s[i + 1] == 'M') {
            res += 900;
            i++;
        } else {
            // 处理普通情况
            if (s[i] == 'I') {
                res += 1;
            } else if (s[i] == 'V') {
                res += 5;
            } else if (s[i] == 'X') {
                res += 10;
            } else if (s[i] == 'L') {
                res += 50;
            } else if (s[i] == 'C') {
                res += 100;
            } else if (s[i] == 'D') {
                res += 500;
            } else if (s[i] == 'M') {
                res += 1000;
            }
        }
    }

    return res;
}
