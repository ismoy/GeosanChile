import Desrratizado from '@/shared/Desrratizado'
import { SelectedPage } from '@/shared/types'
import { useState } from 'react'

export const DesrratizadoScreen = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Servicios)

  return (
    <div>
      <Desrratizado selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
  )
}
