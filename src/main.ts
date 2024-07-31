import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Blomit API')
    .setDescription('Blomit API description')
    .setVersion('1.0')
    .addTag('blog', 'blog API')
    .addBearerAuth()
    .setTermsOfService('https://policy.naver.com/policy/service.html')
    .setContact('rani', 'https://www.google.com', 'aixion1506@gmail.com')
    .setLicense(
      'MIT',
      'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt'
    )
    .addServer('http://localhost:3000', 'develop')
    .addServer('http://localhost:4000', 'stagging')
    .addServer('http://blomit.co.kr', 'production')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
