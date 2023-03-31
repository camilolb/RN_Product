import {useAtom} from 'jotai';
import {atomWithAsyncStorage} from '../../services/atom-with-storage';

export type DashboardStoragetype = {
  theme: boolean | null;
};

export type SessionStorageType = {
  token: string;
};
const sessionInformation = atomWithAsyncStorage<
  SessionStorageType,
  SessionStorageType
>('SESSION', {
  token: '',
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
