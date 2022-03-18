"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const api_1 = require("./routes/api");
const port = config_1.config.PORT || 2501;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Health OK');
});
api_1.api.use('/api', api_1.api);
// app.us
app.listen(port, () => {
    return console.log(`Express is listening at port:${port}`);
});
//# sourceMappingURL=index.js.map