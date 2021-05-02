
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    context:process.cwd(),
    mode:'development',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
    },
    devServer:{
        host:'0.0.0.0',
        port:8082,
        open:false,
        before(router) {
            router.get('/success',function(req,res) {
                res.json({id:1});
            });
            router.post('/error',function(req,res){
                res.sendStatus(500);
            });
        },
        contentBase:path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            inject:'head'
        })
    ]
   
}