import { InputHTMLAttributes } from "react"
import { FieldError, UseFormRegister } from "react-hook-form"
import { z } from "zod"
import { ClientFormSchema, ValidFields } from "../lib/validation"

type FormField = z.infer<typeof ClientFormSchema>

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  type: string
  name: ValidFields
  register: UseFormRegister<FormField>
  error: FieldError | undefined
}

const InputField = ({
  label,
  type,
  name,
  error,
  register,
  ...inputProps
}: InputFieldProps) => {
  return (
    <div className="w-full flex-col flex items-start">
      <label
        htmlFor={label}
        className="capitalize lg:text-base text-[10px] font-semibold"
      >
        {label}
      </label>
      <div className="border-2 border-black outline-none w-full">
        <input
          {...inputProps}
          id={label}
          type={type}
          {...register(name)}
          className="w-full outline-none px-2"
        />
      </div>
      {error && (
        <span className="lg:text-[12px] text-[9px] text-red-600">
          {error.message}
        </span>
      )}
    </div>
  )
}

export default InputField
