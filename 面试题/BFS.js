const nodes = {
  name: "page.js",
  require: [
    {
      name: "A.js",
      require: [
        {
          name: "C.js",
          require: [
            {
              name: "F.js",
            },
          ],
        },
      ],
    },
    {
      name: "B.js",
      require: [
        {
          name: "D.js",
          require: [
            {
              name: "F.js",
            },
          ],
        },
        {
          name: "E.js",
          require: [],
        },
      ],
    },
  ],
};

// BFS
const genRequireTree = (node) => {
  let queue = [];
  let res = [];
  if (node) queue.push(node);
  while (queue.length) {
    let size = queue.length;
    while (size--) {
      let node = queue.shift();
      res.push(node.name);
      node.require && queue.push(...node.require);
    }
  }
  return new Set(res.reverse());
};
console.log(genRequireTree(nodes));
