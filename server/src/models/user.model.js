import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      default: "GramPay User",
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true, //To show member since: GOOD PRACTICE
  }
);

//Mongoose will add Users so make sure the collection has signular name
const user = mongoose.model("User", userSchema);

export default user;
