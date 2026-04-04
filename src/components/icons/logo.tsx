import Image from 'next/image'
import React from 'react'
import LogoImage from '../../assets/images/logo.jpg'

export function LogoIcon(props: React.ComponentProps<'svg'>) {
  return <Image alt="Payload Logo" className="max-w-37.5" src={LogoImage} />
}
