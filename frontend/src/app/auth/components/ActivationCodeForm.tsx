import BlueButton from '@/components/buttons/BlueButton'
import StyledInput from '@/components/inputs/Input'
import { useActions } from '@/hooks/useActions'
import { AuthService } from '@/services/auth.service'
import { getState } from '@/store/store'
import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import RouteConstants from '../../../../constants/RouteConstants'
import ErrorMessage from '../../../components/error-message/ErrorMessage'

const ActivationCode = () => {
	const { auth } = useSelector(getState)
	const { activateAccount } = useActions()
	const [code, setCode] = useState('')
	const [error, setError] = useState<AxiosError<any>>()
	const router = useRouter()

	const { mutateAsync: activate, isPending } = useMutation<
		AxiosResponse,
		AxiosError
	>({
		mutationKey: ['activate'],
		mutationFn: () => AuthService.activate(Number(code)),
		onSuccess: () => {
			activateAccount()
			router.push(RouteConstants.Account)
		},
		onError: (err) => {
			setError(err)
		}
	})

	return (
		<form className="flex flex-col gap-3 w-72">
			<h4>Введіть код</h4>
			<StyledInput
				placeholder="999999"
				type="number"
				value={code}
				onChange={(e) => setCode(e.target.value)}
			/>
			<BlueButton onClick={() => activate()} isPending={isPending}>
				Підтвердити
			</BlueButton>

			<span className="text-gray-500 text-sm w-64">
				Код був відправлений на почту {auth.user?.email}
			</span>

			{error && <ErrorMessage>{error}</ErrorMessage>}
		</form>
	)
}

export default ActivationCode
