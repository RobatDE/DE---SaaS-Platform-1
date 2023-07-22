import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    DeleteDateColumn,
    CreateDateColumn,
    UpdateDateColumn,

} from 'typeorm';
import * as TypeBox from '@sinclair/typebox';

import { Nullable } from '../utils';

/**
 * Schema for buyers entity
 */
export const buyersSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating buyers
 */
export const buyersInputSchema = TypeBox.Type.Object({

}, { additionalProperties: false });

export type BuyersInput = TypeBox.Static<typeof buyersInputSchema>;

@Entity()
export class Buyers implements TypeBox.Static<typeof buyersSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

}
