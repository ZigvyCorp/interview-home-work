export class CreatePostDto {
  title: string;
  content: string;
  tags: string[];
  owner?: any;
}
