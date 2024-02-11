import LinkBlock from '@/app/api/components/LinkBlock'
import ApiSection from '@/app/api/components/Section/Section'
import H3 from '@/components/headings/H3'
import H4 from '@/components/headings/H4'
import RouteConstants from '../../../../../../constants/RouteConstants'

const page = () => {
	return (
		<>
			<H3>Вступ</H3>
			<ApiSection>
				<p>Ласкаво просимо до документації API для dropshipping платформи!</p>
				<p>
					Наше API - це потужний інструмент, призначений для спрощення процесу
					управління та взаємодії з асортиментом товарів, наданим магазинами, що
					працюють по схемі dropshipping. За допомогою нашого API ви зможете
					отримувати доступ до широкого спектру товарів, які доступні через ці
					магазини, та надавати їх вашим клієнтам.
				</p>
			</ApiSection>
			<ApiSection>
				<H4 className="pt-3">Наше API надає такі ключові можливості:</H4>
				<div className="grid grid-cols-2 gap-5 pb-10 max-w-[750px]">
					<LinkBlock
						href={RouteConstants.Api.GetFilteredOffers}
						title="Отримуйте товари від поставщиків"
						description="Отримуйте відфільтровані за потреби товари по любому полю. Сторінка фільтрів чи схожі товари? Легко."
					/>
					<LinkBlock
						href={RouteConstants.Api.SendOrder}
						title="Відправлення замовлень в кабінет"
						description="Функція відправлення замовлень надає зручний спосіб обробки покупок і забезпечує швидку доставку товарів вашим клієнтам."
					/>
					<LinkBlock
						href={RouteConstants.Api.HowItWorks}
						title="Широкий вибір товарів та постачальників"
						description="Наше API надає доступ до великого асортименту товарів від різних постачальників, що дозволяє вам пропонувати різноманітний вибір продуктів вашим клієнтам."
					/>
				</div>
			</ApiSection>
			<ApiSection>
				<H4>Наше API надає безліч переваг, включаючи:</H4>
				<ul className="space-y-3 list-disc pl-7">
					<li>
						<b>Постійну актуальність даних</b>: Завдяки нашому API ви отримуєте
						доступ до постійно оновлюваної інформації про товари, що дозволяє
						вам завжди мати під рукою актуальні дані для вашого бізнесу.
					</li>
					<li>
						<b>Гнучкість і простота використання</b>: Наше API просте в
						інтеграції та використанні, що дозволяє швидко розпочати роботу з
						ним без зайвих ускладнень.
					</li>
				</ul>
				<p>
					Наше API - це ключовий елемент для вашого успішного dropshipping
					бізнесу. Ми рекомендуємо ознайомитися з детальною документацією, щоб
					отримати повний огляд доступних функцій та можливостей.
				</p>
			</ApiSection>
		</>
	)
}

export default page
