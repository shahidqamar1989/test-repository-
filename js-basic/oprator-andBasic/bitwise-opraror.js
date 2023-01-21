// 2=00000010
// 3=00000011
// R= 0000000
// Reade Write Execute
//00000100
//00000010
//00000001

const readPermission = 4;
const WritePermission = 2;  
const ExecutePermission = 1;

let myPermission = 0;
myPermission = myPermission | WritePermission;

let massage = (myPermission & readPermission) ? 'yes' : 'no';

console.log(massage);   