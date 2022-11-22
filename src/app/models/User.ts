import mongoose,{Schema, model} from "mongoose";
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const userSchema = new Schema({
    account: { type: String, default: 'This is a name'},
    password: { type: String, default: 'This is a password'},  
},{
    timestamps:true,
})

const User = model('User', userSchema);
export { User };