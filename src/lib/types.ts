import { z } from 'zod'

export const EditUserProfileSchema = z.object({
	email: z.string().email('Обязательное поле'),
	name: z.string().min(1, 'Обязательное поле'),
})
