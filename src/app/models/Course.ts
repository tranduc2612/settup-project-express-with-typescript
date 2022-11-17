import {Schema, model} from "mongoose";

const courseSchema = new Schema({
    name: { type: String, default: 'This is a name',maxLength: 255 },
    des: { type: String, default: 'This is a description'},
    img: { type: String, default: 'This is a image',maxLength: 255 },
    slug: { type: String, default: 'This is a slug',maxLength: 255 },
    createdAt: {type: Date, default: Date.now}
})

// const tên model = model('tên của schema', biến của đối tượng schema);
// nếu thiếu cái này thì trong ejs sẽ không thể hiện ra được mặc dù db có trả về
const Course = model('Course', courseSchema);

export { Course };