import { Document } from 'mongoose';
import { FactStatus } from '@app/modules/facts/enum/facts.status.enum';

export interface IFact extends Document {
  _id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  images_url: string;
  videos_url: string;
  created_by: string;
  status: FactStatus;
  likes: number;
  comments: string;
  isApproved: boolean;
}
