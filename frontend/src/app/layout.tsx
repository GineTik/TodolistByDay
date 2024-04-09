import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import type { Metadata } from 'next'
import { Bounce, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ClientProviders from './ClientProviders'
import styles from './globals.module.scss'
import './import-tailwind.css'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="h-full" data-mode="dark">
			<body className={`${styles.body}`}>
				<ClientProviders>
					<ToastContainer
						position="top-right"
						autoClose={3000}
						limit={10}
						closeOnClick
						pauseOnFocusLoss
						pauseOnHover
						theme="dark"
						transition={Bounce}
						closeButton={false}
						toastClassName={styles.toast}
						bodyClassName={styles.toast__body}
					/>
					<Header />
					<main className="flex flex-col w-full flex-1 text-base/relaxed">{children}</main>
					<Footer />
				</ClientProviders>
			</body>
		</html>
	)
}
