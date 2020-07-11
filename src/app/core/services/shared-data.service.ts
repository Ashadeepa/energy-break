import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Store } from 'src/app/shared/models/store';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public storeDataSource = new BehaviorSubject(new Store());
  store = this.storeDataSource.asObservable();
  storeData: Store;

  constructor() { }

  updateStore(data) {
    this.storeDataSource.next(data);
  }

  resetStoreOnLogout() {
    this.store.pipe(take(1)).subscribe(
      (store: Store) => {
        this.storeData = store;
        
      }
    );
  }

}
