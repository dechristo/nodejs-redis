import NodeCache from 'node-cache';

export class NodeCacheService implements ICacheService {

    private _nodeCache: NodeCache;

    constructor() {
        this._nodeCache = new NodeCache();
    }

    public async add(key: string, data: string, expireInSeconds: number): Promise<any> {
        const success = await this._nodeCache.set(key, data, 14400 );
        return success;
    }

    public async get(key: string): Promise<object | null> {
        let result = null;
        result = await this._nodeCache.get(key);
        return result;
    }
}
