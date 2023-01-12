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
  const { register, handleSubmit } = useForm();
  const [type, setType] = useState('');

  const typeForm = (info) => {
    setType(info);
  }

  const submit = async(form) => {
    const newRegister = {
      description: form.description,
      type: type,
      valor: form.valor 
    }
    try {
      await addDoc(collection(database, "registro"), {...newRegister});
    } catch (error) {
      throw error;
    }
  }


  // console.log(type)

  return (
    <div className='newRegistro'>
      <div className='newRegistro__container'>
        <h4>Registro de Movimiento</h4>
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label htmlFor="description">Description</label>
            <input type="text" name='description' {...register('description')}/>
          </div>
          <div>
            <label htmlFor="type">Tipo de Movimiento</label>
            <br />
            <input type="radio" name='type' onClick={() => typeForm('ingreso')}/>Ingreso
            <input type="radio" name='type' onClick={() => typeForm('gasto')}/>Gasto
          </div>
          <div>
            <label htmlFor="valor">Valor</label>
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
