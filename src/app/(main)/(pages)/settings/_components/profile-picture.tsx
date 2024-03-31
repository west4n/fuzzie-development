'use client'

import { useRouter } from 'next/navigation'
import { UploadCareButton } from './upload-care-button'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

interface ProfilePictureProps {
	userImage: string | null
	onDelete?: any
	onUpload?: any
}

export const ProfilePicture = ({
	userImage,
	onDelete,
	onUpload,
}: ProfilePictureProps) => {
	const router = useRouter()

	const onRemoveProfileImage = async () => {
		const response = await onDelete()
		if (response) {
			router.refresh()
		}
	}

	return (
		<div className='flex flex-col'>
			<p className='text-lg font-medium text-white'>Картинка профиля</p>
			<div className='flex h-[30vh] flex-col items-center'>
				{userImage ? (
					<>
						<div className='relative h-full w-2/12'>
							<Image src={userImage} alt='user_image' fill />
						</div>
						<Button
							onClick={onRemoveProfileImage}
							className='bg-transparent text-white/70 hover:bg-transparent hover:text-white'
						>
							<X />
							Удалить изображение
						</Button>
					</>
				) : (
					<UploadCareButton />
				)}
			</div>
		</div>
	)
}
