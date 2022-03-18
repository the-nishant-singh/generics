"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
class Config {
    constructor() {
        this.DB_PATH = process.env.DB_PATH;
        this.PORT = process.env.PORT;
        this.NPM_REGISTERY_BASE_PATH = process.env.NPM_REGISTERY_BASE_PATH;
    }
}
exports.config = new Config();
//# sourceMappingURL=config.js.map