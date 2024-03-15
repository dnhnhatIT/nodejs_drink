
const ketnoi = require('../connect-mysql');
const util = require('node:util');
const query = util.promisify(ketnoi.query).bind(ketnoi);
const category = require('../model/category.model');

exports.index = async function(req , res) {
    // const cat = new category();
    // cat.getAllCate(function(err,data){
    //     console.log(data);
    // })
    let sql = "SELECT * FROM category ";
    let _search = req.query.search
    if(_search){
        sql += "WHERE name LIKE '%" + _search + "%'";
    }
    sql += "order by id DESC";
    ketnoi.query(sql, function(err,data){
        res.render('category', {
            data: data,
        });
    });
};
exports.chuyenAdd = function(req , res) {
    res.render('category-add');
}

exports.xoaDanhMuc = function(req , res ){
    let id = req.params.id;
    let sql_delte = "DELETE FROM category WHERE id = ?";
    ketnoi.query(sql_delte , [id] , function(err,data){
        if(err){
            let msg = '';
            if(err.errno == 1451){
                msg = 'Danh mục đang có sản phẩm';
            }else{
                msg = 'vui lòng thử lại'
            }

            res.render('error', {
                message: msg,
                code: err.errno
            });
            
        }else{
            res.redirect('/danh-muc')
        }
    });
}
exports.chuyenEdit = function(req,res){
    let id = req.params.id;
    ketnoi.query("SELECT * FROM category WHERE id = ?",[id], (err,data) => {
        res.render('category-edit', {
            item: data.length ? data[0] : {},
        })
    })
}
exports.addDanhMuc = function(req,res){
    let sql = `INSERT INTO category SET ?`
    ketnoi.query(sql , req.body, (err,data) => {
        res.redirect('/danh-muc')
    })
}
exports.editDanhMuc = function(req,res){
    let id = req.params.id
    let sql = `UPDATE category SET ? WHERE id = ?`
    ketnoi.query(sql , [req.body, id], (err,data) => {
        res.redirect('/danh-muc')
    })
}