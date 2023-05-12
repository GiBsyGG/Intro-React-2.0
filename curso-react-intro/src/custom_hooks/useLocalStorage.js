import { useState, useEffect } from 'react'

// Custom Hook para usar el localStorage
function useLocalStorage(itemName, initialValue) {

  // Crearemos un estado interno para los items que se guardará en el localStorage
  const [item, setItem] = useState(initialValue)
  
  // Crearemos un estado de carga y uno de error para comprobar si no hay items o solo se está cargando del localStorage
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // Estado para sincronizar el localStorage con el estado de los items
  const [sincronizedItem, setSincronizedItem] = useState(true)

  // Funcion para cargar los items del localStorage
  useEffect(() => {
    // Usaremos un tiempo con setTimeUp para simular una carga de datos de una API
    setTimeout(() => {
      // Comprobamos que no haya errores al cargar los items
      try {
        // Obtengo el valor del localStorage
        const localStorageItems = window.localStorage.getItem(itemName)

        let parsedItems

        // Si hay algo en el localStorage, lo parseo, si no, uso un valor inicial por defecto
        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItems = initialValue
        } else {
          parsedItems = JSON.parse(localStorageItems)
          // Si hay items en el localStorage, actualizo el estado de los items
          setItem(parsedItems)
        }

        // Actualizamos el estado de carga despues de cargar los items
        setLoading(false)

        // Actualizamos el estado de sincronización
        setSincronizedItem(true)

      } catch (error) {
        // Si hay algun error, actualizamos el estado de error, en este caso no especificamos el error
        setError(true)
        // Actualizamos de igual forma el estado de carga
        setLoading(false)
      }
    }, 2000)
  }, [sincronizedItem]) // La advertencia que tenemos esto la ignoramos, no queremos que se ejecute cada vez que se cambien estas dependencias, pero si queremos que se ejecute cuando se cambie el estado de sincronizedItem

  // Función para guardar los Items en el localStorage
  const saveItem = (newItems) => {
    
    // LocalStorage solo guarda strings, por lo que hay que convertir el array de Items en un string
    const stringifiedItems = JSON.stringify(newItems)
    // Guardo los Items en el localStorage
    window.localStorage.setItem(itemName, stringifiedItems)
    // Actualizo el estado de los Items
    setItem(newItems)
  }

  //Función para sincronizar los items
  const sincronizeItem = () => {
    // Al haber un cambio en los items, volvemos a cargar todo
    setLoading(true)

    // Actualizamos el estado de sincronización a false para que se dispare el useEffect
    setSincronizedItem(false)
  }

  // Retorno los Items y la función para guardarlos
  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  }
}

export { useLocalStorage }