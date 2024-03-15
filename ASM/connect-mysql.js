const e = require('express');
const mysql = require('mysql');

const ketnoi = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'phuclong'
});

ketnoi.connect(function(err){
    if(err){
        console.log('Kết nối không thành công với MySQL, vui lòng kiểm tra lại !');
    }else{
        console.log('Kết nối thành công với MySQL !');
    }
});

module.exports = ketnoi;