import mongoose from "mongoose";
const CommentSchema = new mongoose.Schema({
    comment:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true,
    },
    PostId:{
        type:String,
        required:true,
    },
    UserId:{
        type:String,
        required:true,
    }
})

const Comment = mongoose.model("Comment",CommentSchema);

export default Comment;
