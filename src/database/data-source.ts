import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
  type: 'postgres',
  url: 'postgres://root:neo.123@192.168.233.129:5432/mydb',
  synchronize: false,
  logging: false,
  entities: ['src/**/*.entity.ts'],
  // entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*.ts'],
  migrationsTableName: 'migrations',
})
