import { z } from "zod";


export  const formSchema = z.object({
      task: z.string().min(2),
    });
  