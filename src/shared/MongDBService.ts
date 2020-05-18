import mongoose from 'mongoose';
import logger from './Logger';

type TInput = {
  db: string;
}
export default ({ db }: TInput) => {

  const connect = () => {
    mongoose
      .connect(
        db,
        { useNewUrlParser: true }
      )
      .then(() => {
        return logger.log('info', `Successfully connected to ${db}`);
      })
      .catch(error => {
        logger.log('error', 'Error connecting to database: ', error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
