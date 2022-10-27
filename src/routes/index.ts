import { Request, Response } from 'express';
import homeRouter from './home';
import searchRouter from './search';

export default function route(app: any) {
    app.use('/home', homeRouter);
              app.use('/search', searchRouter);
}

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
