import { Button } from "@/components";

function BlogItemComments() {
  return (
    <div>
      <div className='flex'>
        <p className='text-muted-foreground'>2 replies</p>
        <Button>Expand</Button>
      </div>
    </div>
  );
}

export default BlogItemComments;
