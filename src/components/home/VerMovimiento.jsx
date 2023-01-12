import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc, 
  // getFirestore
} from 'firebase/firestore';

import { database } from '../../firebase/firebaseConfig';

const VerMovimiento = ({verMovimientoModal, setVerMovimientoModal, idRegistro}) => {

  // const db = getFirestore(app)
  const [registro, setRegistro] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const [type, setType] = useState('');

  const typeForm = (info) => {
    setType(info);
  }

  useEffect(() => {
    const getStore = async() => {
      try {
        const consulta = await getDoc(doc(database, 'registro', idRegistro))
        setRegistro(consulta?._document.data.value.mapValue.fields);
      } catch (error) {
        throw error;
      }
    }
    getStore();
  }, [])


  const submit = async() => {
   try {
    await deleteDoc(doc(database, 'registro', idRegistro));
   } catch (error) {
    throw error
   }
    setVerMovimientoModal(!verMovimientoModal);
  }

  

  // console.log(registro)

  return (
    <div className='newRegistro'>
      <div className='newRegistro__container'>
        <h4>Registro de Movimientos</h4>
        <div >
          <div>
            <label htmlFor="description">Descripcion</label>
            <br />
            <input type="text" name='description' value={registro.descripcion?.stringValue}/>
          </div>
          <div>
            <label htmlFor="type">Tipo de Movimiento</label>
            <br />

            {
              registro.tipo?.stringValue === 'ingreso' ? (
                <>
                  <input 
                    type="radio" 
                    name='type' 
                    onClick={() => typeForm('ingreso')} 
                    defaultChecked
                    />Ingreso
      
                  <input 
                    type="radio" 
                    name='type' 
                    onClick={() => typeForm('gasto')} 
                    />Gasto
                </>
              ) : (
                <>
                  <input 
                    type="radio" 
                    name='type' 
                    onClick={() => typeForm('ingreso')} 
                    />Ingreso
      
                  <input 
                    type="radio" 
                    name='type' 
                    onClick={() => typeForm('gasto')} 
                    defaultChecked
                  />Gasto
                </>
                )
            }
          </div>
          <div>
            <label htmlFor="valor">Valor</label>
            <br />
            <input type="number" name='valor' value={registro.valor?.stringValue}/>
          </div>

          <button type='submit' onClick={() => submit()}>Eliminar</button>
          <button onClick={() => setVerMovimientoModal(!verMovimientoModal)}>Cancelar</button>
        </div>

      </div>
    </div>
  )
}

export default VerMovimiento