import { 
  HttpHandler, 
  HttpInterceptor, 
  HttpRequest 
} from "@angular/common/http";

export class AuthInterceptorService implements HttpInterceptor{
  intercept(requestObj: HttpRequest<any>, next: HttpHandler) {
    const modifyRequest = requestObj.clone({
      headers: requestObj.headers.append('Auth', 'xyz')
    });
    return next.handle(modifyRequest);
  }
}