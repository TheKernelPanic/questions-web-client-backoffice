import {BaseHttpService} from "./base-http.service";
import {Injectable} from "@angular/core";
import {Tag} from "./model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export default class TagHttpService extends BaseHttpService {

  public create(tag: Tag): Observable<Tag> {
    return this.httpClient.post<Tag>(
      this.applicationServerHost + '/newTag',
      tag
    );
  }

}