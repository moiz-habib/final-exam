'use server'

import { prisma } from "@/lib/db"
import { formSchema } from "@/schemas/schema"
import { error } from "console"
import { z } from "zod"

export const CreateUser = async (values: z.infer<typeof formSchema>) => {
    const validatedValues = formSchema.safeParse(values)

    if(!validatedValues.success){
        error:{'invalid data'}
    }

    await prisma.task.create(
        {
            data: {
                title: validatedValues.data?.task,
                isCompleted : true,
            }
        }
    )

}