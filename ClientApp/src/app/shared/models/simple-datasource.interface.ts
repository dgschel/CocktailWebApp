import { DataSource } from "@angular/cdk/table";
import { Observable } from "rxjs";

export interface SimpleDataSource<T> extends DataSource<T>
{
  connect(): Observable<T[]>;
  disconnect(): void;
}
