import express from 'express';
import path from 'path';
import router from './src/routes'; // nó sẽ tự động lai vài index trong mục router
const app = express();

// cài npm i --save-dev @type/express => cài express
// cài npm i --save-dev @types/node => cài node để sử dụng __dirname

app.use(express.static(path.join(__dirname, 'src/public')));
app.set('views', path.join(__dirname, 'src/resources/views'));
app.set('view engine', 'ejs');

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
