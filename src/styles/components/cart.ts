import { styled } from '..'

export const Container = styled('div', {
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: 1,

  display: 'flex',
  flexDirection: 'column',

  height: '100vh',
  width: '100%',
  maxWidth: '30rem',

  background: '$gray800',
  boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.80)',
  padding: '3rem',

  header: {
    alignSelf: 'end',
    button: {
      background: 'none',
      border: 0,

      color: '$gray500',
      fontSize: '$xl',

      cursor: 'pointer',

      '&:hover': {
        color: '$gray400',
        transition: 'color 0.2s',
      },
    },
  },

  h1: {
    marginTop: '1.25rem',
    fontSize: '$lg',
  },

  main: {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.125rem',
  },

  footer: {
    marginTop: 'auto',

    div: {
      display: 'flex',
      justifyContent: 'space-between',

      span: {
        color: '$gray100',

        '&:last-of-type': {
          fontSize: '$lg',
        },
      },

      '&:last-of-type': {
        span: {
          fontSize: '$lg',

          '&:last-of-type': {
            fontSize: '$xl',
          },
        },
        marginTop: '0.5rem',
        fontWeight: 'bold',
      },
    },

    button: {
      marginTop: '3.5rem',
      width: '100%',
      background: '$green500',

      border: 0,
      borderRadius: 8,

      fontWeight: 'bold',
      color: '$white',
      padding: '1.25rem 0',
      fontSize: '$md',

      cursor: 'pointer',

      '&:not(:disabled):hover': {
        backgroundColor: '$green300',
        transition: 'background-color 0.2s',
      },

      '&:disabled': {
        opacity: 0.8,
        cursor: 'not-allowed',
      },
    },
  },
})

export const Product = styled('div', {
  display: 'flex',
  gap: '1.125rem',
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  padding: '0.25rem 0',

  p: {
    fontSize: '$md',
  },

  span: {
    fontSize: '$md',
    fontWeight: 'bold',
  },

  button: {
    alignSelf: 'start',
    marginTop: 'auto',
    border: 0,
    background: 'transparent',

    fontSize: '$md',
    color: '$green500',
    fontWeight: 'bold',
    cursor: 'pointer',

    '&:hover': {
      color: '$green300',
      transition: 'color 0.2s',
    },
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 100,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})
