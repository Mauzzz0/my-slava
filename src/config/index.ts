import dotenv from 'dotenv';

import { validate } from '../validation';
import { ConfigDto } from './config.dto';

const { parsed } = dotenv.config();

if (!parsed) {
  throw Error('Parse .env file error');
}

export const config = validate(ConfigDto, parsed);
