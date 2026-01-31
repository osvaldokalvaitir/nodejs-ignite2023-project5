import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from '@/infra/env/env'
import { AuthModule } from './auth/auth.module'
import { HttpModule } from './http/http.module'
import { EnvModule } from './env/env.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
      load: [
        () => ({
          DATABASE_URL: process.env.DATABASE_URL,
          JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY,
          JWT_PUBLIC_KEY: process.env.JWT_PUBLIC_KEY,
          PORT: process.env.PORT,
        }),
      ],
    }),
    AuthModule,
    HttpModule,
    EnvModule,
  ],
})
export class AppModule {}
