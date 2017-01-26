var fs = require('fs');
var mkdirp = require('mkdirp');
const spawn = require('child_process').spawn;

var args = process.argv.slice(2);




function printHelp(){
    console.error("printHelp not implemented yet");
}


function makeDir(path){
    mkdirp(path, function(err) { //create folder in destination
        if(err) {
            console.error("error creating directory", path, err);
        }
        // console.log("created directory", path);
    });
};

function writeFile(path, content){
    fs.writeFile(path, content, function(err) {
        if(err) {
            console.error("error writing file", path, err);
        }
        // console.log("wrote file", path);
    }); 
};

function readFile(path, callback){
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            console.error("error reading file", path, err);
        }
        // console.log("read file", path);
        callback(data);
    });
}

function toCamelCase(str) {
    return str.replace(/^([A-Z])|[\s-_](\w)/g, function(match, p1, p2, offset) {
        var returner;
        if (p2) {
            return p2.toUpperCase();
        }else{
            return p1.toLowerCase();        
        }
    });
};

function toDashSpace(str){
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
           
function capitalizeFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}


function runSpawn(command, args, callback){
        const ls = spawn(command, args)
        
        ls.stdout.on('data', (data) => {
            console.log(command+` stdout: ${data}`);
        });

        ls.stderr.on('data', (data) => {
            console.log(command+` stderr: ${data}`);
        });

        ls.on('close', (code) => {
            console.log(command+` child process exited with code ${code}`);
            callback();
        });

        ls.on('error', (code) => {
            console.log(command+` child process has an error with code ${code}`);
        });
}






var CServiceGenerator = function(newName){


    this.newName = newName;

    var demoDir = "./cdemo";
    var destDir = "./../src/app/coco-services/c"+toDashSpace( this.newName.toLowerCase() )+"/";


    var loopThroughFolder = (path)=>{
        fs.readdir(demoDir+path, (err, files) => {

            if(!files) {
            // file found, not directory:

            readFile(demoDir+path, (content)=>{ // read demoDir+path+"
                var newContent = content.replace(/\$\$\$\$Demo\$\$\$\$/g, capitalizeFirstLetter( toCamelCase(this.newName) ) );        
                newContent = newContent.replace(/\$\$\$demo\$\$\$/g, toDashSpace( this.newName.toLowerCase() ) );

                var newPath = destDir+path.replace(/\$\$\$\$Demo\$\$\$\$/g, capitalizeFirstLetter( toCamelCase(this.newName) ) );
                newPath = newPath.replace(/\$\$\$demo\$\$\$/g, toDashSpace( this.newName.toLowerCase() ) );

                writeFile(newPath, newContent);
            });
            
            return;
            };

            // create dir
            makeDir(destDir+path);
            // do for subdirectories recursively
            files.forEach(fileFolder => {
                loopThroughFolder(path+"/"+fileFolder)    
            });

            return;
        });
    };

    this.generate = ()=>{
        loopThroughFolder("");
        console.log("done.");
    };

}

var InstallService = function(name){

    var installedFile = "./../src/app/installed.ts";

    var markerImport = "/** ###@@@### marker for cbar-cli import ###@@@### */";
    var markerCollection = "/** ###@@@### marker for cbar-cli installedCCollections ###@@@### */";

    var importValue = "import { C"+capitalizeFirstLetter( toCamelCase(name) )+"CCollection } from './coco-services/c"+toDashSpace( name.toLowerCase() )+"/c"+toDashSpace( name.toLowerCase() )+".ccollection';";
    var collectionValue = ", C"+capitalizeFirstLetter( toCamelCase(name) )+"CCollection";

    this.install = ()=>{

        readFile(installedFile, (content)=>{

            var newContent = content.replace(markerImport,  importValue+"\n"+markerImport);        
            newContent = newContent.replace(markerCollection,  collectionValue+"\n"+markerCollection);        

            writeFile(installedFile, newContent);

        });

        console.log("done.");

    }
};

//TODO not yet working...
var Tester = function(){
    this.build = (callback)=>{

        runSpawn('ng', ['build'], callback);

        // var command = 'ng build '+__dirname+"/..";
        // console.log("command", command);
        // spawn(command, function(err, data, stderr) {  
        //     if(!err){
        //         console.log(data.toString());  
        //         callback();
        //     }else{
        //         console.log(err, stderr)
        //     }                         
        // });  
    };

    this.run = (callback)=>{
        runSpawn(__dirname+'/../node_modules/.bin/electron', [__dirname+'/electron/'], callback);
    };

    this.bNr = (callback)=>{
        this.build( ()=>{
            this.run( ()=>{
                callback();
            } );
        } );
    };



}

switch(args[0]){
    case "g":
    case "generate":  (new CServiceGenerator(args[1])).generate();
        break;
    case "i":
    case "install":  (new InstallService(args[1])).install();
        break;

    case "build": (new Tester()).build(()=>{});
        break;
    case "run": (new Tester()).run(()=>{});
        break;
    case "bnr":
    case "bNr": (new Tester()).bNr();
        break;
        
    default: 
        console.log("invalid or missing argument");
        break;
}