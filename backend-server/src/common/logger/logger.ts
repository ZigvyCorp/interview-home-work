import { LoggerService } from '@nestjs/common';

export class CustomLogger implements LoggerService {
  private readonly Colors = {
    info: '\x1b[36m',
    error: '\x1b[31m',
    warn: '\x1b[33m',
    verbose: '\x1b[43m',
    debug: '\x1b[43m',
  };

  private logConsole(params: any[], level: string = 'info') {
    const [message, obj, className] = params;
    console.log(
      `${this.Colors[level]}[${className}][${level}] ${message} 
      - meta: ${JSON.stringify(obj)}\x1b[0m`,
    );
  }

  log(...params: any[]) {
    this.logConsole(params, 'info');
  }

  error(...params: any[]) {
    this.logConsole(params, 'error');
  }

  warn(...params: any[]) {
    this.logConsole(params, 'warn');
  }

  debug(...params: any[]) {
    this.logConsole(params, 'debug');
  }

  verbose(...params: any[]) {
    this.logConsole(params, 'verbose');
  }
}
