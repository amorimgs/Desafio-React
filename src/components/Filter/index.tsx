type FilterProps = {
  radio: string;
  input: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filter = ({radio, input, handleChange}:FilterProps) => {
  return (
    <form className='flex flex-col bg-yellow-400'>
        <input id='input' type="text" value={input} onChange={handleChange} placeholder='Busca por Titulo' className='text-center p-3 border-yellow-400 border-4 focus:border-yellow-400 md:self-center md:w-2/3' />
        <div className='text-center bg-yellow-400 pb-4'>
          <p className="m-4 text-xl">Filtrar: </p>
          <div className="flex items-center justify-center gap-10">
          <label className='text-xl'><input className='mr-1' type="radio" value="Data" checked={radio === 'Data'} onChange={handleChange} />Data</label>
          <label className='text-xl'><input className='mr-1' type="radio" value="Alfabetica" checked={radio === 'Alfabetica'} onChange={handleChange} />Alfabetica</label>
          </div>
        </div>
      </form>
  )
}

export default Filter;
