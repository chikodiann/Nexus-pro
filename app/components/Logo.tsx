import Image from 'next/image'
import { useRouter } from 'next/navigation'
interface LogoProps {
  src: string,
  alt: string,
}

const Logo = ({ src, alt }: LogoProps) => {
  const router = useRouter()
  const goToHome = () => {
    router.push('/')
  }
  return (
    <picture className=' w-28 h-16 relative cursor-pointer' onClick={goToHome}>
      <Image className='absolute object-cover' src={src} alt={alt} fill priority />
    </picture>
  )
}

export default Logo