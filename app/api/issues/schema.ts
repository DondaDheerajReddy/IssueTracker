import {z} from 'zod';


export const schema = z.object({
  title: z.string().min(1, 'Title cannot be empty.').max(300),
  description: z.string().min(5, 'Description is required.').max(65535),
})

export const patchIssueSchema = z.object({
  title: z.string().min(1, 'Title cannot be empty.').max(300).optional(),
  description: z.string().min(5, 'Description is required.').max(65535).optional(),
  assignedToUserId: z.string().min(1, 'AssignedToUserId is required').max(300).optional().nullable()
})

