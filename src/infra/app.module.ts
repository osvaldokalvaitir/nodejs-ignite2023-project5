import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from '@/infra/env'
import { AuthModule } from './auth/auth.module'
import { HttpModule } from './http/http.module'

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
    HttpModule,
  ],
})
export class AppModule {}
