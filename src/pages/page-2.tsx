import { useEffect, useState } from "react"
import InputField from "../components/input-field"
import InputRadioGroup from "../components/input-radio-group"
import ResultBox from "../components/result-box"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { ClientFormSchema } from "../lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { CalculateFinalAverage } from "../utils"
import { AverageRiskValidValues } from "../types"
import {
  GROUP_ONE_OPTIONS,
  GROUP_THREE_OPTIONS,
  GROUP_TWO_OPTIONS,
  GROUP_EIGHT_OPTIONS,
  GROUP_FIVE_OPTIONS,
  GROUP_FOUR_OPTIONS,
  GROUP_NINE_OPTIONS,
  GROUP_SEVEN_OPTIONS,
  GROUP_SIX_OPTIONS,
  GROUP_TEN_OPTIONS,
} from "../constants/company"
import { GroupInputRadio } from "./page-1"
import DocumentPDF, { GenetatePDF } from "../components/document-pdf"

type ClientFormType = z.infer<typeof ClientFormSchema>

const PageTwo = () => {
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
  const [averageRisk, setAverageRisk] = useState<AverageRiskValidValues>("")
  const [clientInfo, setClientInfo] = useState<ClientFormType>(
    {} as ClientFormType
  )

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientFormType>({
    resolver: zodResolver(ClientFormSchema),
  })

  const handleSignature = (e: any) => {
    setValue("name", e.target.value)
  }

  const changeClientInfo = async (data: ClientFormType) => {
    try {
      setClientInfo(data)
    } catch (error) {
      throw new Error("Erro ao submeter o formulário.")
    }
  }

  const submitForm = async (data: ClientFormType) => {
    setIsLoading(true)
    await changeClientInfo(data)
    await GenetatePDF()
    navigate("/submited")
    setIsLoading(false)
  }

  useEffect(() => {
    const average = CalculateFinalAverage([
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
    ])

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
    <div className="lg:w-[900px] py-12 lg:mx-auto">
      <header className="w-full mb-12">
        <div className="w-full flex items-center justify-between">
          <img
            src="/bfa/bfa-capital-markets.jpg"
            className="lg:w-44 w-20 object-contain"
            alt="bfa-imagem"
          />
          <div className="flex flex-col items-end">
            <h1 className="uppercase text-[9px] text-wrap font-bold lg:text-2xl">
              Questionário de perfil de investimento
            </h1>
            <h4 className="capitalize font font-bold text-[10px] lg:text-xl">
              empresa
            </h4>
            <h6 className="uppercase text-[10px] lg:text-[14px]">{text}</h6>
          </div>
        </div>
      </header>

      <form
        onSubmit={handleSubmit(submitForm)}
        className="w-full flex flex-col  pb-14 items-center space-y-3"
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
              {...register("name")}
              onChange={handleSignature}
              id="name"
              type="text"
              className="w-full outline-none"
            />

            {errors.name && (
              <span className="lg:text-[12px] text-[9px] text-red-600">
                {errors.name.message}
              </span>
            )}
          </div>
        </div>
        <div className="w-full flex lg:flex-row flex-col items-center gap-x-6">
          <div className="w-full flex flex-col items-center">
            <InputField
              register={register}
              name="nationality"
              error={errors.nationality}
              label="NDC"
              type="text"
            />
            <InputField
              register={register}
              name="email"
              error={errors.email}
              label="Email"
              type="email"
            />
            <InputField
              register={register}
              name="counter"
              error={errors.counter}
              label="Balcão"
              type="text"
            />
          </div>
          <div className="w-full self-start">
            <InputField
              name="nif"
              error={errors.nif}
              register={register}
              label="NIF"
              type="text"
            />
          </div>
        </div>
        <InputRadioGroup
          label="Qual é o capital social da empresa?"
          labelNumber="1"
          onChange={setGroupOneValue}
          options={GROUP_ONE_OPTIONS}
        />
        <InputRadioGroup
          label="Qual é a faturação anual da empresa?"
          labelNumber="2"
          onChange={setGroupTwoValue}
          options={GROUP_TWO_OPTIONS}
        />
        <InputRadioGroup
          label="Qual é o principal objectivo da empresa em relação ao capital investido?"
          labelNumber="3"
          onChange={setGroupThreeValue}
          options={GROUP_THREE_OPTIONS}
        ></InputRadioGroup>
        <InputRadioGroup
          onChange={setGroupFourValue}
          options={GROUP_FOUR_OPTIONS}
          label="Quanto do património total da empresa deseja investir em aplicações financeiras?"
          labelNumber="4"
        />
        <InputRadioGroup
          onChange={setGroupFiveValue}
          options={GROUP_FIVE_OPTIONS}
          label="Que percentagem dos investimentos da empresa necessita para cobrir despesas inerentes ao ano em curso?"
          labelNumber="5"
        />
        <InputRadioGroup
          label="O que a empresa prioriza no momento de investir?"
          labelNumber="6"
          onChange={setGroupSixValue}
          options={GROUP_SIX_OPTIONS}
        />
        <InputRadioGroup
          label="A empresa já investiu em obrigações?"
          labelNumber="7"
          onChange={setGroupSevenValue}
          options={GROUP_SEVEN_OPTIONS}
        />
        <InputRadioGroup
          label="Pelo conhecimento da empresa, em quais dos seguintes produtos estaria disposto a investir?"
          labelNumber="8"
          onChange={setGroupEightValue}
          options={GROUP_EIGHT_OPTIONS}
        />
        <InputRadioGroup
          label="Qual o seu horizonte / prazo de investimento"
          labelNumber="9"
          onChange={setGroupNineValue}
          options={GROUP_NINE_OPTIONS}
        />
        <InputRadioGroup
          label="Qual o risco que estaria disposto a correr para aumentar o retorno dos seus investimentos?"
          labelNumber="10"
          onChange={setGroupTenValue}
          options={GROUP_TEN_OPTIONS}
        />

        <ResultBox result={averageRisk} />

        <div className="lg:self-start mt-6 py-5">
          <h1 className="font-bold text-[12px] lg:text-[16px] uppercase">
            Assinatura do cliente
          </h1>
          <p className="capitalize lg:text-base text-[12px]"></p>
          <hr className="w-full bg-black h-[2px] mt-8" />
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
          type="company"
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

export default PageTwo
