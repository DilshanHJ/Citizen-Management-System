import './styles.css'
import { useState } from 'react'
import HospitalAdminSection from './HospitalAdminSection'
import DoctorSection from './DoctorSection'

const IndexPage = () => {
	const [usertype] = useState('Hospital Admin')

	if (usertype === 'Hospital Admin') {
		return <HospitalAdminSection />
	} else if (usertype === 'Doctor') {
		return <DoctorSection />
	}
}
export default IndexPage
