/** @format */

import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Wallet Subschema (commented out for now)
const WalletSchema = new Schema({
  private_key: {
    type: String,
    default: "",
    required: true,
    unique: true,
  },
  wallet_address: {
    type: String,
    default: "",
    required: true,
    unique: true,
  },
  nonce: {
    type: Number,
    default: 0,
  },
});

// Basic Schema for User
const User = new Schema(
  {
    // chat id (for bot integration, for example)
    chat_id: {
      type: String,
      default: "",
      required: true,
    },
    first_name: {
      type: String,
      default: "",
      required: true,
    },
    last_name: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      default: "",
      required: true,
    },
    // wallets: [WalletSchema], // Array of WalletSchema objects, could be enabled if needed
    private_key: {
      type: String,
      default: "",
      required: true,
      unique: true,
    },
    wallet_address: {
      type: String,
      default: "",
      required: true,
      unique: true,
    },
    preset_setting: {
      type: Array,
      default: [0.01, 1, 5, 10], // Example of preset values for certain configurations
    },
    nonce: {
      type: Number,
      default: 0,
    },
    retired: {
      type: Boolean,
      default: false,
    },
    referrer_code: {
      type: String,
      default: "",
    },
    referrer_wallet: {
      type: String,
      default: "",
    },
    referral_code: {
      type: String,
      default: "",
    },
    referral_date: {
      type: String,
      default: "",
    },
    schedule: {
      type: String,
      default: "60", // Default schedule (e.g., for recurring actions)
    },
    burn_fee: {
      type: Boolean,
      default: false, // Example: Whether burn fee is applied
    },
    auto_buy: {
      type: Boolean,
      default: false, // Automatically buy
    },
    auto_buy_amount: {
      type: String,
      default: "0.1", // Amount for auto-buy
    },
    auto_sell_amount: {
      type: String,
      default: "30", // Amount for auto-sell
    },
  },
  {
    timestamps: true, // This option adds createdAt and updatedAt fields automatically
  }
);

// Create a compound index for username, wallet_address, and nonce
User.index({ username: 1, wallet_address: 1, nonce: 1 }, { unique: true });

// Export the model
export default mongoose.model("user", User);