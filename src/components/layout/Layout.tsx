import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Breadcrumb } from './Breadcrumb'

interface LayoutProps {
	children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className='min-h-screen flex flex-col bg-gray-50'>
			<Header />
			<main className='flex-1 py-8'>
				<div className='container mx-auto px-4'>
					<Breadcrumb />
					{children}
				</div>
			</main>
			<Footer />
		</div>
	)
}
