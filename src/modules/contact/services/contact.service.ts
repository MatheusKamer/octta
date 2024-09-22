import { Injectable } from '@nestjs/common';
import { CreateContactDto } from '../dto/create-contact.dto';
import { UpdateContactDto } from '../dto/update-contact.dto';
import { ContactRepository } from 'src/shared/database/repositories/contact.repositories';

@Injectable()
export class ContactService {
  constructor(private readonly contactsRepo: ContactRepository) {}

  create(createContactDto: CreateContactDto) {
    const { email, phone, address } = createContactDto;

    return this.contactsRepo.create({
      data: {
        email,
        phone,
        address,
      },
    });
  }

  findFirst() {
    return this.contactsRepo.findFirst();
  }

  update(id: string, updateContactDto: UpdateContactDto) {
    const { email, phone, address } = updateContactDto;

    return this.contactsRepo.update({
      where: { id },
      data: {
        email,
        phone,
        address,
      },
    });
  }
}
