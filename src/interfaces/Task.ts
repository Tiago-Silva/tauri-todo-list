import { z } from "zod";


export interface Task {
  title: string;
  description: string;
  data: string;
  complete: boolean;
}

export const taskSchema = z.object({
  title: z.string(),
  description: z.string(),
  data: z.string(),
  complete: z.boolean(),
});
