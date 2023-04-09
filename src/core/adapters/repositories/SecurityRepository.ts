import {IHttp} from '../infrastructures/interfaces';
import {ISecurityRepository} from './interfaces';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../frameworks/configs/firebase-config';
import {IUserEntity, User} from '../../domain';

export class SecurityRepository implements ISecurityRepository {
  constructor(readonly http: IHttp) {}

  async loginWithEmail(
    userName: string,
    password: string,
  ): Promise<IUserEntity> {
    const res = await signInWithEmailAndPassword(auth, userName, password);
    const token = await res?.user?.getIdToken();
    const userResponse = new User({
      email: res?.user?.email,
      nickname: res?.user?.displayName,
      image: res?.user?.photoURL,
      token,
    });
    console.log('userResponse', userResponse);

    return userResponse;
  }
}
