export class CreateCommentDto {
  readonly content: string;
  readonly user: string;
  readonly post: string;
  readonly parent: string;
}
