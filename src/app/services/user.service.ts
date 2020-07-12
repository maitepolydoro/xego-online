import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 userCol: AngularFirestoreCollection<IUser>;

  constructor(private afs: AngularFirestore) { 
    this.userCol = afs.collection<IUser>('users')
  }

  // getAllUsers(): Observable<IUser[]> {
  //   return this.afs.collection<IUser>('users', ref =>
  //     ref.orderBy('create_date', 'asc'))
  //     .valueChanges()
  // }

  // save(user: IUser): Promise<void> {
  //   user.create_date = new Date();
  //   return this.userCol.add(Object.assign({}, user)).then(objeto => {
  //     user.id = objeto.id
  //     this.update(user)
  //   })
  // }

  // update(project: IUser): Promise<void> {
  //   return this.userCol.doc(project.id)
  //     .update(Object.assign({}, project))
  // }

  // delete(user: IUser): Promise<void> {
  //   return this.userCol.doc(user.id)
  //     .delete()
  // }
}
