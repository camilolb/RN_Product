import {Http} from '../adapters/infrastructures';
import {IInfrastructures} from './interfaces/iInfrastructures';

export const infrastructures = (): IInfrastructures => {
  return {
    http: new Http(),
  };
};
