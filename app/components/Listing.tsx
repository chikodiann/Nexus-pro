import classNames from 'classnames'
import Image from 'next/image'

interface ListingProps {
  src: string,
  alt: string,
  detail: string,
  isPlacedRight?: boolean
}
const Listing = ({ src, alt, detail, isPlacedRight }: ListingProps) => {
  return (
    <div className={classNames(` flex items-center gap-2`, { 'flex-row-reverse text-right': isPlacedRight === true })}>
      <picture className=' w-12 h-[2.7rem] relative flex-shrink-0'>
        <Image className=' absolute object-cover' src={src} alt={alt} fill priority />
      </picture>
      <p>{detail}</p>
    </div>
  )
}

export default Listing