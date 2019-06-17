const server  = require('http');
var fs = require("fs");

const path = './analysis';
const codeList = require(path + '/code');
const content = require(path + '/content');

server.createServer(function(req, res) {
  const newObject = createObject(codeList, content);
  res.write(newObject)
  res.end()
}).listen(8080);

function createObject(list, content) {
  let codeList = [];
  if ( list && content && content.length > 0 ) {
    for ( let key in list ) {
      codeList.push(key);
    }
    for (let index = 0; index < codeList.length; index ++) {
      list[codeList[index]] = content[index];
    }
  }
  const newData = JSON.stringify(list, null, ' ');
  fs.writeFile('result.js', newData,  function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("数据写入成功！");
  });

  return newData;
}
