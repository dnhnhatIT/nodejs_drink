const ketnoi = require('../connect-mysql');

class category {
    constructor () {
        
    }
    getAllCate = (callback) => {
    let sql = "SELECT * FROM category ";
    ketnoi.query(sql, function(err,data){
       callback(err,data);
    });
}
}
module.exports = category;