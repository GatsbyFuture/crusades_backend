import { Document } from 'mongoose';

export interface INotification extends Document {
  _id: string;
  user: string;
  type: string;
  message: string;
  isRead: boolean;
  relatedFact: string;
  relatedComment: string;
}
