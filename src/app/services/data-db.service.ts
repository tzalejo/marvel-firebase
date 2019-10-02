import { Injectable } from '@angular/core';

import { AngularFirestore,AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { MessageI } from '../models/message.interface';

@Injectable({
  providedIn: 'root'
})
export class DataDbService {

  private contacCollection: AngularFirestoreCollection<any>
  constructor(
    private afs: AngularFirestore
  ) {
    this.contacCollection = afs.collection<MessageI>('contacts');
  }

  saveMessage(newContact: MessageI){
    this.contacCollection.add(newContact);
  }
}
