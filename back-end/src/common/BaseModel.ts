import { 
  BaseEntity, 
  CreateDateColumn, 
  DeleteDateColumn, 
  Generated, 
  PrimaryColumn, 
  UpdateDateColumn, 
  ValueTransformer 
} from 'typeorm';

export const bigint: ValueTransformer = {
  to: (entityValue: number) => entityValue.toString(),
  from: (databaseValue: string): number => parseInt(databaseValue, 10)
};

export abstract class BaseModel extends BaseEntity {

  @Generated('increment')
  @PrimaryColumn('bigint', { transformer: [bigint] })
  id: number;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    name: 'deleted_at',
    default: () => 'null',
  })
  deletedAt: Date;
}