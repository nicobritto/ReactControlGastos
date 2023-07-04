import React from 'react'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list';
import "react-swipeable-list/dist/styles.css"
import { formatiarFecha } from '../helpers';

import iconoAhorro from '../img/icono_ahorro.svg';
import iconoCasa from '../img/icono_casa.svg';
import iconoComida from '../img/icono_comida.svg';
import iconoGastos from '../img/icono_gastos.svg';
import iconoOcio from '../img/icono_ocio.svg';
import iconoSalud from '../img/icono_salud.svg';
import iconoSuscripciones from '../img/icono_suscripciones.svg';


const diccionarioIconos = {

  ahorro: iconoAhorro,
  comida: iconoComida,
  casa: iconoCasa,
  gastos: iconoGastos,
  ocio: iconoOcio,
  salud: iconoSalud,
  suscripciones: iconoSuscripciones

}

const Gasto = ({ gasto,setGastoEditar }) => {

  const { categoria, nombre, cantidad, id, fecha } = gasto;

  const leadingActions =()=>(
   <LeadingActions>
    <SwipeAction onClick={()=>setGastoEditar(gasto)}> 
      Editar
    </SwipeAction>
   </LeadingActions>
  );
  const trailingActions =()=>(
     <TrailingActions>
      <SwipeAction onClick={()=>console.log('borrar')}>
       Eliminar
      </SwipeAction>
     </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem 
      leadingActions={leadingActions()} 
      trailingActions={trailingActions()}>{/*es la parte de atras al deslizar */}{/*leading es la parte de adelante al deslicar que es lo que va hacer   */}2
        <div className='gasto sombra'>
          <div className='contenido-gasto'>
            <img
              src={diccionarioIconos[categoria]}
              alt='Icono Gastos'
            />
            <div className='descripcion-gasto'>
              <p className='categoria'> {categoria} </p>
              <p className='nombre-gasto'> {nombre} </p>
              <p className='fecha-gasto'>Agregado el:{''} <span>{formatiarFecha(fecha)}</span> </p>
            </div>
          </div>
          <p className='cantidad-gasto'>${cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto