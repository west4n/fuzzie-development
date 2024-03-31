'use client'

import * as LR from '@uploadcare/blocks'
import { UploadCtxProvider } from '@uploadcare/blocks'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

interface UploadCareButtonProps {
	onUpload?: any
}

LR.registerBlocks(LR)

export const UploadCareButton = ({ onUpload }: UploadCareButtonProps) => {
	const router = useRouter()
	const ctxProviderRef = useRef<
		typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
	>(null)

	useEffect(() => {
		const handleUpload = async (e: any) => {
			const file = await onUpload(e.detail.cdnUrl)

			if (file) {
				router.refresh()
			}

			ctxProviderRef.current.addEventListener(
				'file-upload-success',
				handleUpload,
			)
		}
	}, [])

	return (
		<div>
			<lr-config ctx-name='my-uploader' pubkey='8c177c0b6b91a0b76dc6' />
			<lr-file-uploader-regular
				ctx-name='my-uploader'
				css-src={`${process.env.NEXT_PUBLIC_UPLOAD_CARE_CSS_SRC}${LR.PACKAGE_VERSION}${process.env.NEXT_PUBLIC_UPLOAD_CARE_SRC_PACKAGE}`}
			/>
			<lr-upload-ctx-provider ref={ctxProviderRef} ctx-name='my-uploader' />
		</div>
	)
}
