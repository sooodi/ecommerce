import { Document } from 'mongoose';
import { Category } from './Category';

import { User } from './user';

export interface Product extends Document {
  owner: User;
  category:Category;
  title: string;
  image: string;
  description: string;
  isAvailable:Boolean;
  price: number;
  discount:Number;
  stock:Number;
  created: Date;
}
