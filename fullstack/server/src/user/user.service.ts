import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UserService {
    constructor (private prisma: PrismaService) { }

    async getAll() {
        return await this.prisma.user.findMany();
    }

    async getUserById(id: number) {
        return await this.prisma.user.findUnique({
            where: {
                id: id
            }
        });
    }

    async createUser(dto: CreateUserDto) {
        return await this.prisma.user.create({
            data: {
                username: dto.username,
                password: dto.password,
                name: dto.name,
                avatar: dto.avatar,
                dob: dto.dob
            }
        });
    }

    async updateUser(id: number, dto: UpdateUserDto) {
        return await this.prisma.user.update({
            where: {
                id: id
            },
            data: {
                username: dto.username,
                password: dto.password,
                name: dto.name,
                avatar: dto.avatar
            }
        });
    }

    async deleteUser(id: number) {
        return await this.prisma.user.delete({
            where: {
                id: id
            }
        });
    }
}
