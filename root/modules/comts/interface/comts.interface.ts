import { Document } from 'mongoose';

export interface IComment extends Document {
  _id: string;
  content: string;
  created_by: string;
  fact: string;
  status: boolean;
}
