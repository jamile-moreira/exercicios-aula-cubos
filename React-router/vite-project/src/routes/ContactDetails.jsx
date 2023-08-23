import { useParams, useNavigate } from 'react-router-dom'

const ContactDetails = () => {
  const { id } = useParams()

  //   6. redirecionamento de páginas
  return (
    <div>
      <h1>Exibindo mais informações do contato: {id}</h1>
    </div>
  )
}

export default ContactDetails
