"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IoMdAdd } from "react-icons/io";

const InputField = () => {
  const formSchema = z.object({
    task: z.string().min(2).max(50),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <main>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex justify-center gap-6"
        >
          <FormField
            control={form.control}
            name="task"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-[800px]"
                    placeholder="Enter your task"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="flex gap-4">
            <div>Add Tasksks</div>
            <IoMdAdd className="" />
          </Button>
        </form>
      </Form>
    </main>
  );
};

export default InputField;
