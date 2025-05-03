import { Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { FactStatus } from '@app/modules/facts/enum/facts.status.enum';

export const FactSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuid,
    },
    title: {
      type: String,
      required: [true, 'Sarlavha kiritish majburiy'],
      trim: true,
    },
    summary: {
      type: String,
      required: [true, "Qisqacha ma'lumot majburiy"],
    },
    content: {
      type: String,
      required: [true, 'Tavsif kiritish majburiy'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Kategoriya kiritish majburiy'], // masalan:['shaxslar','birinchi salib yurishlari']
      trim: true,
    },
    images_url: String,
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    videos_url: [String],
    created_by: String,
    status: {
      type: String,
      default: FactStatus.PENDING,
    },
    likes: Number,
    comments: Number,
    isApproved: Boolean,
  },
  { timestamps: true },
);
