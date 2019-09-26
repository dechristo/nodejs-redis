interface ICacheService {
    add(key: string, data: string, expireInSeconds: number): Promise<boolean>;
    get(key: string): Promise<object | null>;
}
