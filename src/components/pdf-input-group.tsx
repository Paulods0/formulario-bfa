type PDFInputGroupProps = {
  labelNumber: string
  label: string
  options: string[]
  value?: string
}

const PDFInputGroup = ({
  label,
  labelNumber,
  options,
}: PDFInputGroupProps) => {
  return (
    <div className="w-full flex flex-col mb-2">
      <div className="flex items-center">
        <h1 className="text-[9px] font-bold flex items-center justify-center h-full">
          {labelNumber}
        </h1>
        <h1 className="text-[9px] h-full font-bold ml-2 flex items-center justify-center">
          {label}
        </h1>
      </div>
      {options.map((option, index) => (
        <div key={index} className="flex items-center mt-2 gap-x-2">
          <input type="radio" id={option} name={label} value={index + 1} />
          <label className="text-[9px]" htmlFor={option}>
            {option}
          </label>
        </div>
      ))}
    </div>
  )
}

export default PDFInputGroup
