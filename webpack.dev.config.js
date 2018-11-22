const path = require('path')

module.exports = {
  entry : {
    home : path.resolve(__dirname,'src/js/home')
  },
  output:{
    path : path.resolve(__dirname,'dist'),
    filename : 'js/[name].js'
  },
  devServer : {
    port : 8000
  },
  module:{
    rules : [

      {
        test : /\.(js|jsx)$/,
        exclude : /node_modules/,
        use : {
          loader : 'babel-loader',
          options : {
            presets : ['env','react','stage-2']
          }
        }
      },
      {
        test:/\.css$/,
        use : ['style-loader','css-loader']
      },
      {
        test : /\.(svg|png|jpg|jpeg)$/,
        use :{
          loader : 'url-loader',
          options : {
            limit : 100000,
            fallback : 'file-loader',
            name : 'images/[name].[hash].[ext]'
          }
        }
      }

    ]
  }
}