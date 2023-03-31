import {IUserEntity, IUserEntityData, User} from '../../domain';
import {IHttp} from '../infrastructures/interfaces';
import {ISecurityRepository} from './interfaces';
import auth from '@react-native-firebase/auth';

export class SecurityRepository implements ISecurityRepository {
  constructor(readonly http: IHttp) {}

  async loginWithEmail(userName: string, password: string): Promise<string> {
    const result = await auth().signInWithEmailAndPassword(userName, password);
    return result.user.getIdToken();
  }
}
