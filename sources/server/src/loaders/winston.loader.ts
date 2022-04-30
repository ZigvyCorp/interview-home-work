import { configure, format, transports } from 'winston';

import { env } from '../configs/env';

export default () => {
    configure({
        transports: [
            new transports.Console({
                level: env.log.level,
                handleExceptions: true,
                format:
                    env.node !== 'development'
                        ? format.combine(format.json())
                        : format.combine(format.colorize(), format.simple()),
            }),
        ],
    });
};
