import React, { ChangeEvent, SetStateAction } from "react"
import { GroupInputRadio } from "../pages/page-1"

type InputRadioGroup = {
  labelNumber: string
  label: string
  options: string[]
  onChange: React.Dispatch<SetStateAction<GroupInputRadio>>
  value?: string
}

const InputRadioGroup = ({
  label,
  labelNumber,
  options,
  onChange,
}: InputRadioGroup) => {
  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    const optionSelected = e.target.dataset.option
    const labelSelected = e.target.dataset.label
    const groupnumber = e.target.dataset.groupnumber
    const value = e.target.value

    const data: GroupInputRadio = {
      option: optionSelected!!,
      label: labelSelected!!,
      val: value,
      group: groupnumber!!,
    }

    onChange(data)
  }
  return (
    <div className="w-full flex flex-col mb-4 lg:mb-0">
      <div className="flex items-center bg-orange-500 h-[50px] lg:h-[40px]">
        <h1 className="bg-blue-900 lg:text-base text-[10px]  px-4 flex items-center justify-center text-white h-full">
          {labelNumber}
        </h1>
        <h1 className="lg:text-base text-[10px] h-full font-bold  text-white ml-2 flex items-center justify-center">
          {label}
        </h1>
      </div>
      {options.map((option, index) => (
        <div key={index} className="flex items-center mt-4 gap-x-2">
          <input
            onChange={handleOnchange}
            type="radio"
            id={option}
            data-label={label}
            data-option={option}
            data-groupnumber={labelNumber}
            name={label}
            value={`${index + 1}`}
          />
          <label className="lg:text-base text-[12px]" htmlFor={option}>
            {option}
          </label>
        </div>
      ))}
    </div>
  )
}

export default InputRadioGroup
