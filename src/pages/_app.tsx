import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import { Noto_Sans_Javanese } from 'next/font/google'

const noto_sans_javanese = Noto_Sans_Javanese({
  subsets: ['latin'],
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={noto_sans_javanese.className}>
      <Component {...pageProps} />
    </div>
  )
};

export default api.withTRPC(MyApp);
