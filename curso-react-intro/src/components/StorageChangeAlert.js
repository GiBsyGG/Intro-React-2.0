import { useStorageListener } from "../custom_hooks/useStorageListener";

function StorageChangeAlert({ sincronize }) {

  const { show, toggleShow } = useStorageListener(sincronize);

  if (show) {
    return (
      <div className="absolute w-full h-full top-0 bg-opacity-40 bg-gray-500 flex justify-center items-center z-20">
        <div className="w-3/4 h-2/4 bg-slate-50 rounded-3xl shadow-md flex flex-col justify-center items-center gap-5">
          <p className="font-bold text-center">
            Parece que cambiaste los ToDos
          </p>
          <p className="font-bold text-center">Debes recargar los cambios</p>
          <button
            onClick={toggleShow}
            className="w-36 h-12 bg-violet-700 rounded-xl text-white hover:bg-violet-400"
          >
            Recargar
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { StorageChangeAlert };
