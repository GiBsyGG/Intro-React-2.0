function TodosLoading() {
  return (
    <div className="flex flex-col w-96 items-center gap-y-3">
      {[1, 2, 3].map((n) => ( 
        <div className="borde px-4 w-96 h-16 bg-slate-100 shadow-md" key={n}>
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-200 h-10 w-10 my-2"></div>
            <div className="flex-1 space-y-5 py-3 grid grid-cols-3">
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                <div className="h-2 bg-slate-200 rounded col-span-3"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export { TodosLoading }