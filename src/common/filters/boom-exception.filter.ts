import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { isBoom, Boom } from 'boom';

@Catch()
export class BoomExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse();
    let status = 500;
    let message = 'Internal server error';

    if (isBoom(exception)) {
      const boomException = exception as Boom;
      status = boomException.output.statusCode;
      message = boomException.message;
    }

    const errorResponse = {
      statusCode: status,
      error: message,
      message,
    };

    response.status(status).json(errorResponse);
  }
}
