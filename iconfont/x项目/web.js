//1.导入三个模块
const http =require("http")
const fs = require("fs")
const path =require("path")
//2.创建一个web服务器
const server = http.createServer()
server.on('request',(req,res)=>{
  //3.获取到客户端请求的url地址
   const url =req.url
  //需要把请求的url地址映射为具体文件的存放路径
    //    const fpath=  path.join(__dirname,url)
    let fpath =''
    if(url==='/'){
        fpath=path.join(__dirname,'./index1.html')  //优化路径
    }else{
        fpath=path.join(__dirname,url)
    }

    //4.根据映射过来的文件路径来读取文件的内容
    fs.readFile(fpath,'utf8',(err,dataStr)=>{
        if(err) return res.end('Not 404 found')

        res.end(dataStr)
    })
})
server.listen(5050,()=>{
    console.log('server running at http://127.0.0.1:5050');
})