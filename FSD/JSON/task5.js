var arr=[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
function fromListToObject(arr){
    var obj={}
    for(i=0;i<arr.length;i++){
        var newarr=arr[i]
        obj[newarr[0]]=newarr[1]
    }
    console.log(obj.make);
    return obj;
}
console.log(fromListToObject(arr));
