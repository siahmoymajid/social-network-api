const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Invalid email format!"],
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
 
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendcount` that gets and sets the user
userSchema
  .virtual("friendCount")
  // Getter
  .get(function () {
    return this.friends.length;
  });
// Setter to set the friends length 

// Initialize our User model
const User = model("User", userSchema);

module.exports = User;
