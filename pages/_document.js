import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
          
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600;700&display=swap" rel="stylesheet"></link>
        </Head>
				<body>
          
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
