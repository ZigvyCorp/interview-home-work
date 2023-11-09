import { IsDefined } from "class-validator";
import { PaginateQueryDto } from "src/common/dtos/paginate.dto";

export class GetCommentsDto extends PaginateQueryDto {
    @IsDefined()
    postId: string;
}
