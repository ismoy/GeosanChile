import AboutUS from '@/scenes/aboutUs/AboutUs'
import { SelectedPage } from '@/shared/types'
import { useState } from 'react'

export const AboutUsScreen = ():JSX.Element  => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Nosotros)
  return (
    <div>
       <AboutUS selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  )
}
