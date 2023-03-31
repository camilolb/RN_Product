import {tokenAtom} from '../../core/frameworks/jotai/atoms';
import {startTransition} from 'react';
import {useAtom} from 'jotai';

const getToken = async () => {
  const [token] = await Promise.all([useAtom(tokenAtom)]);
  return token;
};

const getAsyncToken = async () => {
  const token = await getToken();
  return startTransition(() => token);
};

export default getAsyncToken;
