import { Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';

export const commentSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuid,
    },
    content: {
      type: String,
      required: true,
    },
    created_by: {
      type: String,
      ref: 'users',
    },
    fact: {
      type: String,
      ref: 'facts',
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);
