import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    username: String,
    surname: String,
    email: String,
    password: String,
    isPublic: Boolean,
    posts: Array,
    follower: Array,
    following: Array,
    blockList: Array,
    stories: Array,
    notifications: Array,
    bio: Object,
    id: String,
  },
  {
    collection: "Users",
    timestamp: true,
  }
);

const Insan = mongoose.models.Insan || mongoose.model("Usersss", schema);
export default Insan;
