import { stripe } from '@/lib/stripe'
import {
  SucessContainer,
  ImageContainer,
  LogoContainer,
  ProductsContainer,
} from '@/styles/pages/sucess'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import logoImg from '../assets/logo.svg'

interface SucessProps {
  customerName: string
  products: {
    name: string
    imageUrl: string
  }[]
}

export default function Sucess({ customerName, products }: SucessProps) {
  const moreThanOneProduct = products.length > 1

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <SucessContainer>
        <LogoContainer>
          <Image src={logoImg} alt="" />
        </LogoContainer>
        <ProductsContainer>
          {moreThanOneProduct ? (
            products.map((product) => (
              <ImageContainer rounded key={product.name}>
                <Image src={product.imageUrl} width={120} height={110} alt="" />
              </ImageContainer>
            ))
          ) : (
            <ImageContainer>
              <Image
                src={products[0].imageUrl}
                width={120}
                height={110}
                alt=""
              />
            </ImageContainer>
          )}
        </ProductsContainer>
        <h1>Compra efetuada!</h1>
        {moreThanOneProduct ? (
          <p>
            Uhuul <strong>{customerName}</strong>, sua compra de{' '}
            {products.length} camisetas já está a caminho da sua casa.
          </p>
        ) : (
          <p>
            Uhuul <strong>{customerName}</strong>, sua{' '}
            <strong>{products[0].name}</strong> já está a caminho da sua casa.
          </p>
        )}

        <Link href="/">Voltar ao catálogo</Link>
      </SucessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details!.name
  const productsData = session.line_items!.data

  const products = productsData.map((item: any) => ({
    name: item.price!.product.name,
    imageUrl: item.price!.product.images[0],
  }))

  return {
    props: {
      customerName,
      products,
    },
  }
}
