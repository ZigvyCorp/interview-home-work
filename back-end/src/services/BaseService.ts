import { PaginationRequestDto } from "@dto/request/PaginationRequestDto";
import { getPageResponse, getSkipAndTake } from "@utils/PaginationUtil";
import { DeepPartial, EntityTarget, FindConditions, ObjectLiteral, getRepository } from "typeorm";

export class BaseService {
    protected async createAndSave<Entity>(input: DeepPartial<Entity>, entityClass: EntityTarget<Entity>): Promise<DeepPartial<Entity> & Entity> {
        const repository = getRepository(entityClass);
        const newInstance = repository.create({ ...input }) as DeepPartial<Entity>;
        return repository.save(newInstance);
    }

    protected async findAndPagination<Entity extends object>(
        pagination: PaginationRequestDto,
        entityClass: EntityTarget<Entity>,
        select?: (keyof Entity)[],
        where?: FindConditions<Entity>[] | FindConditions<Entity> | ObjectLiteral | string) {
        const { page, pageSize } = pagination;
        const repository = getRepository(entityClass);

        if (page <= 0) {
            const [entities, count] = await repository.findAndCount();
            return getPageResponse<Entity>({ page, pageSize }, count, entities);
        }
        const { take, skip } = getSkipAndTake(page, pageSize);
        const [posts, count] = await repository.findAndCount({ take, skip, select, where:where });
        return getPageResponse({ page, pageSize }, count, posts)
    }

    protected async deleteOneRecord<Entity extends object>(
        entityClass: EntityTarget<Entity>,
        condition: FindConditions<Entity>,
        softDelete: string) {
        const repository = getRepository(entityClass);
        if (Boolean(JSON.parse(softDelete)) === true) {
            await repository.softDelete(condition);
        } else {
            await repository.delete(condition);
        }
    }
}