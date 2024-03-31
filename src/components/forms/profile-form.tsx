'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { EditUserProfileSchema } from '@/lib/types'

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

export const ProfileForm = () => {
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<z.infer<typeof EditUserProfileSchema>>({
		mode: 'onChange',
		resolver: zodResolver(EditUserProfileSchema),
		defaultValues: {
			name: '',
			email: '',
		},
	})

	return (
		<Form {...form}>
			<form className='flex flex-col gap-6' onSubmit={() => {}}>
				<FormField
					disabled={isLoading}
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='text-lg'>Полное имя пользователя</FormLabel>
							<FormControl>
								<Input
									placeholder='Имя'
									{...field}
									disabled={isLoading}
									className='w-full max-w-2xl'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					disabled={isLoading}
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='text-lg'>Email</FormLabel>
							<FormControl>
								<Input
									placeholder='Email'
									{...field}
									disabled={isLoading}
									type='email'
									className='w-full max-w-2xl'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type='submit'
					className='self-start hover:bg-[#2F006B] hover:text-white'
					disabled={isLoading}
				>
					{isLoading ? (
						<>
							<Loader2 className='mr-2 h-4 w-4 animate-spin' />
							Сохранение
						</>
					) : (
						'Сохранить настройки'
					)}
				</Button>
			</form>
		</Form>
	)
}
