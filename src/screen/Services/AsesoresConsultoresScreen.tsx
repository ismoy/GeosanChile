import AsesoresConsultores from '@/scenes/ourServices/AsesoresConsultores'
import { SelectedPage } from '@/shared/types'
import { useState } from 'react'

export const AsesoresConsultoresScreen = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Servicios)

  return (
    <div>
      <AsesoresConsultores selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
  )
}
