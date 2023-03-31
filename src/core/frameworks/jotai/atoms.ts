import {useAtom} from 'jotai';
import {atomWithAsyncStorage} from '../../services/atom-with-storage';

export type SessionStorageType = {
  token: string;
};
const sessionInformation = atomWithAsyncStorage<
  SessionStorageType,
  SessionStorageType
>('SESSION', {
  token: '',
});

export const useSession = () => {
  return useAtom(sessionInformation);
};
