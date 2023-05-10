import { createReactPortal } from 'react-dom'
import { ReactDOM } from 'react'

function Modal({ children }) {

  return ReactDOM.createPortal(
    <div className='modal'>
      {children}
    </div>,
    document.getElementById('modal')
  )
}

export { Modal }