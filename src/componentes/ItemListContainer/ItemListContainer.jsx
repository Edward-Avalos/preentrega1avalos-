import React from 'react'
import { NadvarComponent } from '../componentes'

export const ItemListContainer = ({children}) => {
    const style = {
        backgroundColor: "white",
        color: "black",
    }

  return (
    <div style={style}>
        <NadvarComponent />
        {children}

    </div>
  )
}
