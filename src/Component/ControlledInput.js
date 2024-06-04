import React, {useState, useEffect} from "react";

const ControlledInput = () => {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cel, setCel] = useState("");
  const [persona, setPersona] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !email || !cel) {
      alert("Compila tutti i campi");
      return;
    }
    console.log(nome, email, cel);
    setPersona([...persona, 
    {
      //dà un id unico (solo esempio, non usare in produzione)
      id: new Date(Date.now()).getTime().toString(),
      nome,
      email,
      cel
    }]);
    setNome("");
    setEmail("");
    setCel("");
  };

  const handleChange = (e) => {
    const {value} = e.target;
    setCel(value);
  };

  useEffect(() => {
    console.log("Persona", persona);
  }, [persona]);

  return (
    <form className="bg-white shadow rounded p-4" onSubmit={handleSubmit}>
      <div className="from-group d-flex align-items-center justify-content-around">
        <label htmlFor="nome" className="text-left font-weight-bold col-3">Nome</label>
        {/* target.value restituisce il valore */}
        <input id="nome" type="text" className="form-control" value={nome} onChange={(e) => setNome(e.target.value)}/>
      </div>
      <div className="from-group d-flex align-items-center justify-content-around my-2">
        <label htmlFor="email" className="text-left font-weight-bold col-3">Email</label>
        <input id="email" type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="from-group d-flex align-items-center justify-content-around my-2">
        <label htmlFor="cel" className="text-left font-weight-bold col-3">Cellulare</label>
        <input id="cel" type="tel" className="form-control" value={cel} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-success">Invia</button>
    </form>
  );
};

export default ControlledInput;
