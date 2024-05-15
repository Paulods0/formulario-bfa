type ResultBoxProps = {
  result: string
}

const ResultBox = ({ result }: ResultBoxProps) => {
  return (
    <div className="lg:w-[700px] w-full mt-8 lg:mt-0 lg:self-start border-2 border-black">
      <h1 className="w-full bg-orange-500 lg:text-base text-[14px] p-2 text-lg font-semibold text-white">
        Perfil de investimento
      </h1>

      <div className="px-2 py-6">
        {/* <span className="uppercase text-lg font-semibold mr-2"></span> */}
        <span className="uppercase text-lg font-semibold">{result}</span>
      </div>
    </div>
  )
}

export default ResultBox
