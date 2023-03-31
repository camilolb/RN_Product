import {ISecurityRepository} from '../../adapters/repositories';
import {ISecurityUseCase} from './interfaces';

export class SecurityUseCase implements ISecurityUseCase {
  constructor(readonly securityRepo: ISecurityRepository) {}

  async loginwithEmail(userName: string, password: string): Promise<void> {
    return await this.securityRepo.loginWithEmail(userName, password);
  }
}
