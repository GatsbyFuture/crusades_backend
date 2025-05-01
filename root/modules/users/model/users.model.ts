import { Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';

export const userSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuid,
    },
    full_name: {
      type: String,
      default: '',
    },
    lang: {
      type: String,
      default: '',
    },
    phone_number: {
      type: String,
      match: [
        /^\+998[0-9]{9}$/,
        "Telefon raqami +998 bilan boshlanishi va 9 ta raqam bo'lishi kerak",
      ],
      trim: true,
      sparse: true,
    },
    notifications: {
      type: Boolean,
      default: true,
    },
    dark_mode: {
      type: Boolean,
      default: false,
    },
    facts: [
      {
        type: String,
        ref: 'facts',
      },
    ],
  },
  { timestamps: true },
);
