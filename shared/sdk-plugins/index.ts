// 插件SDK接口占位
export interface PlatformAPI {
  database: {
    query<T>(sql: string, params?: any[]): Promise<T[]>;
    findOne<T>(collection: string, filter: any): Promise<T | null>;
    insert<T>(collection: string, data: T): Promise<string>;
    update<T>(collection: string, id: string, data: Partial<T>): Promise<boolean>;
    delete(collection: string, id: string): Promise<boolean>;
  };
  events: {
    emit(event: string, data: any): Promise<void>;
    on(event: string, handler: (data: any) => void): () => void;
    once(event: string, handler: (data: any) => void): () => void;
  };
  hooks: {
    register(hookName: string, callback: Function, priority?: number): string;
    unregister(hookId: string): boolean;
    call(hookName: string, context: any): Promise<any[]>;
  };
  permissions: {
    check(userId: string, resource: string, action: string): Promise<boolean>;
    request(permissions: PermissionRequest[]): Promise<PermissionResult[]>;
  };
  storage: {
    upload(file: Buffer | string, options: UploadOptions): Promise<FileMetadata>;
    download(fileId: string): Promise<Buffer>;
    delete(fileId: string): Promise<boolean>;
    share(fileId: string, options: ShareOptions): Promise<string>;
  };
  http: {
    get<T>(url: string, options?: RequestOptions): Promise<Response<T>>;
    post<T>(url: string, data: any, options?: RequestOptions): Promise<Response<T>>;
    put<T>(url: string, data: any, options?: RequestOptions): Promise<Response<T>>;
    delete<T>(url: string, options?: RequestOptions): Promise<Response<T>>;
  };
  utils: {
    crypto: {
      hash(data: string, algorithm: string): Promise<string>;
      encrypt(data: string, key: string): Promise<string>;
      decrypt(data: string, key: string): Promise<string>;
    };
    validation: {
      validate(data: any, schema: any): ValidationResult;
    };
    i18n: {
      t(key: string, params?: any): string;
      getLocale(): string;
    };
  };
}

export interface PermissionRequest { resource: string; actions: string[]; }
export interface PermissionResult { resource: string; granted: boolean; details?: string; }
export interface UploadOptions { filename?: string; contentType?: string; }
export interface FileMetadata { id: string; name: string; size: number; url?: string; }
export interface ShareOptions { expiresIn?: number; password?: string; }
export interface RequestOptions { headers?: Record<string, string>; timeoutMs?: number; }
export interface Response<T> { status: number; data: T; headers?: Record<string, string>; }
export interface ValidationResult { valid: boolean; errors?: string[]; }
