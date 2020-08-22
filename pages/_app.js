// import App from 'next/app'

import GlobalStyled from '../theme/globalStyles';
import { Fragment } from 'react';

import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<GlobalStyled />
			<Header />
			<Component {...pageProps} />
			<Footer />
		</Fragment>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
