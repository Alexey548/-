import { ButtonHTMLAttributes, FC } from ' react'
export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  onClick,
})=> {
  return ‹button onClick={onClick}>Click me!</button>
}