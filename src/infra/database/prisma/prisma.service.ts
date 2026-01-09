import {
  Inject,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'
import { EnvService } from '@/infra/env/env.service'

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(@Inject(EnvService) env: EnvService) {
    const databaseUrl = env.get('DATABASE_URL')
    const databaseSchema = env.get('DATABASE_SCHEMA')

    const adapter = new PrismaPg(
      { connectionString: databaseUrl },
      { schema: databaseSchema },
    )

    super({
      adapter,
      log: ['warn', 'error'],
    })
  }

  onModuleInit() {
    return this.$connect()
  }

  onModuleDestroy() {
    return this.$disconnect()
  }
}
