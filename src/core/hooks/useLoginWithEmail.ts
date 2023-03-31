import {useMutation} from 'react-query';
import di from '../di';
import {useSession} from '../frameworks/jotai/atoms';

export function useLoginWithEmail() {
  return useMutation<void, Error, {username: string; password: string}>(
    ['LOGIN_USER'],
    user => {
      return di.securityUseCase.loginwithEmail(user.username, user.password);
    },
  );
}
