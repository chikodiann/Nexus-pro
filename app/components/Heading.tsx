import classNames from 'classnames'

interface HeadingProps {
  topic: string,
  isTextEnd?: boolean
}
const Heading = ({ topic, isTextEnd }: HeadingProps) => {
  return (
    <h1 className={classNames(`mb-4 font-[600] text-xl`, { ' text-right': isTextEnd === true })}>{topic}</h1>
  )
}

export default Heading