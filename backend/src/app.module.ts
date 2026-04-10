import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { AcademiaModule } from './academia/academia.module';
import { ProfileModule } from './profile/profile.module';
import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/contact.module';
import { SitemapModule } from './sitemap/sitemap.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT') || 3306,
        username: config.get<string>('DB_USER'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: config.get<string>('NODE_ENV') !== 'production',
        charset: 'utf8mb4',
      }),
    }),
    AuthModule,
    UsersModule,
    CoursesModule,
    AcademiaModule,
    ProfileModule,
    BlogModule,
    ContactModule,
    SitemapModule,
  ],
})
export class AppModule {}
