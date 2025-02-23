import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CharactersModule } from './characters/characters.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const dbUri = configService.get<string>('MONGODB_URL');
        return { uri: dbUri };
      },
    }),
    UsersModule,
    AuthModule,
    CharactersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
