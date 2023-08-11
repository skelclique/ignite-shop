import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  button: {
    border: 0,

    background: '$gray800',
    color: '$gray500',
    padding: '0.75rem',
    fontSize: '$xl',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,

    cursor: 'pointer',

    position: 'relative',

    div: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      background: '$green500',
      borderRadius: 999,
      width: '1.5rem',
      height: '1.5rem',

      position: 'absolute',
      top: 0,
      right: 0,
      transform: 'translate(25%, -25%)',
      outline: '3px solid',
      outlineColor: '$gray900',

      fontSize: '$xs',
      fontWeight: 'bold',
      color: '$white',
    },
  },
})
