arr1 =[10,11,12,20,30]
arr2.sort(function(a,b){return a-b});



arr2=[11,20,21,30,31]
arr2.sort(function(a,b){return b-a});



counter = 0;
for (i = 0; i < arr1.length; i++) {
    if (arr1[i] == arr2[i]) {
        console.log("the numbers are", arr1[i], arr2[i]);
        counter++;
    }
}