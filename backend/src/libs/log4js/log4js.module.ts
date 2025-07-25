import { DynamicModule, Global, Module } from '@nestjs/common';
import {
    DEFAULT_LOG4JS_OPTIONS,
    getLog4jsLoggerToken,
    getLog4jsOptionsToken,
    Log4jsAsyncOptions,
    Log4jsOptions
} from './log4js.options';
import { createAsyncLog4jsOptions, createLog4jsLogger } from './log4js.providers';
import { Log4jsLogger } from './log4js.classes';

@Global()
@Module({})
export class Log4jsModule {
    static forRoot(options: Log4jsOptions = DEFAULT_LOG4JS_OPTIONS): DynamicModule {
        const name = options.name ?? 'default';

        return {
            module: Log4jsModule,
            providers: [
                {
                    provide: getLog4jsOptionsToken(name),
                    useValue: options
                },
                createLog4jsLogger(name),
                {
                    provide: Log4jsLogger,
                    useExisting: getLog4jsLoggerToken(name)
                }
            ],
            exports: [
                getLog4jsLoggerToken(name),
                {
                    provide: Log4jsLogger,
                    useExisting: getLog4jsLoggerToken(name)
                }
            ]
        };
    }

    static forRootAsync(options: Log4jsAsyncOptions): DynamicModule {
        const name = options.name ?? 'default';

        return {
            module: Log4jsModule,
            imports: options.imports,
            providers: [
                createAsyncLog4jsOptions(options),
                createLog4jsLogger(name ?? ""),
                {
                    provide: Log4jsLogger,
                    useExisting: getLog4jsLoggerToken(name)
                }
            ],
            exports: [
                getLog4jsLoggerToken(name),
                {
                    provide: Log4jsLogger,
                    useExisting: getLog4jsLoggerToken(name)
                }
            ]
        };
    }
}
