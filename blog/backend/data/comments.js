import mongoose from 'mongoose';

const userId1 = new mongoose.Types.ObjectId('603dc5ecc78d1442600ce0d8');
const userId2 = new mongoose.Types.ObjectId('603dc5ecc78d1442600ce0db');
const userId3 = new mongoose.Types.ObjectId('603dc5ecc78d1442600ce0dc');
const userId4 = new mongoose.Types.ObjectId('603dc5ecc78d1442600ce0de');

const postId1 = new mongoose.Types.ObjectId('603e0c3b4f2e0343143c7472');
const postId2 = new mongoose.Types.ObjectId('603e0c3b4f2e0343143c7473');

const comments = [
  {
    user: userId1,
    post: postId1,
    body:
      'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
  },
  {
    user: userId2,
    post: postId1,
    body:
      'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
  },
  {
    user: userId3,
    post: postId2,
    body:
      'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
  },
  {
    user: userId4,
    post: postId2,
    body:
      'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati',
  },
];

export default comments;
