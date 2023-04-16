import { Html, Head, Main, NextScript } from 'next/document'
import NavBar from "../components/NavBar"

export default function Document() {
  return (
    <Html lang="en"
    >
      <link
	href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
	rel="stylesheet"></link>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
