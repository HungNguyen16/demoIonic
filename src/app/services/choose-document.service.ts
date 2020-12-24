import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { ChooseDocumentModel } from '../models/choose-document-model';

@Injectable({
  providedIn: 'root'
})
export class ChooseDocumentService {
  public url = 'assets/data/data-choose-document.json';
  constructor(private http: HttpClient) { }
  getChooseDocumentByType(type: string): Observable<ChooseDocumentModel[]> {
    return this.http.get<ChooseDocumentModel[]>(this.url).pipe(
      map((res: ChooseDocumentModel[]) => {
        {
          res = res.filter((e) => e.documentType === type);
          return res;
        }
      })
    );
  }

}
