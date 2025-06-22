import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Chat from './pages/Chat'
import Dashboard from './pages/Dashboard'
import Product from './pages/Product'
import Payment from './pages/Payment'
import CustomerList from './pages/CustomerList'
import Layout from './components/Layout'
import Settings from './pages/Settings'
import MyProfile from './pages/MyProfile'

function App() {
  return (
    <Router>
      <Routes>
        {/* Root route (Landing page) */}
        <Route path="/" element={<Landing />} />
         <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
         <Route path="/chat" element={<Layout><Chat /></Layout>} />
         <Route path="/product" element={<Layout><Product /></Layout>} />
         <Route path="/payment" element={<Layout><Payment /></Layout>} />
         <Route path="/customerList" element={<Layout><CustomerList /></Layout>} />
         <Route path="/settings" element={<Layout><Settings /></Layout>} />
         <Route path="/myProfile" element={<Layout><MyProfile /></Layout>} />
        {/* All routes that should use the Layout wrapper */}
      </Routes>
    </Router>
  )
}

export default App