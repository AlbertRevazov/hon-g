import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout'
import { CatalogPage, InvitationPage, SuccessPage, ErrorPage, NotFoundPage } from './pages'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<> Main </>} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/invitation/:id" element={<InvitationPage />} />
          <Route path="/rsvp/success" element={<SuccessPage />} />
          <Route path="/rsvp/error" element={<ErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
