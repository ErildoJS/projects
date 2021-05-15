var arr = [1, 2, ,3]

arr.forEach(function(item, index, arr){
    console.log(item, index, arr)
})

//ever()

var every = arr.every(function(item){
    return item < 5
})//igual ao &&

var some = arr.some(function(item){
    return item % 2 === 0
})//igual ao ||


//map() - percorre todos elementos do array e retorna um array novo

var arr2 = [1,2,3,4,6,7]

arr2.map(function(item, index, arr2){
    return item + 10
})

//filter() - retorna um array com filtros

var arr2 = [1,2,3,4,6,7]

var filter = map.filter(function(item){
    return item > 32
})