export interface ISecurityUseCase {
  loginwithEmail(userName: string, password: String): Promise<void>;
}
