const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb+srv://yashjodwash2002:POeM3WeITmYS3Vp3@cluster0.mzgaush.mongodb.net/Airbnb?retryWrites=true&w=majority&appName=Cluster0";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({...obj, owner:"67ebe4decb465cad01286398"}));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
