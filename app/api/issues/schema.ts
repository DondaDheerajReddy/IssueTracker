import {z} from 'zod';


const schema = z.object({
  title: z.string().min(3, 'Title is required.').max(300),
  description: z.string().min(5, 'Description is required.'),
})

export default schema;