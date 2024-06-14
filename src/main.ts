import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('ToothLinkAPI')
    .setDescription('ToothLinkAPI ofrece una amplia gama de endpoints para simplificar la integración de sistemas de gestión dental, permitiendo a los desarrolladores acceder a datos de pacientes, citas, tratamientos y más. ToothLinkAPI facilita la construcción de aplicaciones dentales robustas y la mejora de la experiencia del usuario. Explore nuestra documentación para comenzar a integrar ToothLinkAPI en su aplicación dental hoy mismo.')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('ToothLinkAPI/docs', app, document);

  const corsOptions: CorsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    preflightContinue: false,
    optionsSuccessStatus: 204
  };

  app.enableCors(corsOptions);

  await app.listen(3000);
}
bootstrap();
