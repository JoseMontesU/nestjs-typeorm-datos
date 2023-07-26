import { MigrationInterface, QueryRunner } from "typeorm";

export class Nuevo1690403712121 implements MigrationInterface {
    name = 'Nuevo1690403712121'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "UQ_4c9fb58de893725258746385e16"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "name" character varying(254) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "UQ_4c9fb58de893725258746385e16" UNIQUE ("name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "UQ_4c9fb58de893725258746385e16"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "UQ_4c9fb58de893725258746385e16" UNIQUE ("name")`);
    }

}
