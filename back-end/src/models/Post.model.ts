import { Column, Entity } from "typeorm";
import { BaseModel } from "./BaseModel";

@Entity('post')
export class PostModel extends BaseModel {
  @Column({ type: 'varchar', name: 'name', nullable: false })
  name: string;
}