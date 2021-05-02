
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    context:process.cwd(),
    mode:'development',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'utils.main.js',
        libraryTarget:'umd',
        library:'utils',
    },
    devServer:{
        host:'0.0.0.0',
        port:8082,
        open:true,
        contentBase:path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            inject:'head'
        })
    ]
   
}