const mongoose = require("mongoose");
//const { collection } = require("../models/user");
const { BookSchema } = require("../models/books");


const AllTaskCollection = mongoose.model("book-collec3", BookSchema);
//const AllUserCollection = mongoose.model("User");
const changeStream = AllTaskCollection.watch();

mongoose.set("strictQuery", true);
const connectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    })

    .then(() => {
      console.log("connected to db");
      console.log("starting scan of all tasks")


      // changeStream.on('change', (change) => {
      //   console.log('Change event:', change);

      // });

      console.log('Listening for changes...');
    
      // mongoose.connection.db.listCollections().toArray((err, collections) => {
      //   console.log("came here")
      //   collections.forEach((collection) => {

      //     console.log(collection)
      //     console.log(collection.name);

      //     // if(collection.name == 'tasks'){
      //     //   console.log("entering asks collection")
      //     // //  cronStarter(collection)
      //     // }


      //   });
      // });
    })
    .catch((err) => {
      console.log(err);
    });
};

//console.log(connectDB.getCollectionNames())

module.exports = {
  connectDB,
};
