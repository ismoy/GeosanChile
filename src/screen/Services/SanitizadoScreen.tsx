import Sanitizado from '@/scenes/ourServices/Sanitizado'
import { SelectedPage } from '@/shared/types'
import { useState } from 'react'

export const SanitizadoScreen = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Servicios)

  return (
    <div>
      <Sanitizado selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
  )
}
