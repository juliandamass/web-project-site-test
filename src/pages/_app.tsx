import type { AppProps } from 'next/app';

import '@fontsource/montserrat/100.css';
import '@fontsource/montserrat/200.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';
import '@fontsource/montserrat/900.css';

import '@fontsource/montserrat-alternates/100.css';
import '@fontsource/montserrat-alternates/200.css';
import '@fontsource/montserrat-alternates/300.css';
import '@fontsource/montserrat-alternates/400.css';
import '@fontsource/montserrat-alternates/500.css';
import '@fontsource/montserrat-alternates/600.css';
import '@fontsource/montserrat-alternates/700.css';
import '@fontsource/montserrat-alternates/800.css';
import '@fontsource/montserrat-alternates/900.css';

import '../../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
