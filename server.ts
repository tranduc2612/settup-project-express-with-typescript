import express from 'express';
import path from 'path';
import router from './src/routes'; // nó sẽ tự động lai vài index trong mục router
import mongoose from "mongoose";
import db from './src/config/index'
const app = express();

// cài npm i --save-dev @type/express => cài express
// cài npm i --save-dev @types/node => cài node để sử dụng __dirname

app.use(express.static(path.join(__dirname, 'src/public')));
app.set('views', path.join(__dirname, 'src/resources/views'));
app.set('view engine', 'ejs');


mongoose.connect('mongodb://localhost:27017/demo_db')
.then(() => console.log('DB Connected!'))
.catch(error => console.log('DB connection error:', error.message)); 

// middleware của express giúp có thể lấy giữ liệu từ req.body mà không cần cài thằng body-parser
app.use(
    express.urlencoded({
        extended: true,
    }),
);

router(app);
// middleware của express giúp có thể lấy giữ liệu từ từ các thư viện fetch,axios, XMLHttpRequest
app.use(express.json());

app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`);
});


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

// // form default
// // còn nếu post 1 dữ liệu lên phía sever thì phận vào từ req.body
// // express chưa tích hợp sẵn middleware post để lấy dữ liệu từ body nên là phải cài
// // từ phiên bản 4.16 trở đi thì express đã tích hợp vào còn nếu thấp hơn mình phải cài thư viện tên là body-parser
// app.post("/search", (req:Request, res:Response) => {
//     console.log(req.body);
//     res.render("search");
// });