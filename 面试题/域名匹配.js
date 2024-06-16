function isValidDomain(url, allowPattern) {
    // 辅助函数，用于检查域名是否匹配模式
    function matchDomain(domain, pattern) {
        // 将域名和模式分别按"."分割成部分
        const domainParts = domain.split('.');
        const patternParts = pattern.split('.');

        // 如果部分数量不一致，直接返回 false
        if (domainParts.length !== patternParts.length) {
            return false;
        }

        // 比较每一部分
        for (let i = 0; i < domainParts.length; i++) {
            // 如果模式部分是 '*' (通配符)，则总是匹配
            if (patternParts[i] === '*') {
                continue;
            }
            // 如果部分不匹配且不是通配符，返回 false
            if (domainParts[i] !== patternParts[i]) {
                return false;
            }
        }

        // 所有部分都匹配
        return true;
    }

    // 遍历每一个允许的模式
    for (let pattern of allowPattern) {
        // 将 URL 和模式分别拆分为协议和域名部分
        const [urlProtocol, urlDomain] = url.split('://');
        const [patternProtocol, patternDomain] = pattern.split('://');

        // 检查协议是否匹配
        if (urlProtocol !== patternProtocol) {
            continue;
        }

        // 检查域名是否匹配模式
        if (matchDomain(urlDomain, patternDomain)) {
            return true;
        }
    }

    // 未找到匹配项
    return false;
}

// 示例用法
const result = isValidDomain('http://mp.weixin.qg.com', ['http://mp.weixin.gq.com', 'https://*.xx.com']);
console.log(result); // 输出应为 false

const result2 = isValidDomain('https://sub.xx.com', ['http://mp.weixin.gq.com', 'https://*.xx.com']);
console.log(result2); // 输出应为 true