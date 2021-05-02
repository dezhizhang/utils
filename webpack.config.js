
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    context:process.cwd(),
    mode:'production',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'utils-lodash.main.js',
        libraryTarget:'umd',
        library:'utils-lodash',
    },
    devServer:{
        host:'0.0.0.0',
        port:8082,
        open:false,
        contentBase:path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            inject:'head'
        })
    ]
   
}