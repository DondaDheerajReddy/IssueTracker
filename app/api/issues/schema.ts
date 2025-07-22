import {z} from 'zod';


const schema = z.object({
  title: z.string().min(3).max(300),
  description: z.string().min(10),
})

export default schema;