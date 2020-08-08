const path=require("path")
const HtmlWebpackPlugin=require("html-webpack-plugin")
module.exports={
    entry:"./index.tsx",
    output:{
        path:path.join(__dirname,"./../","dist"),
        filename:"main.js"
    },
    module:{
        rules:[
            {
                test:"/\.tsx?$/",
                use:{
                    loader:"babel-loader",
                    options:{
                        
                    }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                template:"src/app.html"
            }
        )
    ],
    stats:{
        children:false
    }
}