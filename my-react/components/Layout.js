import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer"


const  Layout = ({ children }) => (

		<>
			<Head>
				<title>Ahmad react library App</title>
			</Head>
      <Navbar />
			{children}
			<Footer />

</>

)

export default Layout;