import * as dotenv from 'dotenv';
dotenv.config()

class Config {
    DB_PATH: String;
    PORT: String;
    NPM_REGISTERY_BASE_PATH: String
   
    constructor() {
      this.DB_PATH = process.env.DB_PATH;
      this.PORT = process.env.PORT;
      this.NPM_REGISTERY_BASE_PATH = process.env.NPM_REGISTERY_BASE_PATH;
    }
  }
  
  export const config = new Config();