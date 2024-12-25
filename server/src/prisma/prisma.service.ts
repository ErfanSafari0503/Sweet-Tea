import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {

        this.$use(async (params, next) => {

            // if (['create', 'createMany', 'createManyAndReturn'].includes(params.action) == false) params.args['where']['deleted_at'] = null

            if (params.action == 'delete') {

                params.action = 'update'
                params.args['data'] = { deleted_at: new Date() }
            }

            if (params.action == 'deleteMany') {

                if (params.args.data == undefined) params.args['data'] = {}

                params.action = 'updateMany'
                params.args.data['deleted_at'] = new Date()
            }

            const result = await next(params)

            if (result && params?.args?.select?.deleted_at !== true) {

                (result.length !== undefined) ? result.map((r: any) => delete r.deleted_at) : delete result.deleted_at
            }

            return result
        })

        await this.$connect();
    }
}