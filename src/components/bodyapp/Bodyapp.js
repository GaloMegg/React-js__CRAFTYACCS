import { Routes, Route } from "react-router-dom"
import ContactContainer from "./contact/ContactContainer"
import ItemDetailContainer from "./detail/ItemDetailContainer"
import ItemListContainer from "./items/ItemListContainer"
import Landing from "./landing/Landing"
import Whoweare from "./whoweare/Whoweare"

const Bodyapp = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/prod/" element={<ItemListContainer />} />
            <Route path="/prod/cat/:categ" element={<ItemListContainer />} />
            <Route path="/prod/product/:id" element={<ItemDetailContainer />} />
            <Route path="/contact/" element={<ContactContainer />} />
            <Route path="/whoweare/" element={<Whoweare />} />
        </Routes>
    )
}

export default Bodyapp
