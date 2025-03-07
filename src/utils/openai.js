import OpenAI from 'openai';
import { OPEN_API_KEY } from './constants';

const openAIClient = new OpenAI({
  apiKey: OPEN_API_KEY, 
  dangerouslyAllowBrowser: true
});

export default openAIClient;