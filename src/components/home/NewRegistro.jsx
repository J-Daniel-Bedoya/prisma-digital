import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  addDoc,
  collection, 
  // getFirestore
} from 'firebase/firestore';

import { database } from '../../firebase/firebaseConfig';

const NewRegistro = ({registroModal, setRegistroModal}) => {

  // const db = getFirestore(app)
  const { register, handleSubmit, reset } = useForm();
  const [type, setType] = useState('');

  const typeForm = (info) => {
    setType(info);
  }

  const defaultValues = {descripcion: null, valor: null}
  // const tiempoTranscurrido = Date.now();
  const date = new Date();
  const fecha = date.toLocaleDateString()
  const fechaYHora = date.toLocaleString()
  

  const submit = async(form) => {
    const newRegister = {
      descripcion: form.descripcion,
      tipo: type,
      valor: form.valor,
      fecha: fecha,
      fechaYHora: fechaYHora
    }
    try {
      await addDoc(collection(database, "registro"), {...newRegister});
    } catch (error) {
      throw error;
    }
    reset(defaultValues)
    setType(null)
    setRegistroModal(!registroModal);
  }

  

  // console.log(type)

  return (
    <div className='newRegistro'>
      <div className='newRegistro__container'>
        <h4>Registro de Movimientos</h4>
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label htmlFor="description">Descripcion</label>
            <br />
            <input type="text" name='description' {...register('descripcion')}/>
          </div>
          <div>
            <label htmlFor="type">Tipo de Movimiento</label>
            <br />
            <input type="radio" name='type' onClick={() => typeForm('ingreso')}/>Ingreso
            <input type="radio" name='type' onClick={() => typeForm('gasto')}/>Gasto
          </div>
          <div>
            <label htmlFor="valor">Valor</label>
            <br />
            <input type="number" name='valor' {...register('valor')}/>
          </div>

          <button type='submit'>Registrar</button>
          <button onClick={() => setRegistroModal(!registroModal)}>Cancelar</button>
        </form>

      </div>
    </div>
  )
}

export default NewRegistro
