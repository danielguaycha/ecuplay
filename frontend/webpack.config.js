const path = require('path');
const HtmlWebpack = require('html-webpack-plugin')
const miniCss = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    entry: [
        './src/js/home.js',
        './src/app.js',
    ],
    output: {
        path: path.join(__dirname , 'dist'),
        filename: 'bundle.js',
        publicPath : ""
    },
    module: {
        rules: [
            {
                test:  /\.hbs/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: miniCss.loader,
                        options: {
                            publicPath: '../'
                        }
                    },                
                    'css-loader',                    
                    'sass-loader'  
                ]
            }, 
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'static/img/',
                            useRelativePath: true                                
                        }
                    }                    
                ]                
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'static/webfonts/',
                      useRelativePath: true             
                    }
                  }
                ]
            },
            {
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        progressive: true,
                        quality: 65
                      },
                      // optipng.enabled: false will disable optipng
                      optipng: {
                        enabled: true,
                      },
                      pngquant: {
                        quality: '65-90',
                        speed: 4
                      },
                      gifsicle: {
                        interlaced: false,
                      },
                      // the webp option will enable WEBP
                      webp: {
                        quality: 75
                      }
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery'
        }),
        new HtmlWebpack({
            template: './src/index.hbs',          
        }),
        new miniCss({
            filename: 'css/app.css'            
        })
    ]
}