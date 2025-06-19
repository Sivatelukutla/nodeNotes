const http = require("http");

const server = http.createServer(function(req,res){
    if(req.url === "/getdata"){ //if request is have exart path like that we consider 
        res.end("getdatafromresponse")
    }
    res.end("hello world!") //it tell about their is no response form server res.end()
})


server.listen(3000)

//this node js server. but it so diffcult to muniplicates or routing . so overcome this express js framewroke is their
//by using express js we create http server