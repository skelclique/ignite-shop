import {
  Container,
  Product,
  ImageContainer,
  ProductDetails,
} from '@/styles/components/cart'

import Image from 'next/image'

import { X } from '@phosphor-icons/react'

import { useShoppingCart } from 'use-shopping-cart'
import axios from 'axios'
import { useEffect, useState } from 'react'

export function Cart() {
  const {
    cartCount,
    formattedTotalPrice,
    shouldDisplayCart,
    handleCloseCart,
    cartDetails,
    removeItem,
  } = useShoppingCart()

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleBuyButton() {
    if (!cartDetails) return

    try {
      setIsCreatingCheckoutSession(true)

      const priceId = Object.keys(cartDetails).map((key) => ({
        price: cartDetails[key].defaultPriceId,
        quantity: cartDetails[key].quantity,
      }))

      const response = await axios({
        method: 'POST',
        url: '/api/checkout',
        data: {
          priceId,
        },
      })
      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  }

  useEffect(() => {
    if (cartCount) {
      setIsCreatingCheckoutSession(true)
    } else {
      setIsCreatingCheckoutSession(false)
    }
  }, [cartCount])

  return (
    <Container style={{ display: shouldDisplayCart ? 'flex' : 'none' }}>
      <header>
        <button onClick={handleCloseCart}>
          <X />
        </button>
      </header>
      <h1>Sacola de compras</h1>
      <main>
        {cartDetails &&
          Object.keys(cartDetails).map((key) => {
            const product = cartDetails[key]

            return (
              <Product key={product.id}>
                <ImageContainer>
                  <Image src={product.imageUrl} width={90} height={90} alt="" />
                </ImageContainer>

                <ProductDetails>
                  <p>{product.name}</p>
                  <span>{product.formattedValue}</span>
                  <button onClick={() => removeItem(product.id)}>
                    Remover
                  </button>
                </ProductDetails>
              </Product>
            )
          })}
      </main>
      <footer>
        <div>
          <span>Quantidade</span>
          <span>{cartCount === 1 ? '1 item' : `${cartCount} items`}</span>
        </div>
        <div>
          <span>Valor Total</span>
          <span>{formattedTotalPrice}</span>
        </div>

        <button onClick={handleBuyButton} disabled={!isCreatingCheckoutSession}>
          Finalizar Compra
        </button>
      </footer>
    </Container>
  )
}
