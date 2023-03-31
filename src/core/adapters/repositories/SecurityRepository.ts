import {IHttp} from '../infrastructures/interfaces';
import {ISecurityRepository} from './interfaces';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../frameworks/configs/firebase-config';
import {useSession} from '../../frameworks/jotai/atoms';

export class SecurityRepository implements ISecurityRepository {
  constructor(readonly http: IHttp) {}

  async loginWithEmail(userName: string, password: string): Promise<void> {
    const [sessionInformation, setSessionInformation] = useSession();
    try {
      const res = await signInWithEmailAndPassword(auth, userName, password);
      const token = res.user.getIdToken();
      setSessionInformation(token);
    } catch {
      console.log('error');
    }
  }
}
