'use client'

import { ModeToggle } from '../global/mode-toggle'
import { Book, Headphones, Search } from 'lucide-react'
import Templates from '../icons/cloud-download'
import { Input } from '@/components/ui/input'

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

const InfoBar = () => {
	return (
		<div className='flex items-center justify-end flex-row gap-6 px-4 py-4 w-full dark:bg-black'>
			<span className='flex items-center bg-muted px-4 rounded-full'>
				<Search />
				<Input
					placeholder='Быстрый поиск'
					className='border-none bg-transparent'
				/>
			</span>

			<TooltipProvider>
				<Tooltip delayDuration={0}>
					<TooltipTrigger>
						<Headphones />
					</TooltipTrigger>
					<TooltipContent>
						<p>Поддержка</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			<TooltipProvider>
				<Tooltip delayDuration={0}>
					<TooltipTrigger>
						<Book />
					</TooltipTrigger>
					<TooltipContent>
						<p>Инструкции</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	)
}

export default InfoBar
