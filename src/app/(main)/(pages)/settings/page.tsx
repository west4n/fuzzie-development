import { db } from '@/lib/db'
import { ProfilePicture } from './_components/profile-picture'

import { ProfileForm } from '@/components/forms/profile-form'

const SettingsPage = () => {
	// const removeProfileImage = async () => {
	// 	'use server'
	// 	const response = await db.user.update({
	// 		where: {
	// 			clerkId: authUser.id,
	// 		},
	// 		data: {
	// 			profileImage: '',
	// 		}
	// 	})
	// 	return response
	// }

	return (
		<div className='flex flex-col gap-4'>
			<h1 className='sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg'>
				<span>Настройки</span>
			</h1>
			<div className='flex flex-col gap-10 p-6'>
				<div>
					<h2 className='text-2xl font-bold'>Профиль пользователя</h2>
					<p className='text-base text-white/50'>
						Добавьте или обновите свою информацию
					</p>
				</div>
				{/* <ProfilePicture
					onDelete={}
				></ProfilePicture>
				<ProfileForm /> */}
			</div>
		</div>
	)
}

export default SettingsPage
