import { ReactNode } from 'react'
import Image from 'next/image'

import { Container, Header } from '@/styles/pages/app'

import { Handbag } from '@phosphor-icons/react'

import logoImg from '../assets/logo.svg'
import { useShoppingCart } from 'use-shopping-cart'
import { Cart } from '@/components/Cart'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { cartCount, handleCartClick } = useShoppingCart()

  const empty = cartCount === 0

  return (
    <Container>
      <Cart />
      <Header>
        <Image src={logoImg} alt="" />

        <button onClick={handleCartClick}>
          <Handbag color={!empty ? '#C4C4CC' : '#8D8D99'} weight="bold" />
          {!empty ? <div>{cartCount}</div> : null}
        </button>
      </Header>
      {children}
    </Container>
  )
}
