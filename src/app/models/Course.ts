import mongoose,{Schema, model} from "mongoose";
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

// cái này nó giống như table phải khai báo mới Schema mới có thể lấy giữ liệu được
// lưu ý : kể cả trong DB có dữ liệu đi chăng nữa mà trong Schema ko tồn tại trường khai báo (name, des,img) thì khi render ra ejs cũng ko có giữ liệu đâu
const courseSchema = new Schema({
    name: { type: String, default: 'This is a name',maxLength: 255 },
    des: { type: String, default: 'This is a description'},
    img: { type: String, default: 'This is a image',maxLength: 255 },
    slug: { type: String, slug:"name", unique: true },
    // slug sẽ lấy thằng name biến về dạng không dấu và cách nhau bởi dấu gạch ngang ví dụ: Trần Minh Đức => Tran-Minh-Duc    
},{
    timestamps:true,
})

// const tên model = model('tên của collection', biến của đối tượng schema);
// nếu thiếu cái này thì trong ejs sẽ không thể hiện ra được mặc dù db có trả về
const Course = model('Course', courseSchema);
export { Course };