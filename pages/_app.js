import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <Component {...pageProps} />
      <script src="/js/script.js"></script>
    </div>
  );
}

export default MyApp;
