import store from "@/Redux/store";
import { Html, Head, Main, NextScript } from "next/document";
import { Provider } from "react-redux";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&family=Noto+Sans&family=Yeseva+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
      <Provider store={store}>

        <Main />
        </Provider>
        <NextScript />
        <script
          async
          src={`https://maps.googleapis.com/maps/api/js?key=${'AIzaSyAkM7G7R9ISd_KiFvkI57HJMwO2JIicUJk'}&libraries=places&callback=initMap`}
        ></script>
      </body>
    </Html>
  );
}
