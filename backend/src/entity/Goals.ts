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
 * Schema for goals entity
 */
export const goalsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating goals
 */
export const goalsInputSchema = TypeBox.Type.Object({

}, { additionalProperties: false });

export type GoalsInput = TypeBox.Static<typeof goalsInputSchema>;

@Entity()
export class Goals implements TypeBox.Static<typeof goalsSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

}
