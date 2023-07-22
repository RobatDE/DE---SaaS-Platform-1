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
 * Schema for advertisements entity
 */
export const advertisementsSchema = TypeBox.Type.Object({
    id: TypeBox.Type.String({ format: 'uuid' }),

}, { additionalProperties: false });

/**
 * Input type for editing and creating advertisements
 */
export const advertisementsInputSchema = TypeBox.Type.Object({

}, { additionalProperties: false });

export type AdvertisementsInput = TypeBox.Static<typeof advertisementsInputSchema>;

@Entity()
export class Advertisements implements TypeBox.Static<typeof advertisementsSchema> {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

}
