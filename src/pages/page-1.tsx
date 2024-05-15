import { useEffect, useState } from "react"
import InputField from "../components/input-field"
import InputRadioGroup from "../components/input-radio-group"
import ResultBox from "../components/result-box"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { ClientFormSchema } from "../lib/validation"
import {
  GROUP_EIGHT_OPTIONS,
  GROUP_FIVE_OPTIONS,
  GROUP_FOUR_OPTIONS,
  GROUP_NINE_OPTIONS,
  GROUP_ONE_OPTIONS,
  GROUP_SEVEN_OPTIONS,
  GROUP_SIX_OPTIONS,
  GROUP_TEN_OPTIONS,
  GROUP_THREE_OPTIONS,
  GROUP_TWO_OPTIONS,
} from "../constants/particular"
import { CalculateFinalAverage } from "../utils"
import { AverageRiskValidValues } from "../types"
import DocumentPDF, { GenetatePDF } from "../components/document-pdf"

type ClientFormType = z.infer<typeof ClientFormSchema>

export type GroupInputRadio = {
  option: string
  label: string
  val: string
  group: string
}

const PageOne = () => {
  const text = "imp/cm/2023/004/v01"
  const navigate = useNavigate()
  const [groupOneValue, setGroupOneValue] = useState<GroupInputRadio>(
    {} as GroupInputRadio
  )
  const [groupTwoValue, setGroupTwoValue] = useState<GroupInputRadio>(
    {} as GroupInputRadio
  )
  const [groupThreeValue, setGroupThreeValue] = useState<GroupInputRadio>(
    {} as GroupInputRadio
  )
  const [groupFourValue, setGroupFourValue] = useState<GroupInputRadio>(
    {} as GroupInputRadio
  )
  const [groupFiveValue, setGroupFiveValue] = useState<GroupInputRadio>(
    {} as GroupInputRadio
  )
  const [groupSixValue, setGroupSixValue] = useState<GroupInputRadio>(
    {} as GroupInputRadio
  )
  const [groupSevenValue, setGroupSevenValue] = useState<GroupInputRadio>(
    {} as GroupInputRadio
  )
  const [groupEightValue, setGroupEightValue] = useState<GroupInputRadio>(
    {} as GroupInputRadio
  )
  const [groupNineValue, setGroupNineValue] = useState<GroupInputRadio>(
    {} as GroupInputRadio
  )
  const [groupTenValue, setGroupTenValue] = useState<GroupInputRadio>(
    {} as GroupInputRadio
  )
  const [isLoading, setIsLoading] = useState(false)
  const [clientInfo, setClientInfo] = useState<ClientFormType>(
    {} as ClientFormType
  )

  const [averageRisk, setAverageRisk] = useState<AverageRiskValidValues>("")

  const changeClientInfo = async (data: ClientFormType) => {
    try {
      setClientInfo(data)
    } catch (error) {
      throw new Error("Erro ao submeter o formulário.")
    }
  }

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm<ClientFormType>({
    resolver: zodResolver(ClientFormSchema),
  })

  const handleSignature = (e: any) => {
    setValue("name", e.target.value)
  }

  const handleSubmitForm = async (data: ClientFormType) => {
    setIsLoading(true)
    await changeClientInfo(data)
    await GenetatePDF()
    navigate("/submited")
    setIsLoading(false)
  }

  useEffect(() => {
    const values = [
      groupOneValue.val,
      groupTwoValue.val,
      groupThreeValue.val,
      groupFourValue.val,
      groupFiveValue.val,
      groupSixValue.val,
      groupSevenValue.val,
      groupEightValue.val,
      groupNineValue.val,
      groupTenValue.val,
    ]
    const average = CalculateFinalAverage(values)

    if (average >= 10 && average <= 20) {
      setAverageRisk("Baixo risco")
    } else if (average >= 21 && average <= 30) {
      setAverageRisk("Médio risco")
    } else if (average >= 31 && average <= 40) {
      setAverageRisk("Alto risco")
    } else {
      setAverageRisk("")
    }
  }, [
    groupOneValue,
    groupTwoValue,
    groupThreeValue,
    groupFourValue,
    groupFiveValue,
    groupSixValue,
    groupSevenValue,
    groupEightValue,
    groupNineValue,
    groupTenValue,
  ])

  return (
    <div className="lg:w-[900px] lg:mx-auto w-full min-h-screen ">
      <header className="w-full mb-12">
        <div className="w-full flex items-center justify-between">
          <img
            src="/bfa/bfa-capital-markets.jpg"
            className="lg:w-44 w-20 object-contain"
            alt="bfa-imagem"
          />

          <div className="flex flex-col items-end">
            <h1 className="uppercase font-bold text-[9px] text-wrap lg:text-2xl">
              Questionário de perfil de investimento
            </h1>
            <h4 className="capitalize font font-bold text-[10px] lg:text-xl">
              particular
            </h4>
            <h6 className="uppercase text-[10px] lg:text-[14px]">{text}</h6>
          </div>
        </div>
      </header>

      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="w-full flex flex-col pb-8 items-center lg:space-y-3"
      >
        <div className="w-full flex-col flex items-start">
          <label
            htmlFor="name"
            className="capitalize lg:text-base text-[10px] font-semibold"
          >
            Nome
          </label>
          <div className="border-2 border-black outline-none w-full">
            <input
              id="name"
              {...register("name")}
              onChange={handleSignature}
              type="text"
              className="w-full outline-none px-2"
            />
          </div>
          {errors.name && (
            <span className="lg:text-[12px] text-[9px] text-red-600">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="w-full flex lg:flex-row flex-col items-center gap-x-6">
          <div className="w-full flex flex-col items-center">
            <InputField
              name="nationality"
              register={register}
              error={errors.nationality}
              label="NDC"
              type="text"
            />
            <InputField
              name="email"
              register={register}
              error={errors.email}
              label="Email"
              type="email"
            />
            <InputField
              name="counter"
              register={register}
              error={errors.counter}
              label="Balcão"
              type="text"
            />
          </div>

          <div className="w-full">
            <InputField
              name="nif"
              register={register}
              error={errors.nif}
              label="NIF"
              type="text"
            />
            <InputField
              name="educational_qualification"
              register={register}
              error={errors.educational_qualification}
              label="Hab.Lit"
              type="text"
            />

            <div className="mt-0 mb-8 lg:mb-0 w-full">
              <label
                htmlFor="sexo"
                className="lg:text-base text-[10px] font-semibold"
              >
                Sexo
              </label>
              <select
                {...register("genre")}
                className="border-2 w-full text-base border-black outline-none flex flex-col items-start"
              >
                <option
                  value=""
                  className="lg:text-base text-[12px] capitalize"
                >
                  Selecione...
                </option>
                <option
                  value="Masculino"
                  className="lg:text-base text-[12px] capitalize"
                >
                  Masculino
                </option>
                <option
                  value="Feminino"
                  className="lg:text-base text-[12px] capitalize"
                >
                  Feminino
                </option>
              </select>
              {errors.genre && (
                <span className="text-[12px] text-red-600">
                  {errors.genre.message}
                </span>
              )}
            </div>
          </div>
        </div>

        <InputRadioGroup
          label="Qual a sua idade?"
          labelNumber="1"
          options={GROUP_ONE_OPTIONS}
          onChange={setGroupOneValue}
        />
        <InputRadioGroup
          options={GROUP_TWO_OPTIONS}
          onChange={setGroupTwoValue}
          label="Do seu rendimento líquido, qual a % de poupança mensal?"
          labelNumber="2"
        />
        <InputRadioGroup
          options={GROUP_THREE_OPTIONS}
          onChange={setGroupThreeValue}
          label="Qual o seu principal objectivo, em relação ao capital investido?"
          labelNumber="3"
        />
        <InputRadioGroup
          options={GROUP_FOUR_OPTIONS}
          onChange={setGroupFourValue}
          label="Quanto do seu património total, encontra-se investido em aplicações financeiras?"
          labelNumber="4"
        />
        <InputRadioGroup
          options={GROUP_FIVE_OPTIONS}
          onChange={setGroupFiveValue}
          label="Em quanto tempo você espera precisar deste investimento?"
          labelNumber="5"
        />
        <InputRadioGroup
          options={GROUP_SIX_OPTIONS}
          onChange={setGroupSixValue}
          label="Trabalha ou já trabalhou em áreas que implicam conhecimento de instrumentos financeiros?"
          labelNumber="6"
        />
        <InputRadioGroup
          options={GROUP_SEVEN_OPTIONS}
          onChange={setGroupSevenValue}
          label="Já investiu em obrigações?"
          labelNumber="7"
        />
        <InputRadioGroup
          options={GROUP_EIGHT_OPTIONS}
          onChange={setGroupEightValue}
          label="Pelo seu conhecimento, em quais dos seguintes produtos estaria disposto a investir?"
          labelNumber="8"
        />
        <InputRadioGroup
          options={GROUP_NINE_OPTIONS}
          onChange={setGroupNineValue}
          label="Qual o seu horizonte/ prazo de investimento"
          labelNumber="9"
        />
        <InputRadioGroup
          options={GROUP_TEN_OPTIONS}
          onChange={setGroupTenValue}
          label="Qual o risco que estaria disposto a correr para aumentar o retorno dos seus investimentos?"
          labelNumber="10"
        />
        <ResultBox result={averageRisk} />
        <div className="lg:self-start mt-6 py-5">
          <h1 className="font-bold text-[12px] lg:text-[16px] uppercase">
            Assinatura do cliente
          </h1>
          <p className="capitalize lg:text-base text-[12px] mt-8"></p>
          <hr className="w-full bg-black h-[2px]" />
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className="mt-12 lg:self-start border px-3 py-2"
        >
          {isLoading ? "Carregando..." : "Submeter formulário"}
        </button>

        <Link to="/" className="mt-12 lg:self-end underline px-3 py-2">
          Voltar à página inicial
        </Link>
      </form>

      <div className="h-[1px] overflow-hidden">
        <DocumentPDF
          type="particular"
          average={averageRisk}
          client_info={clientInfo}
          inputs={[
            groupOneValue,
            groupTwoValue,
            groupThreeValue,
            groupFourValue,
            groupFiveValue,
            groupSixValue,
            groupSevenValue,
            groupEightValue,
            groupNineValue,
            groupTenValue,
          ]}
        />
      </div>
    </div>
  )
}

export default PageOne
