import {atom} from 'jotai';

export type UserSession = {
  token: string | null;
};

export const userSessionAtom = atom<UserSession>({
  token: null,
});
