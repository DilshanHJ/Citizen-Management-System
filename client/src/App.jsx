/* eslint-disable no-unused-vars */
import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLanding from './pages/AdminLanding/AdminLanding'

import HealthLogin from './pages/Health/LoginPage/LoginPage'
import CarrierLogin from './pages/Carrier/LoginPage/LoginPage'
import EducationLogin from './pages/Educational/LoginPage/LoginPage'
import LegalLogin from './pages/Legal/LoginPage/LoginPage'
import PersonalLogin from './pages/Personal/LoginPage/LoginPage'
import DoctorHomePage from './pages/Health/IndexPage/DoctorSection'
import HospitalAdminHomePage from './pages/Health/IndexPage/HospitalAdminSection'
import CarrierIndexPage from './pages/Carrier/IndexPage/IndexPage'
import EducationIndexPage from './pages/Educational/IndexPage/IndexPage'
import CourtHomePage from './pages/Legal/IndexPage/CourtSection'
import PoliceHomePage from './pages/Legal/IndexPage/PoliceSection'
import PersonalIndexPage from './pages/Personal/IndexPage/IndexPage'
import SiteAdminLogin from './pages/SiteAdmin/LoginPage/LoginPage'
import SiteAdminHome from './pages/SiteAdmin/Homepage/SetAdminSection'

const App = () => {
	return (
		<Routes>
			<Route index element={<h1>Home page</h1>} />
			<Route
				path={'/admin/siteadmin'}
				element={<SiteAdminLogin />}
			/>
			<Route path={'/admin'} element={<AdminLanding />} />
			<Route path={'/admin/carrier'} element={<CarrierLogin />} />
			<Route
				path={'/admin/education'}
				element={<EducationLogin />}
			/>
			<Route path={'/admin/health'} element={<HealthLogin />} />
			<Route path={'/admin/legal'} element={<LegalLogin />} />
			<Route path={'/admin/personal'} element={<PersonalLogin />} />

			<Route
				path={'/admin/siteadmin/home'}
				element={<SiteAdminHome />}
			/>
			<Route
				path={'/admin/health/home/doctor'}
				element={<DoctorHomePage />}
			/>
			<Route
				path={'/admin/health/home/hospitaladmin'}
				element={<HospitalAdminHomePage />}
			/>
			<Route
				path={'/admin/carrier/home'}
				element={<CarrierIndexPage />}
			/>
			<Route
				path={'/admin/education/home'}
				element={<EducationIndexPage />}
			/>
			<Route
				path={'/admin/legal/home/court'}
				element={<CourtHomePage />}
			/>
			<Route
				path={'/admin/legal/home/police'}
				element={<PoliceHomePage />}
			/>
			<Route
				path={'/admin/personal/home'}
				element={<PersonalIndexPage />}
			/>
		</Routes>
	)
}
export default App
