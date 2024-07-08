import { ContactUs } from '@/scenes/contact/ContactUs';
import { SelectedPage } from '@/shared/types';
import { useState } from 'react'

export const ContactUsScreen = () => {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Dashboard)
    return (
      <div>
        <ContactUs selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
    );
}
