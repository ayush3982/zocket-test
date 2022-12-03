import { BrowserRouter, Routes, Route } from "react-router-dom";
import Campaign from './pages/Campaign'
import NewCampaign from "./pages/NewCampaign";
import ProductsDashboard from "./pages/ProductsDashboard";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path = '/campaign' element = {<Campaign />}></Route>
        <Route path = '/products' element = {<ProductsDashboard />}></Route>
        <Route path = '/new/campaign' element = {<NewCampaign />}></Route>
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
