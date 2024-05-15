import { Link } from "react-router-dom"

const LangingPage = () => {
  return (
    <main className="w-full flex items-center justify-center h-[90vh]">
      <section className="max-w-3xl flex flex-col justify-center">
        <img
          src="/bfa/bfa-capital-markets.jpg"
          className="object-contain mb-14 h-16"
          alt=""
        />
        <p>
          Caro Cliente, Bem-vindo ao questionário de perfil de investimento.
        </p>
        <p>Escolha a opção que se adequa ao seu perfil.</p>

        <div className="w-full flex items-center justify-between mt-24">
          <Link
            className="px-10 py-5 bg-[#eb6834] text-black rounded-md"
            to="/particulares"
          >
            Particulares
          </Link>
          <Link
            className="px-10 py-5 bg-[#eb6834] text-black rounded-md"
            to="/empresas"
          >
            Empresas
          </Link>
        </div>
      </section>
    </main>
  )
}

export default LangingPage
