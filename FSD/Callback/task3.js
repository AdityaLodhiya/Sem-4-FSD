//Initialize two variables and increment both the variables each times and display the addition of both the variables at interval of 1 sec
//After 5 ittration code have to be terminated
var a=5;
var b=7;
var count=0;
var i=setInterval(()=>{
    console.log('Sum:',a+b);
    a=a+1;
    b=b+1;
    if(count===5){
        clearInterval(i)
    }
    count++;
},1000)