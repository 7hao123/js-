let mySet = new Set();
mySet.add(1)
mySet.add('1')
mySet.add('o')

const has = mySet.has('o')

mySet.delete(1)

for(let item of mySet) console.log(item)
// key 和 value 一样的
for(let [key, value] of mySet.entries())  console.log(key,value);
// 把set转成array
const myArr = [...mySet]
const arr = Array.from(mySet)
// 求交集
const mySet2 = new Set([1,2,3,4])
const intersection = new Set([...mySet].filter(x => mySet2.has(x)))

// 求差集

const difference = new Set([...mySet].filter(x=> !mySet2.has(x)))
