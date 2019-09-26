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
Object.defineProperty(exports, "__esModule", { value: true });
const LRU = require('lru');
class LRUCacheService {
    constructor() {
        this.lruCache = new LRU(50);
    }
    add(key, data, expireInSeconds) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.lruCache.set(key, data);
            return result;
        });
    }
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.lruCache.get(key);
        });
    }
}
exports.LRUCacheService = LRUCacheService;
//# sourceMappingURL=LRUCacheService.js.map