import { EntityRepository, Repository } from 'typeorm';
import ExempleUser from '../models/ExempleUser';

@EntityRepository(ExempleUser)
class ExempleUserRepository extends Repository<ExempleUser> {
  
  public async findByDate(date: Date): Promise<ExempleUser | null> {
    const findExemple = await this.findOne({
      where: { date },
    });

    return findExemple || null;
  }
}

export default ExempleUserRepository;
