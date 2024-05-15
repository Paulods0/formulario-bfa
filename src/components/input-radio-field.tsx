import React, { SetStateAction } from "react"

type InputRadioFieldProps = {
  label: string
  group: string
  selectOption?: React.Dispatch<SetStateAction<string>>
 value: string
}

const InputRadioField = ({
  label,
  group,
 value,
  selectOption,
}: InputRadioFieldProps) => {
  // const valueAndRisk = `${label}__${risk}`
  return (
    <div className="flex items-center mt-4 gap-x-2">
      <input
        onChange={selectOption ? (e) => selectOption(e.target.value) : () => {}}
        type="radio"
        id={label}
        name={group}
        value={value}
      />
      <label className="lg:text-base text-[12px]" htmlFor={label}>
        {label}
      </label>
    </div>
  )
}

export default InputRadioField
