import {atom} from 'jotai';

export type UserSession = {
  isLoggedIn: boolean;
  token: string | null;
};

export const userSessionAtom = atom<UserSession>({
  isLoggedIn: false,
  token: null,
});
