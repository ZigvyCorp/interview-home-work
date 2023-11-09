import { CustomBaseEntity } from "src/common/entities/base.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from "typeorm";
import { CommentEntity } from "./comment.entity";
import { Expose } from "class-transformer";
import { hashPassword } from "src/utils/password.util";

@Entity("user")
export class UserEntity extends CustomBaseEntity {
    @Column({ type: 'varchar', name: 'name', nullable: false })
    name: string;

    @Column({ type: 'varchar', name: 'username', nullable: false })
    username: string;

    // Remove password when get
    @Expose()
    @Column({ type: 'varchar', name: 'password', nullable: false })
    password: string;

    @Column({ type: 'timestamp', name: 'dob', nullable: false })
    dob: Date;

    @OneToMany(() => CommentEntity, comment => comment.post)
    comments: CommentEntity[];

    // Hash password before insert or update
    @BeforeInsert()
    async beforeInsert() {
        this.username = this.username.toLowerCase();
        this.password = await hashPassword(this.password);
    }

    @BeforeUpdate()
    async beforeUpdate() {
        if(this.password) {
            this.password = await hashPassword(this.password);
        }
    }
}
