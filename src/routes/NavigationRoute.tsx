import AboutUsPage from "@/pages/aboutUs/AboutUsPage"
import ContactPage from "@/pages/contact/ContactPage"
import HomePage from "@/pages/home/HomePage"
import ServiceDetailPage from "@/pages/services/ServiceDetailPage"
import { Route, Routes } from "react-router-dom"

const NavigationRoute:React.FC = ()=>{
    return(
        <Routes>
        <Route path="/" element ={<HomePage/>}/>
        <Route path="aboutUs" element ={<AboutUsPage/>}/>
        <Route path="contact" element ={<ContactPage/>}/>
        <Route path="/services/:serviceKey" element ={<ServiceDetailPage/>}/>
        <Route path="/services/:serviceKey" element ={<ServiceDetailPage/>}/>
        <Route path="/services/:serviceKey" element ={<ServiceDetailPage/>}/>
        <Route path="/services/:serviceKey" element ={<ServiceDetailPage/>}/>
        <Route path="/services/:serviceKey" element ={<ServiceDetailPage/>}/>
        </Routes>
    )
}
export default NavigationRoute