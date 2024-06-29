const cityData = [
  {
    id: "azxx",
    name: "广东",
    children: [
      {
        id: "sdsd",
        name: "深圳市",
        children: [
          {
            id: "45sdss",
            name: "宝安区",
          },
          {
            id: "sdsd11",
            name: "南山区",
            children: [
              {
                id: "ddr2",
                name: "科技园",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2323d",
    name: "广西",
    children: [
      {
        id: "xxs2",
        name: "南宁",
      },
      {
        id: "kklio2",
        name: "桂林",
      },
    ],
  },
];
function fn(id, data) {
  let result = [];
  let path = [];

  function findNode(currentData, parentPath) {
    for (let item of currentData) {
      // 更新当前路径
      const newPath = parentPath.concat(item.name);

      if (item.id === id) {
        // 找到目标id，保存路径
        result = newPath;
        return true; // 发现目标，中断所有循环
      } // 如果当前节点有子节点，则递归查找子节点

      if (item.children && findNode(item.children, newPath)) {
        return true; // 递归中传递找到的信号
      }
    }
    return false; // 当前路径没有找到
  } // 初始化查找

  findNode(data, path); // 将结果数组连接成字符串并返回

  return result.join(" ");
}

// 测试示例
console.log(fn("ddr2", cityData)); // 应输出：广东 深圳市 南山区 科技园
console.log(fn("sdsd", cityData)); // 应输出：广东 深圳市
