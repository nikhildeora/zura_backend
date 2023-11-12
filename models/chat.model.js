const mongoose = require("mongoose");

const ChatSchema = mongoose.Schema(
  {
    chatbotName: { type: String, required: true },
    welcomeMessage: { type: String, required: true },
    inputPlaceholder: { type: String, required: true },
    primaryColor: { type: String, required: true },
    fontColor: { type: String, required: true },
    fontSize: { type: String, required: true },
    chatHeight: { type: String, required: true },
    showSources: { type: Boolean, required: true },
    chatIconSize: { type: String, required: true },
    positionOnScreen: { type: String, required: true },
    distanceFromBottom: { type: String, required: true },
    horizontalDistance: { type: String, required: true },
    botIcon: { type: String, required: true },
    user_id : {type: String, required : true, unique : true}
  },
  {
    versionKey: false,
  }
);

const ChatModel = mongoose.model("chatbot", ChatSchema);

module.exports = { ChatModel };
