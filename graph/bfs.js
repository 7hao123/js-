// 新建一个队列，根节点入队
// 队头出队并访问
// 把队头没访问过的相邻节点入队
// 重复2，3步，直到队列空


const graph = require('./graph')

const visited = new Set();
const q = [2];
visited.add(2)
while(q.length){
    const n = q.shift();
    console.log(n);
    graph[n].forEach(c =>{
        if(!visited.has(c)){
            q.push(c)
            visited.add(c)
        }
    })
}