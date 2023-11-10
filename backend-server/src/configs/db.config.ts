export const mongo = {
  name: 'DB',
  url: process.env.DATABASE_URL || 'mongodb://localhost:27017/test',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
