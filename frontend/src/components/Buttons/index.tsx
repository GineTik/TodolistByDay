import classNames from 'classnames'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BaseButton, { BaseButtonProps } from './BaseButton'
import styles from './Button.module.scss'

export const Buttons = {
	Primary: (props: BaseButtonProps & {
		lightBg?: boolean
	}) => {
		return <BaseButton {...props} className={`${styles.base} ${styles.primary} ${props.className} ${props.lightBg ? 'hover:text-black' : 'hover:text-white'}`} />
	},
	Form: (props: BaseButtonProps & {
		lightBg?: boolean
	}) => {
		return <BaseButton {...props} className={`${styles.base} ${styles.form} ${props.className}`} />
	},
	Present: (props: BaseButtonProps) => {
		return <BaseButton {...props} className={`${styles.base} ${styles.primary} ${props.className} hover:text-lime`}>
			{props.children} <ArrowRight className='ml-3' size={18} />
		</BaseButton>
	},
	Banner: (props: BaseButtonProps) => {
		return <BaseButton {...props} className={`${styles.base} ${styles.banner} ${props.className}`}>
			{props.children} <ArrowRight className='ml-3 relative -top-[1px]' size={16} />
		</BaseButton>
	},
	PrimaryHeader: (props: BaseButtonProps) => {
		return <BaseButton {...props} className={`${styles.base} ${styles.primary_header} ${props.className}`} />
	},
	PrimaryDark: (props: BaseButtonProps) => {
		return <BaseButton {...props} className={`${styles.base} ${styles.primary_dark} ${props.className}`}>
			{props.children} <ArrowRight className='ml-3' size={14} strokeWidth={2} />
		</BaseButton>
	},
	Secondary: (props: BaseButtonProps) => {
		const cn = classNames(styles.base, styles.secondary, 'py-3 px-7', props.className)
		return <BaseButton {...props} className={cn} />
	},
	Icon: (props: BaseButtonProps) => {
		const cn = classNames(styles.base, styles.secondary, 'p-2', props.className)
		return <BaseButton {...props} className={cn} />
	},
	Emerging: (props: BaseButtonProps) => {
		const cn = classNames(styles.base, styles.emerging, 'py-3 px-7', props.className)
		return <BaseButton {...props} className={cn} />
	},
	Tag: (props: BaseButtonProps) => {
		const cn = classNames(styles.base, styles.tag, props.className)
		return <BaseButton {...props} className={cn} />
	},
	Tab: (props: Omit<BaseButtonProps, 'href'> & {
		href: string
	}) => { 
		var pathname = usePathname();
		const cn = classNames(styles.base, styles.tab, props.href === pathname ? styles.tab_selected : '', props.className)
		return <BaseButton as={props.href === pathname ? "span" : Link} {...props} className={cn} />
	},
}
