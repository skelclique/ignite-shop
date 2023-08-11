import { styled } from '..'

export const SucessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    marginTop: '3rem',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '1.5rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '4rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImageContainer = styled('div', {
  width: '100%',

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  padding: '0.25rem',
  marginTop: '6.5rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    rounded: {
      true: {
        borderRadius: 9999,
        maxWidth: 140,
        height: 140,
        boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.80)',
        marginLeft: '-2rem',
      },
    },
  },

  maxWidth: 130,
  height: 145,
  borderRadius: 8,

  img: {
    objectFit: 'cover',
  },
})

export const LogoContainer = styled('div', {
  marginTop: '4rem',
})

export const ProductsContainer = styled('div', {
  display: 'inline-flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
})
