import {useMutation} from 'react-query';
import di from '../di';
import {userSessionAtom, UserSession} from '../frameworks/Jotai';
import {useAtom} from 'jotai';

export function useLoginWithEmail() {
  const [, setUserSession] = useAtom(userSessionAtom);

  return useMutation<string, Error, {username: string; password: string}>(
    ['LOGIN_USER'],
    user => {
      return di.securityUseCase.loginwithEmail(user.username, user.password);
    },
    {
      onSuccess: async token => {
        const newSession: UserSession = {
          token: token,
        };
        setUserSession(newSession);
      },
    },
  );
}
