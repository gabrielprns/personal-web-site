import Banner from "../components/Banner"
import { Boxes } from "../components/ContentField"
import { ButtonOut } from "../components/ContentField/Button/button"
import { ContentField } from "../components/ContentField/Elements/elements"
import { Footer } from "../components/Footer/footer"



export const Info = ()=>{
  return(
    <div className="App">
      <Banner bs="banner menu-bar " ts="b-2"/>
      <Boxes content_1={<ContentField hs="title-content" button={<ButtonOut/>}/>}/>
      <Footer fs="footer"/>
    </div>
  )
}