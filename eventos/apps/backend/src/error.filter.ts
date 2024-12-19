import { ExceptionFilter, Catch, ArgumentsHost } from "@nestjs/common";
import { Request, Response } from "express";

@Catch(Error)
export class ErrorFilter implements ExceptionFilter {
    catch(exception: Error, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        
        const req = ctx.getRequest<Request>();
        const res = ctx.getResponse<Response>();
      
        const status = (exception as any).getStatus ? (exception as any).getStatus() : 500;

        console.error(exception);

        res.status(status).json({
            statusCode: status,
            message: exception.message
        });
    };
}