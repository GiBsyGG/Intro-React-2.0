import ReactDOM from 'react-dom'

function Modal({ children }) {

  return ReactDOM.createPortal(
    // El contenedor del modal ocupará toda la pantalla para poner transparencia al fondo y con el modal al centro
    <div className='absolute w-full h-full top-0 bg-opacity-40 bg-gray-500 flex justify-center items-center'>
      {children}
    </div>,
    document.getElementById('modal')
  )
}

export { Modal };