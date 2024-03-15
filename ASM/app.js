const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

// trang chủ
require('./routes/home')(app);

// trang quản lý danh mục
require('./routes/category')(app);

app.listen(PORT, () => {
    console.log('đang chạy công http://localhost:'+ PORT);
})
