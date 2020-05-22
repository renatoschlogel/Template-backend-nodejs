import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/ExempleUser';

interface Request {
  name: string;
  email: string;
  password: string;
}

class ExempleCreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const cheackUserExists = await userRepository.findOne({
      where: { email },
    });

    if (cheackUserExists) {
      throw new Error('Email address already used!');
    }

    const hashedPassword = await hash(password, 8);

    let user = userRepository.create({ name, email, password: hashedPassword });
    user = await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
