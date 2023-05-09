import { useState } from 'react'

// Custom Hook para usar el localStorage
function useLocalStorage(itemName, initialValue) {

  // Obtengo el valor del localStorage
  const localStorageItems = window.localStorage.getItem(itemName)

  // Si hay algo en el localStorage, lo parseo, si no, uso un valor inicial por defecto
  let parsedItems
  if (!localStorageItems) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItems = initialValue
  } else {
    parsedItems = JSON.parse(localStorageItems)
  }

    // Crearemos un estado interno para los items que se guardará en el localStorage, el estado inicial será el valor del localStorage
    const [item, setItem] = useState(parsedItems)

  // Función para guardar los Items en el localStorage
  const saveItem = (newItems) => {
    
    // LocalStorage solo guarda strings, por lo que hay que convertir el array de Items en un string
    const stringifiedItems = JSON.stringify(newItems)
    // Guardo los Items en el localStorage
    window.localStorage.setItem(itemName, stringifiedItems)
    // Actualizo el estado de los Items
    setItem(newItems)
  }

  // Retorno los Items y la función para guardarlos
  return [
    item,
    saveItem
  ]
}

export { useLocalStorage }