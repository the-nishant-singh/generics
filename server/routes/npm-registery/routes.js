"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmRegisteryRoutes = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
// Internal Dependencies
const config_1 = require("../../config");
class NpmRegisteryRoutes {
}
exports.NpmRegisteryRoutes = NpmRegisteryRoutes;
_a = NpmRegisteryRoutes;
NpmRegisteryRoutes.getPackagesList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { text, page, size } = req.query;
        const npmUrl = `${config_1.config.NPM_REGISTERY_BASE_PATH}/-/v1/search?text=${text}&size=${size || 10}&from=${page || 0}`;
        const response = yield (0, node_fetch_1.default)(npmUrl);
        const data = yield response.json();
        return res.json({ message: 'Data Fetched', data });
    }
    catch (error) {
        next(error);
    }
});
NpmRegisteryRoutes.getPackageDetails = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, version } = req.query;
        const npmUrl = `${config_1.config.NPM_REGISTERY_BASE_PATH}/${name}/${version}`;
        const response = yield (0, node_fetch_1.default)(npmUrl);
        const data = yield response.json();
        return res.json({ message: 'Package Details Fetched', data });
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=routes.js.map