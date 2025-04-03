//  import chalk from "chalk";
// const path=require("path")
//  console.log(chalk.blue("Hello WOrld!"))
//  console.log(chalk.red("Hello everyone!"))
//  console.log(chalk.green.underline("Hello hi r u?"))
// console.log(__dirname)
// console.log("C:\Users\akshi\OneDrive\Documents\NodeJs"+"../../index.js","/projects");
// console.log(path.join(__dirname,"../../index.js","/projects"))
const fs=require("fs")
// const content=fs.readFileSync("a.txt","utf-8");
// console.log(content)
// let word=0;
// function countword(Filename){
    // console.log(process.argv[2])
//     fs.readFile(Filename,"utf-8",function(err,data){
//         if(err){
//             console.log("File not found")
//         }else{
//             for(let i=0;i<data.length;i++){
//                 if(data[i]===" "){
//                     word++;
//                 }
//             }
//             console.log(word+1);
//         }
//     })
// }
// countword(process.argv[2])
const { Command } = require('./.gitignore/node_modules/commander/typings');
const program = new Command();

program
.name("Count words")
.description("CLI to Js count word utils")
.version("0.8.0")

program.command('count')
.description('count the number of words in the file')
.argument('<file>','file to count')
.action((file)=>{
    fs.readFile(file,"utf-8",(err,data)=>{
        if(err){
            console.log("File not Found")
        }else{
            const words=data.split(" ").length;
            console.log(`There are ${words} words in the file named ${file}`)
        }
    })
})

program.command('sentences')
.description('Count the number of sentences in the file')
.argument('<file>','file to count')
.action((file)=>{
    fs.readFile(file,"utf-8",(err,data)=>{
        if(err){
            console.log("FIle not Found")
        }else{
            const lines=data.split("\n").length;
            console.log(`There are ${lines-1} lines in the file named ${file}`)
        }
    })
})
program.parse()