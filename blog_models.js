var m = require("./mongocon")

var Schema = m.mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Comments = new Schema({
  title: String,
  body: String,
  date: Date
});

var BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  buf: Buffer,
  date: Date,
  comments: [Comments],
  meta: {
    votes: Number,
    favs: Number
  }
});

exports.BlogPost = BlogPost
exports.Comments = Comments
exports.Schema = Schema
