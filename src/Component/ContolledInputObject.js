import React, { useEffect, useState } from "react";

const ControlledInputObject = () => {
  const [persona, setPersona] = useState({
    nome: "",
    email: "",
    cellulare: "",
  });
  const [persone, setPersone] = useState([]);

  const handleSumbit = (e) => {
    e.preventDefault();
    if(persona.nome && persona.email && persona.cellulare){
      setPersone([
        ...persone,
        {
          id: persone.length + 1,
          ...persona,
        },
      ])
    }else{
      alert("Compila tutti i campi");
    }

    setPersona({

      nome: "",
      email: "",
      cellulare: "",
    });
 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersona({ ...persona, [name]: value });
  };

  useEffect(() => {
    const { log } = console;
    log(persone);
  }, [persone]);

  return (
    <form className='bg-white shadow p-4' onSubmit={(e) => handleSumbit(e)}>
      <div className='form-group d-flex align-items-center container mt-2'>
        <label htmlFor='nome' className='text-left font-weight-bold col-2'>
          Nome:
        </label>
        <input
          type='text'
          id='nome'
          name='nome'
          className='form-control'
          value={persona.nome}
          onChange={handleChange}
        />
      </div>
      <div className='form-group d-flex align-items-center container mt-2'>
        <label htmlFor='email' className='text-left font-weight-bold col-2'>
          Email:
        </label>
        <input
          type='email'
          id='email'
          name='email'
          className='form-control'
          value={persona.email}
          onChange={handleChange}
        />
      </div>
      <div className='form-group d-flex align-items-center container mt-2'>
        <label htmlFor='cellulare' className='text-left font-weight-bold col-2'>
          Cellulare:
        </label>
        <input
          type='tel'
          id='cellulare'
          name='cellulare'
          className='form-control'
          value={persona.cellulare}
          onChange={handleChange}
        />
      </div>
      <button type='submit' className='btn btn-info mt-4'>
        Invia
      </button>
    </form>
  );
};

export default ControlledInputObject;
