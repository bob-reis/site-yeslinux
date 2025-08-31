import { ReactElement } from 'react'
import { renderToString } from 'react-dom/server'

export default function render(element: ReactElement): string {
  return renderToString(element)
}
