
const categoryCtrl = require('../controller/categoryControlles')
module.exports = function (app) {
    app.get('/danh-muc', categoryCtrl.index);
    app.get('/them-danh-muc', categoryCtrl.chuyenAdd);
    app.get('/xoa-danh-muc/:id', categoryCtrl.xoaDanhMuc);
    app.get('/sua-danh-muc/:id', categoryCtrl.chuyenEdit);
    app.post('/them-danh-muc', categoryCtrl.addDanhMuc);
    app.post('/sua-danh-muc/:id', categoryCtrl.editDanhMuc);  
}