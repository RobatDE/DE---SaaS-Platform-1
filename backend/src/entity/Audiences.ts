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
 * Schema for audiences entity
 */
export const audiencesSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating audiences
 */
export const audiencesInputSchema = TypeBox.Type.Object({

}, { additionalProperties: false });

export type AudiencesInput = TypeBox.Static<typeof audiencesInputSchema>;

@Entity()
export class Audiences implements TypeBox.Static<typeof audiencesSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

}
