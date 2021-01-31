import { isEmail, MaxLength, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { SharedProp } from './sharedProp.helper';


@Entity('user')
export class UserEntity extends SharedProp {

    @PrimaryGeneratedColumn()
    id: number;

    @MaxLength(16)
    @MinLength(6)
    @Column({ name: 'user_name', nullable: false })
    username: string;

    @Column({ nullable: false })
    password: string;

    @Column({ nullable: false })
    email: string;
}