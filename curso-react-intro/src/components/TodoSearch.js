function TodoSearch({ searchValue, setSearchValue, loading }) {

  return (
    <input
      type="text"
      placeholder="Buscar ToDo..."
      className={`placeholder:italic placeholder:text-xl placeholder:text-center placeholder:text-slate-400  block bg-white w-80 h-16 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-violet-700 focus:ring-violet-700 focus:ring-1 sm:text-sm ${loading && 'opacity-25'}`}
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      disabled={loading}
    />
  );
}

export { TodoSearch };
