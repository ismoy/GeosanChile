import Desinsectado from '@/scenes/ourServices/Desinsectado'
import { SelectedPage } from '@/shared/types'
import  { useState } from 'react'

export const DesinsectadoScreen = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Servicios)

  return (
    <div>
      <Desinsectado selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
  )
}
