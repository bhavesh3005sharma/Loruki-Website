// const testRequest = new XMLHttpRequest();
// // testRequest.open("GET","https://mhbs.info/api/documents/kOORWmWIl7r/data");
// testRequest.open("GET","https://bmgfdev.soic.iupui.edu/api/documents/kOORWmWIl7r/data");
// testRequest.setRequestHeader('Authorization', 'Basic ' + btoa('testuser:Admin@123'));
// testRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
// testRequest.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
// testRequest.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
// // testRequest.open("GET","https://jsonplaceholder.typicode.com/posts");
// testRequest.send();
// testRequest.onload = ()=>{
//     console.log(testRequest);
//   if(testRequest.status==200){
//     console.log(testRequest.status);
//   }else{
//     console.log('error'+testRequest.err);
//   }
// };

var appServer = "https://bmgfdev.soic.iupui.edu/api/documents/";
var oReq = new XMLHttpRequest();
// Make sure you add the domain name to the Content-Security-Policy <meta> element.

oReq.open("GET", appServer, true);
oReq.setRequestHeader("Access-Control-Allow-Origin", "*");
oReq.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
oReq.setRequestHeader('Authorization', 'Basic ' + 'testuser' + ":" + 'Admin@123');
oReq.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");

// Define how you want the XHR data to come back
oReq.responseType = "blob";
oReq.onload = function (oEvent) {
var blob = oReq.response; // Note: not oReq.responseText
if (blob) {
    var reader = new FileReader();
    reader.onloadend = function (evt) {
    // writing the file
    fileToWrite(blob, id);
    };
    reader.readAsDataURL(blob);
}
else {
    console.error('we didnt get an XHR response!');
}
};
oReq.send();