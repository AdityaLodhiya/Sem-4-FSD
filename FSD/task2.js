const sub =
{
"FSD": [
{
"Topic": "HTML",
"course": "Beginer",
"content": ["tags", "table", "form"],
},
{
"Topic": "CSS",
"course": "Beginer",
"content": ["tags", "table", "form"]
}
]};
for(x in sub.FSD){
    for(y in sub.FSD[x])
        console.log(sub.FSD[x][y]);
}
