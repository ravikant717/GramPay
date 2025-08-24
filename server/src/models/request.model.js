import mongoose from "mongoose";
//Store requests
const requestSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    status:  {
        type: String, 
        enum: ["active", "fulfilled"],
        default: "active",
    }
  },
  {
    timestamps: true, //To show member since: GOOD PRACTICE
  },
  { strict: false } //Allows to add more fields later
);

export default mongoose.model("Request", requestSSchema);
