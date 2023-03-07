import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  private cache = new Map<string, any>();

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // check if the request is cachable
    if (request.method !== 'GET' || request.headers.get('cache-control') === 'no-cache') {
      return next.handle(request);
    }

    const cachedResponse = this.cache.get(request.urlWithParams);

    if (cachedResponse) {
      // return cached response
      return of(cachedResponse);
    }

    // continue with the request
    return next.handle(request).pipe(
      tap((response) => {
        // cache the response
        this.cache.set(request.urlWithParams, response);
      })
    );
  }
}




