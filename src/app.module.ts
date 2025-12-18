import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaService } from './prisma/prisma.service'
import { envSchema } from '@/env'
import { AuthModule } from './auth/auth.module'
import { AuthenticateController } from './controllers/authenticate.controller'
import {
  CreateAccountController
} from './controllers/create-account.controller'
import {
  CreateQuestionController
} from './controllers/create-question.controller'
import {
  FetchRecentQuestionsController
} from './controllers/fetch-recent-questions.controller'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
      load: [
        () => ({
          DATABASE_URL: process.env.DATABASE_URL,
          DATABASE_SCHEMA: process.env.DATABASE_SCHEMA,
          JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY,
          JWT_PUBLIC_KEY: process.env.JWT_PUBLIC_KEY,
          PORT: process.env.PORT,
        }),
      ],
    }),
    AuthModule,
  ],
  controllers: [
    CreateAccountController, 
    AuthenticateController, 
    CreateQuestionController,
    FetchRecentQuestionsController
  ],
  providers: [PrismaService],
})
export class AppModule {}
