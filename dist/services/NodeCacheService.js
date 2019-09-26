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
Object.defineProperty(exports, "__esModule", { value: true });
const node_cache_1 = __importDefault(require("node-cache"));
class NodeCacheService {
    constructor() {
        this._nodeCache = new node_cache_1.default();
    }
    add(key, data, expireInSeconds) {
        return __awaiter(this, void 0, void 0, function* () {
            const success = yield this._nodeCache.set("myKey", data, 14400);
            return success;
        });
    }
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = null;
            result = yield this._nodeCache.get("myKey");
            return result;
        });
    }
}
exports.NodeCacheService = NodeCacheService;
//# sourceMappingURL=NodeCacheService.js.map