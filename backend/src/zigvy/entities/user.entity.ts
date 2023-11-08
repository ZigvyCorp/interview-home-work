import { CustomBaseEntity } from "src/common/entities/base.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { CommentEntity } from "./comment.entity";

@Entity("user")
export class UserEntity extends CustomBaseEntity {
    @Column({ type: 'varchar', name: 'name', nullable: false })
    name: string;
  
    @Column({ type: 'varchar', name: 'username', nullable: false })
    username: string;
  
    @Column({ type: 'varchar', name: 'password', nullable: false })
    password: string;
  
    @Column({ type: 'timestamp', name: 'dob', nullable: false })
    dob: Date;
  
    @OneToMany(() => CommentEntity, comment => comment.post)
    comments: CommentEntity[];
}
