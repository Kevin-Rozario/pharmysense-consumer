class ApiError extends Error {
  success: boolean;
  statusCode: number;
  errors: any;

  constructor(statusCode: number, message: string, errors?: any) {
    super(message);
    this.success = false;
    this.statusCode = statusCode;
    this.errors = errors;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;
