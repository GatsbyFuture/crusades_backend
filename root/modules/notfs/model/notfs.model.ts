import { Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';

export const NotificationSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuid,
    },
    user: {
      type: String,
      ref: 'users',
    },
    type: {
      type: String,
      default: 'note',
    },
    message: String,
    isRead: Boolean,
    relatedFact: {
      type: String,
      ref: 'facts',
    },
    relatedComment: {
      type: String,
      ref: 'comts',
    },
  },
  { timestamps: true },
);
