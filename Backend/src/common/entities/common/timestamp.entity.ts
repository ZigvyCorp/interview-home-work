import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class Timestamp {
  @CreateDateColumn({
    type: 'timestamp without time zone',
    name: 'created_at',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt?: Date | null;

  @Column('bigint', { name: 'created_by', nullable: true, unique: false })
  createdById?: string | null;

  @UpdateDateColumn({
    type: 'timestamp without time zone',
    name: 'updated_at',
    nullable: true,
    default: null,
  })
  updatedAt?: Date | null;

  @Column('bigint', { name: 'updated_by', nullable: true, unique: false })
  updatedById?: string | null;

  @DeleteDateColumn({
    type: 'timestamp without time zone',
    name: 'deleted_at',
    nullable: true,
  })
  deletedAt?: Date | null;

  @Column('bigint', { name: 'deleted_by', nullable: true })
  deletedById?: string | null;
}
