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
 * Schema for company entity
 */
export const companySchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating company
 */
export const companyInputSchema = TypeBox.Type.Object({

}, { additionalProperties: false });

export type CompanyInput = TypeBox.Static<typeof companyInputSchema>;

@Entity()
export class Company implements TypeBox.Static<typeof companySchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

}
