import ControlDeAves from '@/scenes/ourServices/ControlDeAves'
import { SelectedPage } from '@/shared/types'
import { useState } from 'react'

export const ControldeavesScreen = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Servicios)

  return (
    <div>
      <ControlDeAves selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
  )
}
