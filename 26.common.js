arrl=[10,11,12,20,30]
arrl.sort(function(a,b){return a-b});

arr2=[11,20,21,30,31]
arr2.sort(function(a,b){return a-b});

counter=0;
for(let i of arrl){
    for(let j of arr2){
        if(i==j){
            console.log(`common elemnet are ${i},${j}`)
            counter++;
        }
    }
}
console.log("total iteration:",counter)


