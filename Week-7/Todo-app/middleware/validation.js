const {z} = require('zod')

const validationSchema = z.object({
    email:z.string().email({message:"Invalid Email Address"}).nonempty({message:"Email is required."}),
    password:z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long.' })
    .max(20, { message: 'Password must not exceed 20 characters.' }) 
    .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter.' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter.' })
    .regex(/\d/, { message: 'Password must contain at least one number.' })
    .regex(/[\W_]/, { message: 'Password must contain at least one special character.' }),
    // name:z.string().min(2,{message:"Name must be at least 2 characters long."}).nonempty({message:"Name is required."})
}) 

const taskSchema = z.object({
    task: z.string().nonempty({ message: 'Task is required.' }),
    priority: z.string().nonempty({ message: 'Priority is required.' }),
    // z.enum(['High', 'Medium', 'Low']).nonempty({ message: 'Priority is required.' }),
    status: z.string().nonempty({ message: 'Status is required.' }),
    // z.enum(['InProgress', 'Pending', 'Completed']).nonempty({ message: 'Status is required.' }),
    deadline: z.string().nonempty({ message: 'Deadline is required.' }),
    created_at: z.number().positive({ message: 'Timestamp must be a positive number.' }),
    deleted: z.boolean(),
  });

  module.exports={
    validationSchema,taskSchema
  }