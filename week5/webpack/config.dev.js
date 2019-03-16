const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("@babel/polyfill");
//env เป็น evironment เช่น Prod,Uat
//args คือ module ที่โยนเข้ามา
module.exports = (env, args) => {
  return {
    mode: "development",
    // devtool:'eval', // ใช้สำหรับdebug
    entry: ["@babel/polyfill", "./index.js"], //ถ้ามี file เดียวหมายถึงว่าให้ bundle เข้าไปที่ file นั้นๆก่อน
    output: {
      filename: "app.js", //'[name].js',//จะเอาชื่อของ entry(bundle file) เข้ามาแทน [name]
      path: path.join(__dirname, "../build"), //dirname จะได้root path//output path ที่ให้ bundle ไปวาง
      publicPath: "/" //Folder ที่ user สามารถเข้าถึง website ได้โดยตรง
    },
    //จุดที่บอกว่า webpack ต้องรู้จักอะไรบ้าง
    module: {
      rules: [
        {
          test: /\.(jsx?)$/, //ต้องใช้ regex เท่านั้น เพราะไม่รู้จัก file extension
          exclude: [/node_modules/, /\.stories/, /storybook/], //ให้เอา node module ออก
          loader: "babel-loader",
          //   use: [
          //     //ถ้าเจอ jsx js จะใช้ตาม package ตามด้านล่าง
          //     "babel-loader"
          //   ],
          options: {
            presets: [
              // ต้องวางให้ถูกการทำงานตามลำดับ ถ้าผิดจะมีผลกับการ bundle
              [
                "@babel/preset-env",
                {
                  targets: {
                    browsers: [
                      "last 2 versions" //บังคับให้ browser ต่างกันแค่2 เวอร์ชั่น
                    ]
                  },
                  modules: false //pre Checking
                }
              ],
              "@babel/preset-react" //การทำงานจะทำจากล่างขึ้นบน
            ]
          }
        },
        {
          test: /\.(css)$/,
          // exclude: /node_modules/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: path.join(__dirname, "../public/index.html")
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, "../public"),
      hot: true,
      inline: true,
      port: 3000,
      historyApiFallback: true //ใช้สำหรับบอกว่าถ้าไม่สามารถเข้าถึง api บาง path ได้จะ callback ไปที่ login
    },
    resolve: {
      modules: ["node_modules", path.resolve(__dirname, "../src")]
    }
  };
};
