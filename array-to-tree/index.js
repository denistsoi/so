//http://stackoverflow.com/questions/43181688/javascript-convert-a-plain-array-of-nodes-with-pointers-to-parent-nodes-to-a/43182406#43182406

var att = require('array-to-tree');

var arr = [
{
  "_id": "33",
  "parent": null,
  "name": "Wealth and Investment Management and Insurance",
  "code": "wm-0001",
  "__v": 0
}, {
  "_id": "34",
  "parent": null,
  "name": "Corporate and Investment Banking",
  "code": "cib-0001",
  "__v": 0
}, {
  "_id": "35",
  "parent": "33",
  "name": "WIMI Business Unit 1",
  "code": "WIMBU-0001",
  "__v": 0
}];

var tree = att(arr);

console.log(
  JSON.stringify(
    att(arr, { parentProperty: 'parent', customID: '_id' }), null, 4
  )
);