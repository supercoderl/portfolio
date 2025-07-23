import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Log4jsLogger } from './libs/log4js';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const ENV = process.env.ENV || 'local';

async function bootstrap() {
    try {
        console.log('Starting application...');
        console.log('Environment:', ENV);
        console.log('Node Version:', process.version);
        
        const app = await NestFactory.create(AppModule, {
            logger: ['error', 'warn', 'log', 'debug', 'verbose']
        });

        // Enable CORS with more specific configuration
        app.enableCors({
            origin: true,
            credentials: true,
            maxAge: 1728000,
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
            allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Requested-With']
        });

        // Use custom logger
        try {
            app.useLogger(app.get(Log4jsLogger));
        } catch (error) {
            console.warn('Custom logger not available, using default logger');
        }

        // Set global prefix for API routes
        app.setGlobalPrefix('api', {
            exclude: ['/'] // Exclude root path from prefix
        });

        // Setup Swagger documentation for non-production environments
        if (ENV !== "prod" && ENV !== "production") {
            console.log('Setting up Swagger documentation...');
            const options = new DocumentBuilder()
                .setTitle('API Documentation')
                .setDescription('API endpoints documentation')
                .setVersion('1.0')
                .addBearerAuth() // Add if you use JWT authentication
                .build();
            
            const document = SwaggerModule.createDocument(app, options);
            SwaggerModule.setup('api/docs', app, document, {
                swaggerOptions: {
                    persistAuthorization: true,
                },
            });
            console.log('Swagger documentation available at /api/docs');
        }

        // Health check endpoint
        app.getHttpAdapter().get('/test', (req, res) => {
            res.json({
                message: 'API is running!',
                timestamp: new Date().toISOString(),
                environment: ENV,
                version: '1.0.0'
            });
        });

        // Health check endpoint
        app.getHttpAdapter().get('/health', (req, res) => {
            res.json({
                status: 'ok',
                timestamp: new Date().toISOString(),
                uptime: process.uptime(),
                memory: process.memoryUsage(),
                environment: ENV
            });
        });

        // Get port from environment or default to 3000
        const port = parseInt(process.env.PORT ?? '3000', 10) || 3000;
        const host = process.env.HOST || '0.0.0.0';

        console.log(`Attempting to start server on ${host}:${port}`);
        
        // Start the server
        await app.listen(port, host);
        
        console.log(`🚀 Application successfully started!`);
        console.log(`📍 Server running on: http://${host}:${port}`);
        console.log(`🏠 Health check: http://${host}:${port}/health`);
        if (ENV !== "prod" && ENV !== "production") {
            console.log(`📚 API Documentation: http://${host}:${port}/api/docs`);
        }
        console.log(`🌍 Environment: ${ENV}`);
        
    } catch (error) {
        console.error('❌ Error starting the application:', error);
        console.error('Stack trace:', error.stack);
        process.exit(1);
    }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down gracefully');
    process.exit(0);
});

bootstrap();

//# sourceMappingURL=main.js.map