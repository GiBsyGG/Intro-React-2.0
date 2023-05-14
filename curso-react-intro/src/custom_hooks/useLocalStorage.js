import { useReducer, useEffect } from 'react'

// Custom Hook para usar el localStorage
function useLocalStorage(itemName, initialValue) {

  // Usaremos useReducer para manejar el estado de los items
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }))
  
  // Destructuracion del estado para obtener los items
  const { syncItem, loading, error, item } = state

  // ACTION CREATORS
  const onError = (error) => dispatch({ type: actionTypes.error, payload: error })
  const onSuccessfulLoad = (item) => dispatch({ type: actionTypes.successfulLoad, payload: item })
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item })
  const onSincronize = () => dispatch({ type: actionTypes.sincronize })

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
        }

        // Si hay items en el localStorage, llamo a la función para guardarlos en el estado
        onSuccessfulLoad(parsedItems)
      } catch (error) {
        // Si hay algun error, actualizamos el estado de error, en este caso no especificamos el error
        onError(error)
      }
    }, 1000)
  }, [syncItem]) // La advertencia que tenemos esto la ignoramos, no queremos que se ejecute cada vez que se cambien estas dependencias, pero si queremos que se ejecute cuando se cambie el estado de sincronizedItem

  // Función para guardar los Items en el localStorage
  const saveItem = (newItems) => {
    try {
      // LocalStorage solo guarda strings, por lo que hay que convertir el array de Items en un string
      const stringifiedItems = JSON.stringify(newItems)
      // Guardo los Items en el localStorage
      localStorage.setItem(itemName, stringifiedItems)
      // Actualizo el estado de los Items
      onSave(newItems)
    }
    catch (error) {
      onError(error)
    }
  }

  //Función para sincronizar los items
  const sincronizeItem = () => {
    // Al haber un cambio en los items, llamamos a la función para la sincronización
    onSincronize()
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

const initialState = ({ initialValue }) => ({
  syncItem: true,
  loading: true,
  error: false,
  item: initialValue,
})

const actionTypes = {
  error: 'ERROR',
  successfulLoad: 'SUCCESSFUL_LOAD',
  save: 'SAVE',
  sincronize: 'SINCRONIZE',
}

const reducer = (state, action) => {
  const actions = {
    [actionTypes.error]: {
      ...state,
      error: true,
      loading: false,
    },
    [actionTypes.successfulLoad]: { 
      ...state,
      error: false,
      loading: false,
      syncItem: true,
      item: action.payload,
    },
    [actionTypes.save]: { 
      ...state,
      item: action.payload,
    },
    [actionTypes.sincronize]: {
      ...state,
      syncItem: false,
      loading: true,
    },
    default: {
      ...state,
    }
  }
  return actions[action.type] || actions.default
}

export { useLocalStorage }