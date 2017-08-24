var express = require('express');
var app = express();
var fs = require('file-system');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));


// app.use(express.static());
var path = require('path');
// app.use(express.static(path.join(__dirname, '/home/user2/Desktop/node_projects/images')));


app.get('/getimages/:idd', function (req, res, next){  

var pic = req.params.idd;

var imageDir;


imageDir = '/home/mserver/Desktop/mat-Files/MATImages';

   fs.readFile(imageDir +"/"+ pic, function (err, content) {
            if (err) {
                res.writeHead(400, {'Content-type':'application/json'})

                console.log(err);

                var errorResponse = {"statuscode":-1,"status":"No such file or image"};
                res.end(JSON.stringify(errorResponse));    
            } else {
                //specify the content type in the response will be an image
                res.writeHead(200,{'Content-type':'image/jpg'});
                res.end(content);
            }
 })
})





app.get('/getTemplate/:id/:ff/:ss/:type', function (req, res, next){  

var template = req.params.id;
var template1 = req.params.ff;
var template2 = req.params.ss;
var ftype=req.params.type;
var templateDir;
var strPath;
if(ftype=="private")
{
templateDir = '/home/mserver/Desktop/Editor/files/templates';

strPath=templateDir +"/"+ template +"/"+ template1 +"/"+ template2;
}
else
{
templateDir = '/home/mserver/Desktop/Editor/files';

strPath=templateDir +"/"+ template ;
}

console.log(templateDir +"/"+ template +"/"+ template1 +"/"+ template2);
   fs.readFile(strPath, function (err, content) {
            if (err) {
                res.writeHead(400, {'Content-type':'application/json'})
                 
                console.log(err);

                var errorResponse = {"statuscode":-1,"status":"No such file or image"};
                res.end(JSON.stringify(errorResponse)+" ---- "+strPath);    
            } else {
                //specify the content type in the response will be an image
                res.writeHead(200,{'Content-type':'text/html'});
                res.end(content);
            }
 })
})


// app.post('/writefiles', function (req, res) {
//   res.send('POST request to the homepage')
// })

app.post('/writefiles',rightfile);


function rightfile(req,res){
var filename = req.body.fileName;
var htmldata = req.body.html; 
var buf =  new Buffer(req.body.html, 'base64'); 
var directoryPath = "/home/mserver/Desktop/Editor/files";


var filePath = directoryPath+"/"+filename;

console.log(buf);
var responseVar={};
var isFileNew = true;


if (fs.existsSync(filePath)) {

    isFileNew = false;
 
}



if(isFileNew){ 
responseVar = fs.writeFile(filePath, buf, function(err) {
    if(err) {
         responseVar = {"statuscode":-1,"status":"something went wrong"};
        return console.log(err);
    }

    // console.log("The file was saved!");
     responseVar = {"statuscode":0,"status":"The file saved successfully"};
     console.log(responseVar)
     res.send(responseVar);


     return responseVar;
}); 
} else{
    res.writeHead(400, {'Content-type':'application/json'});
   responseVar = {"statuscode":-1,"status":"file already exists "};
     res.end(responseVar);

}




console.log('************************');
console.log(req.body);
console.log(responseVar);



}








console.log();





var server = app.listen(8898
, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
