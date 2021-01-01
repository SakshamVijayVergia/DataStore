const fql = require('./fql');
const db = new fql();


(async function(){
    await db.createDatastore("user","C:/Users/Asus/Desktop");
    db.useDatastore("users","./datastore");
    await db.insert("saksham",{age: 21});
    // console.log(await db.get("saksham"));
    // db.delete("saksham");
})();
