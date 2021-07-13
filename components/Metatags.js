import Head from "next/head";

export default function Metatags({
  title = "Foggy",
  description = "Write tour WHIM(s) here!",
  image = "https://logopond.com/logos/5d5f234d085bac26c0b64d38b07e7dd2.png",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="twitter" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
}
