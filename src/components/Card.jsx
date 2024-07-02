// eslint-disable-next-line react/prop-types
const Card = ({Children,bg='bg-gray-100'}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>{Children}</div>
  )
}

export default Card