import { BaseEntity } from 'typeorm';
export declare abstract class TypeOrmBaseEntity extends BaseEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    version: number;
}
