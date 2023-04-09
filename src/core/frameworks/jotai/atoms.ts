import {useAtom} from 'jotai';
import {atomWithAsyncStorage} from '../../services';
import {IUserEntity} from '../../domain';

export type DashboardStoragetype = {
  theme: boolean | null;
};

export type SessionStorageType = {
  token: string;
  user: IUserEntity;
};
const sessionInformation = atomWithAsyncStorage<
  SessionStorageType,
  SessionStorageType
>('SESSION', {
  token: '',
  user: undefined,
});

const dashboardInformation = atomWithAsyncStorage<
  DashboardStoragetype,
  DashboardStoragetype
>('DASHBOARD', {
  theme: null,
});

export const useSession = () => {
  return useAtom(sessionInformation);
};

export const useDashoard = () => {
  return useAtom(dashboardInformation);
};
