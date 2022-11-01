const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    app: './src/index.js'
  },

  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
  
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.css$/i,
      use: [
        MiniCssExtractPlugin.loader, "css-loader"
      ],
    },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          publicPath: 'assets',
          outputPath: 'images',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: 'assets',
          outputPath: 'fonts',
        }
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            // options:{sourceMap:true}
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ],
      },

    ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist'
  },


  devServer: {
    client: {
      overlay: true
    },
    static: {
      directory: path.join(__dirname)
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ]
}