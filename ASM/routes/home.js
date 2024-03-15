
const homeCtrl = require('../controller/homeControlles')
module.exports = function(app){
    app.get('/',homeCtrl.home);
}