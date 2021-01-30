import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { SharedProp } from './sharedProp.helper';


@Entity('user')
export class UserEntity extends SharedProp {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'first_name', nullable: false })
    firstName: string;
}