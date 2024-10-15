const graph = require('./graph')
const visited = new Set();
const dfs = (n)=>{
    console.log(n);
    visited.add(n)
    graph[n].forEach(c=>{
        if(!visited.has(c)){
            dfs(c)
        }
    })
}

dfs(2)


// 访问根节点    对根节点没访问过的相邻节点挨个进行深度优先遍历