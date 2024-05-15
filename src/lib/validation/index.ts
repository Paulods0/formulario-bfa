import { z } from "zod"

export const ClientFormSchema = z.object({
  name: z.string().min(6, { message: "*Por favor insira o seu nome." }),
  nationality: z
    .string()
    .min(1, { message: "*Por favor insira a sua nacionalidade." }),
  email: z
    .string()
    .min(6, { message: "*Por favor insira o seu email." })
    .email({ message: "*Por favor insira um email válido." }),
  counter: z.string().min(1, { message: "*Por favor insira o balcão." }),
  nif: z.string().min(1, { message: "*Por favor insira o seu NIF." }),
  educational_qualification: z
    .string()
    .min(1, { message: "*Por favor insira a sua habilitação literária." })
    .optional(),
  genre: z.enum(["Masculino", "Feminino"]).optional(),
})

export type ValidFields =
  | "name"
  | "nationality"
  | "email"
  | "counter"
  | "nif"
  | "educational_qualification"
  | "genre"
