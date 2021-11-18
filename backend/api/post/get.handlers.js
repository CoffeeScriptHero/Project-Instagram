const Post = require("../../models/post.model");

exports.getPostsByUserId = async (req, res) => {
  const post = await Post.find({ user_id: req.params.user_id })
      .populate("user_id")
      .exec();

  if (!post) {
    res.status(404).send("Posts not found!").end();
  }

  res.send(post).end();
};

exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate("user_id").exec();

  res.send(posts).end();
};