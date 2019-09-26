const LRU = require ('lru');

export class LRUCacheService implements ICacheService {
    private lruCache: any;

    constructor() {
        this.lruCache = new LRU(50);
    }

    public async add(key: string, data: string, expireInSeconds: number): Promise<boolean> {
        const result = await this.lruCache.set(key, data);

        return result;
    }
    public async get(key: string): Promise<object | null> {
        return this.lruCache.get(key);
    }


}