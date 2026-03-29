import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Accept all configured origins (comma-separated) + www variant automatically
  const rawOrigins = (process.env.FRONTEND_URL || 'http://localhost:5173')
    .split(',')
    .map((o) => o.trim());

  // For every https://domain.tld also allow https://www.domain.tld and vice versa
  const allowedOrigins = new Set<string>(rawOrigins);
  rawOrigins.forEach((o) => {
    if (o.startsWith('https://www.')) {
      allowedOrigins.add(o.replace('https://www.', 'https://'));
    } else if (o.startsWith('https://')) {
      allowedOrigins.add(o.replace('https://', 'https://www.'));
    }
  });

  app.enableCors({
    origin: (origin, callback) => {
      // Allow server-to-server or same-origin requests (no Origin header)
      if (!origin || allowedOrigins.has(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS: origin '${origin}' not allowed`));
      }
    },
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.setGlobalPrefix('api');

  const port = process.env.APP_PORT || 3000;
  await app.listen(port);
  console.log(`🚀 withjp.ai API running on port ${port}`);
}
bootstrap();
