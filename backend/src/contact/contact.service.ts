import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private repo: Repository<Contact>,
  ) {}

  async create(dto: CreateContactDto): Promise<{ success: boolean }> {
    const contact = this.repo.create(dto);
    await this.repo.save(contact);
    return { success: true };
  }

  findAll(): Promise<Contact[]> {
    return this.repo.find({ order: { createdAt: 'DESC' } });
  }

  async markRead(id: number): Promise<void> {
    await this.repo.update(id, { read: true });
  }
}
