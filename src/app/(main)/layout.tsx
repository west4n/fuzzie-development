import InfoBar from '@/components/infobar'
import Sidebar from '@/components/sidebar'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex h-screen overflow-hidden'>
			<Sidebar />
			<div className='w-full'>
				<InfoBar />
				{children}
			</div>
		</div>
	)
}

export default MainLayout
