import React from 'react'
import LogoPrisma from '../../assets/imgs/logo-prisma.png'

const home = () => {
  return (
    <>  
    <div className='logo_backgrnd'>
        <img src={LogoPrisma} alt='Logo_Prisma' className="logo_prisma"/>
    </div>
    <hr className='barra'></hr>
    <div className='info_backgrnd'>
        <div className='info_card'>
            <h1>Movimientos</h1>
            <div className='info_movimientos'>
                <div className='info_details'>
                    <p>09/01/2023</p>
                    <p>Compra de perro caliente</p>
                </div>
                <div>
                    <p>$ -15.000</p>
                </div>
            </div>
            <div className='info_movimientos'>
                <div className='info_details'>
                    <p>10/01/2023</p>
                    <p>Compra de camiseta</p>
                </div>
                <div>
                    <p>$ -100.000</p>
                </div>
            </div>
            <div className='info_movimientos'>
                <div className='info_details'>
                    <p>11/01/2023</p>
                    <p>Ingreso salario</p>
                </div>
                <div>
                    <p>$ 3.000.000</p>
                </div>
            </div>
            <div className='info_movimientos'>
                <div className='info_details'>
                    <p>11/01/2023</p>
                    <p>Compra de mercado para la alacena</p>
                </div>
                <div>
                    <p>$ -150.000</p>
                </div>
            </div>
            <div className='info_movimientos'>
                <div className='info_details'>
                    <p>11/01/2023</p>
                    <p>Pagos servicio del celular</p>
                </div>
                <div>
                    <p>$ -60.000</p>
                </div>
            </div>
            <div className='btns_home'>
            <button className='btn_verMas'>Ver mas</button>
            <button className='btn_registro_movimiento'>+</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default home
