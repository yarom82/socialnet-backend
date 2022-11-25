import { IAuthDocument } from '@auth/interfaces/auth.interface';
import { AuthModel } from '@auth/models/auth.schema';
import { StringHelpers } from '@global/helpers/string-helpers';

class AuthService {
  public async createAuthUser(data: IAuthDocument): Promise<void> {
    await AuthModel.create(data);
  }

  public async getUserByUsernameOrEmail(username: string, email: string) : Promise<IAuthDocument> {
    const query = {
      $or: [
        { username: StringHelpers.firstLetterUppercase(username) },
        { email: email.toLowerCase() },
      ]
    };
    const user: IAuthDocument = await AuthModel.findOne(query).exec() as IAuthDocument;
    return user;
  }

  public async getAuthUserByUsername(username: string) : Promise<IAuthDocument> {
    const user: IAuthDocument = await AuthModel.findOne({ username: StringHelpers.firstLetterUppercase(username) }).exec() as IAuthDocument;
    return user;
  }
}

export const authService: AuthService = new AuthService();
