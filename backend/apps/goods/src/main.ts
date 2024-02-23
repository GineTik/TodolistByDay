import {
	connectToRabbitMqMicroservice,
	defaultStartMicroservice
} from '@app/microservices'
import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { GoodsModule } from './goods.module'

async function bootstrap() {
	const app = await NestFactory.create(GoodsModule)

	app.useLogger(Logger)
	app.enableCors()

	connectToRabbitMqMicroservice(app, 'goods')
	defaultStartMicroservice(app)
}
bootstrap()
