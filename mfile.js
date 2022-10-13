const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'files');
//for(i=0;i<5;i++){
//fs.writeFileSync(dirpath+"/akash"+i+".txt","this is file system in node js");
//};
fs.readdir(dirpath,(err,file)=>{
file.forEach((item)=>{
console.warn(item)
})
})