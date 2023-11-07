import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
    constructor (private prisma: PrismaService) { }

    async getAll() { }

    async getUser() { }

    async createUser() { }

    async updateUser() { }

    async deleteUser() { }
}
