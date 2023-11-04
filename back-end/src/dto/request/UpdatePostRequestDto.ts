export class UpdatePostRequestDto {
    id: number;
    title: string;
    content: string;
    tags: string[];
    ownerId: number;
}