var http = require('http');
var fs = require('fs');

//  Read Files
// Create a Node.js file that reads the HTML file, and return the content:

// http.createServer(function (req, res) {
//   fs.readFile('demofile1.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);





// Create Files
// The File System module has methods for creating new files:
// fs.appendFile()
// fs.open()
// fs.writeFile()
// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:

// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:

// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });




// Update Files
// The File System module has methods for updating files:
// fs.appendFile()
// fs.writeFile()
// The fs.appendFile() method appends the specified content at the end of the specified file:

// fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// });

// fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// });




// Delete Files
// To delete a file with the File System module,  use the fs.unlink() method.\
// The fs.unlink() method deletes the specified file:

// fs.unlink('mynewfile2.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });



// Rename Files
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});