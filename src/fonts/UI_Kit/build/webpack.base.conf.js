const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const bemjsonToDecl = require ( 'bemjson-to-decl' );
//const { VueLoaderPlugin } = require('vue-loader')

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  //assets: './'
  //попробовать assets:''
  //assets:'.'
  assets:''
}


module.exports = {
  // BASE config
  externals: {
    paths: PATHS
  },
  entry: {
    pageComponents: PATHS.src //'./src/pageComponents/[name].js' //`${PATHS.src}/pageComponents/[name].js`
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    //publicPath: '/'
	
  },
  module: {
    rules: [
	{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, 
	//{
      //test: /\.vue$/,
      //loader: 'vue-loader',
      //options: {
        //loader: {
          //scss: 'vue-style-loader!css-loader!sass-loader'
        //}
      //}
    //}, 
	{
      test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
      loader: 'file-loader',
      options: {
		//outputPath: `${PATHS.assets}img`,
       name: '[`${PATHS.assets}img`][name].[ext]'
		//name: '[name].[ext]'
      }
    }, 
	{
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, 
		{
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
        }, 
		{
          loader: 'sass-loader',
          options: { sourceMap: true }
        }
      ]
    }, 
	{
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, 
		{
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
        }
		]
	  
    },
	{
		test: /\.pug$/,
		use: [
			'html-loader?attrs=false', 
			{loader:'pug-html-loader',
			options: {pretty: true}}
			]
	},
	{
        test: /\.bemjson\.js$/i,
        loader: 'bemdecl-to-fs!bemjson?-stringify',
    },
	//bem: {
		//levels: [
			//'lib/blocks'
		//],
		//extensions: [
      //'scss'
		//]
	//},
	{ test: /\.html$/, 
		use: [
                {
                    // Передаем результат в bemdecl-to-fs-loader
                    loader: 'bemdecl-to-fs-loader',
                    // Указываем уровни переопределения и расширения технологий
                    options: { levels: ['desktop'], extensions: ['css', 'scss','js'] }
                },
                // Для начала передаем файл в html2bemdecl-loader
		{loader: "html2bemdecl-loader" }
	]}
  
	]
  },
  //resolve: {
    //alias: {
    //  'vue$': 'vue/dist/vue.js'
    //}
  //},
  plugins: [
    //new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`,
	  
    }),
	
    // Copy HtmlWebpackPlugin and change index.html for another html page
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/index.html`,
	  filename: './index.html',
	  template:	`${PATHS.src}/index.pug`,
      filename: 'index.html'
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/img`, to: `${PATHS.assets}img` },
      { from: `${PATHS.src}/static`, to: '' },
	  //{ from: `${PATHS.src}/pageComponents`, test: /\.html$/, to: `${PATHS.assets}` }
    ])
  ],
}
