// const User = require('./models/user.model');
// const getUsers = require('./collection_generators/user.generator');
// const Post = require('./models/post.model');
// const getPosts = require('./collection_generators/post.generator');

const express = require("express");
const ConfigService = require("./helpers/config.service");
const { connectToDatabase } = require("./helpers/db.helper");
const routersRegister = require("./api/index");

// ConfigService.init();
const app = express();

async function main() {
  routersRegister(app);

  await connectToDatabase();

  const port = ConfigService.get("APP_PORT");
  app.listen(port, () => {
    // generateUsers()
    // generatePosts()
    console.log(`App start on port ${port}`);
  });
}

// async function generateUsers() {
//     for(const chooseUser of getUsers) {
//         const user = new User(chooseUser);
//         await user.save()
//     }
// }

// async function generatePosts() {
//     for(const choosePost of getPosts) {
//         const post = new Post(choosePost);
//         await post.save()
//     }
// }

main();
