import {useMutation} from 'react-query';
import di from '../di';
import {userSessionAtom, UserSession} from '../frameworks/Jotai';
import {useAtom} from 'jotai';
const [userSession, setUserSession] = useAtom(userSessionAtom);

export function useLoginWithEmail() {
  return useMutation<string, Error, {username: string; password: string}>(
    ['LOGIN_USER'],
    user => {
      return di.securityUseCase.loginwithEmail(user.username, user.password);
    },
    {
      onSuccess: async e => {
        console.log('E', e);

        if (e != null) {
          const newSession: UserSession = {
            isLoggedIn: true,
            token: e,
          };
          setUserSession(newSession);
        }
      },
    },
  );
}
