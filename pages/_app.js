import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-yummy-ligth-grey">
      <Component {...pageProps} />
    </div>
  );
}
