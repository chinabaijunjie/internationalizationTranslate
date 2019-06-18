var fs = require("fs");

const path = './analysis';
const codeList = require(path + '/code');
const content = require(path + '/content');

const newObject = createObject(codeList, content);
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
}
