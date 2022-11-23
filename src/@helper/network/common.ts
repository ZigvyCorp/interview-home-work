export class ApiException<T = any> {
    public status?: number;
    public message?: string;
    public data?: T;
    public code?: string;
  
    constructor(message = '', status = 500, data?: T, code = '') {
      this.status = status;
      this.message = message;
      this.data = data;
      this.code = code;
    }
  }
  