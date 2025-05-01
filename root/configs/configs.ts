import * as dotenv from 'dotenv';

dotenv.config();

export const configs = {
  PORT: process.env.PORT,
  MONGODB: {
    URL: 'mongodb://root:root-super-pwd@localhost:27217/crusades',
    PORT: '27217',
    USER: 'root',
    PWD: 'root-super-pwd',
    DB: 'crusades',
  },
};
