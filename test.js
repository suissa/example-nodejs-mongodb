var m = require("./mongocon")
var blog_models = require("./blog_models");

var Post = m.mongoose.model('BlogPost', blog_models.BlogPost);
var post = new Post();

console.log(post)
post.comments.push({ title: 'My comment' });


post.save(function (err) {
  if (!err) console.log('Success!');
});

Post.find({}, function(err, doc){
  console.log(doc)
})
