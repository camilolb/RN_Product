import {useMutation} from 'react-query';
import di from '../di';
import {useSession} from '../frameworks/jotai';

export function useLoginWithEmail() {
  const [, setSessionInformation] = useSession();
  return useMutation<string, Error, {username: string; password: string}>(
    ['LOGIN_USER'],
    user => {
      return di.securityUseCase.loginwithEmail(user.username, user.password);
    },
    {
      onSuccess: async e => {
        setSessionInformation({token: e});
      },
    },
  );
}
