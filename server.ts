import express,{ Request, Response } from 'express';
import path from 'path';
import router from './src/routes'; // nó sẽ tự động lai vài index trong mục router
import mongoose from "mongoose";
import methodOverride from 'method-override';
import db from './src/config/index'
import cors from 'cors';
require("dotenv").config();
const app = express();
const api = express();
const PORT = process.env.PORT || 5000;
const connectStr = process.env.DB_CONNECTION || '';

//npm i --save-dev @type/express => cài express
//npm i --save-dev @types/node => cài node để sử dụng __dirname
//npm i --save-dev @types/mongoose-slug-generator => để hỗ trợ slug trong router
//npm i method-override => để có thể sử dụng được PUT/PATCH/DELETE method (RESTFUL API)
//npm i mongoose validator => ko bt để làm j nma cứ cài đi :)))
//npm i @types/mongoose --save-dev => cài mongoose
//
//npm i nodemon
//
//npm i husky => gâu gâu gâu !
//npm i lint-staged
//npm i prettier
//=> bộ ba husky,lint-staged,prettier để giúp cho trình bày code đẹp hơn
// chạy là npm run beautify (config nó ở trong file package.json)


//npm i node-sass
// cái này để code SASS complier về CSS bằng câu lệnh npm run watch
// sass -> css(file CSS sẽ được complier về file public/css *Tuyệt đối ko được code trong file này*) (config trong file package.json)

//npm i --save-dev bcryptjs => thư viện hash mã mật khẩu
//npm i dotenv
//npm i --save-dev @types/jsonwebtoken 

// cài đường dẫn để chạy vào các file tĩnh như img, mp3,... trong public
app.use(express.static(path.join(__dirname, 'src/public')));

// cài đường dẫn để chạy thẳng vào file view
app.set('views', path.join(__dirname, 'src/resources/views'));


// set view engine cho dự án (ejs)
app.set('view engine', 'ejs');

// thằng này để có thể có thể nhận dữ liệu PUT,PATH và DELETE
app.use(methodOverride('_method'));

mongoose.connect(connectStr)
.then(() => console.log('DB Connected!'))
.catch(error => console.log('DB connection error:', error.message)); 

// middleware của express giúp có thể lấy giữ liệu từ req.body mà không cần cài thằng body-parser
app.use(
    express.urlencoded({
        extended: true,
    }),
);

router(app);

api.get("/",(req:Request, res:Response)=>{
    res.status(201).json({name:"duc"});
})

// middleware của express giúp có thể lấy giữ liệu từ từ các thư viện fetch,axios, XMLHttpRequest
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

api.listen(5000, () => {
    console.log("Hello");
})

// cách nhận dữ liệu khi người dùng nhập vào

// query parameters
// GET sẽ chuyển đi với dạng query parameters
// chuyền query parameters bằng phương thức GET (thường là thế) localhost:3000?ten=tran%duc&&tuoi=19
// GET method dùng khi muốn nhận dữ liêu từ phía sever ra phía FE
// thằng query này sinh ra được là vì thằng Express nó đã tích hợp sẵn middleware để xử lí

// app.get("/", (req:Request, res:Response) => {
//     // console.log(req.query);
//     // res.query.ten lấy ra tranduc;
//     // res.query.tuoi lấy ra 19

//     res.render("index");
// });

// app.get("/search", (req:Request, res:Response) => {
//     console.log(req.query);
//     res.render("search");
// });

// // form default (nếu người dùng gửi đi là POST)
// // còn nếu post 1 dữ liệu lên phía sever thì vào từ req.body
// // express chưa tích hợp sẵn middleware post để lấy dữ liệu từ body nên là phải cài
// // từ phiên bản 4.16 trở đi thì express đã tích hợp vào còn nếu thấp hơn mình phải cài thư viện tên là body-parser
// app.post("/search", (req:Request, res:Response) => {
//     console.log(req.body);
//     res.render("search");
// });