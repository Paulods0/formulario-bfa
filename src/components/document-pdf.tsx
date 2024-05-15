import generatePDF, { Margin, Resolution } from "react-to-pdf"
import { z } from "zod"
import { ClientFormSchema } from "../lib/validation"
import { GroupInputRadio } from "../pages/page-1"

export const recuperarPDF = () => document.getElementById("content-id")

export const GenetatePDF = async () => {
  try {
    await generatePDF(recuperarPDF, {
      method: "save",
      resolution: Resolution.HIGH,
      page: {
        margin: Margin.MEDIUM,
        format: "A4",
        orientation: "portrait",
      },
    })
  } catch (error) {
    console.error("Erro ao gerar o PDF:", error)
  }
}
type ClientInfo = z.infer<typeof ClientFormSchema>

type DocumentPDFProps = {
  type: "company" | "particular"
  client_info: ClientInfo
  inputs: GroupInputRadio[]
  average: string
}

const DocumentPDF = ({
  client_info,
  inputs,
  average,
  type,
}: DocumentPDFProps) => {
  return (
    <div>
      <div id="content-id" className="w-full flex flex-col">
        <header className="self-start w-full flex items-center justify-between">
          <img
            src="/bfa/bfa-capital-markets.jpg"
            className="w-[100px] object-contain"
            alt=""
          />
          <div className="flex flex-col items-end">
            <div className="flex flex-col items-end">
              <h1 className="uppercase font-bold text-[9px] text-wrap">
                Questionário de perfil de investimento
              </h1>
              <h4 className="capitalize font font-bold text-[10px]">
                {type === "particular" ? "paticular" : "empresa"}
              </h4>
              <h6 className="uppercase text-[10px]">
                {type === "particular"
                  ? "IMP/CM/2023/004/V01"
                  : "IMP/CM/2023/004/V01"}
              </h6>
            </div>
            <div className="text-[10px]">{new Date().toLocaleDateString()}</div>
          </div>
        </header>
        {/**ROW */}
        <div className="w-full flex-col mt-6 flex items-start">
          <span className="capitalize text-[12px] font-semibold">Nome</span>
          <div className="border-b border-b-black py-2 outline-none w-full">
            <p className="text-[12px]">{client_info?.name}</p>
          </div>
        </div>
        {/**ROW */}
        <div className="w-full flex mt-3 flex-row items-center gap-x-6">
          <div className="w-full flex flex-col items-center">
            <div className="w-full flex-col flex items-start">
              <span className="capitalize text-[12px] font-semibold">
                Nacionalidade
              </span>
              <div className="border-b border-b-black outline-none w-full">
                <p className="w-full outline-none py-2 text-[12px]">
                  {client_info.nationality}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center">
            <div className="w-full flex-col flex items-start">
              <span className="uppercase text-[12px] font-semibold">nif</span>
              <div className="border-b border-b-black outline-none w-full">
                <p className="w-full outline-none text-[12px] py-2">
                  {client_info.nif}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/**ROW */}
        <div className="w-full flex mt-3 flex-row items-center gap-x-6">
          <div className="w-full flex flex-col items-center">
            <div className="w-full flex-col flex items-start">
              <span className="capitalize text-[12px] font-semibold">
                Balcão
              </span>
              <div className="border-b border-b-black outline-none w-full">
                <p className="w-full text-[12px] outline-none py-2">
                  {client_info.counter}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center">
            {type === "particular" && (
              <div className="w-full flex-col flex items-start">
                <span className="text-[12px] font-semibold">Hab.Lit</span>
                <div className="border-b border-b-black outline-none w-full">
                  <p className="w-full text-[12px] outline-none py-2">
                    {client_info.educational_qualification}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        {/**ROW */}
        <div className="w-full flex mt-3 flex-row items-center gap-x-6">
          <div className="w-full flex flex-col items-center">
            <div className="w-full flex-col flex items-start">
              <span className="capitalize text-[12px] font-semibold">
                Email
              </span>
              <div className="border-b border-b-black outline-none w-full">
                <p className="w-full text-[12px] outline-none py-2">
                  {client_info.email}
                </p>
              </div>
            </div>
          </div>

          {type === "particular" && (
            <div className="w-full flex flex-col items-center">
              <div className="w-full flex-col flex items-start">
                <span className="capitalize text-[12px] font-semibold">
                  Sexo
                </span>
                <div className="border-b border-b-black outline-none w-full">
                  <p className="w-full outline-none text-[12px] py-2">
                    {client_info.genre}{" "}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="w-full py-3 mt-3 ">
          {inputs.map((input, i) => (
            <div key={i} className="flex flex-col mb-3">
              <div className="flex items-center gap-x-2 w-full h-[35px] lg:h-[40px] bg-orange-500">
                <span className="bg-blue-800 text-[10px] lg:text-base lg:py-2 h-full px-2 text-white">
                  {input.group}
                </span>
                <h1 className="font-bold text-white h-full text-[10px] lg:text-base">
                  {input.label}
                </h1>
              </div>

              <p className="lg:text-base text-[10px]">{input.option}</p>
            </div>
          ))}
        </div>

        <div className="lg:w-[300px] w-full self-start border-[1px] border-black">
          <h1 className="w-full bg-orange-500 text-base p-1 lg:p-1 font-semibold text-white">
            Perfil de investimento
          </h1>

          <div className="px-2 py-2 lg:py-">
            <span className="uppercase text-[12px] font-semibold">
              {average}
            </span>
          </div>
        </div>

        <div className="self-start mt-3 py-5">
          <h1 className="font-bold text-[12px] uppercase">
            Assinatura do cliente
          </h1>
          <hr className="w-full bg-black h-[1.5px] mt-10" />
        </div>
      </div>
    </div>
  )
}

export default DocumentPDF
