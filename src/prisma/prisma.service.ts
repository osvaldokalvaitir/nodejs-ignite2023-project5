import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'
import pg from 'pg'

const connectionString = process.env.DATABASE_URL
const pool = new pg.Pool({ connectionString })
const adapter = new PrismaPg(pool)

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      adapter,
      log: ['warn', 'error'],
    } as any)
  }

  onModuleInit() {
    return this.$connect()
  }

  onModuleDestroy() {
    return this.$disconnect()
  }
}
