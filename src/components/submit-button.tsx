import { Link } from "react-router-dom"

const SubmitButton = () => {
  return (
    <Link
      to="/submited"
      type="submit"
      className="mt-12 lg:self-start border px-3 py-2"
    >
      Submeter formulário
    </Link>
  )
}

export default SubmitButton
