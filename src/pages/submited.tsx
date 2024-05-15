
import { Link } from "react-router-dom"

const Submited = () => {
  return (
    <div className="flex w-full h-[80vh] items-center justify-center">
      <div className="flex items-center justify-center flex-col">
        <div className="w-[200px] mx-auto mb-8">
          <img
            src="/bfa/bfa-capital-markets.jpg"
            className="w-40 object-contain"
            alt=""
          />
        </div>
        <h2>
          Obriagdo pelo preenchimento, forneça este questionário ao
          seu agente.
        </h2>
        <Link to="/" className="border px-3 py-2 mt-12">
          Voltar à página inicial
        </Link>
      </div>
    </div>
  )
}

export default Submited
