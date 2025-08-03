import Head from "next/head";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      {/* Meta tags básicas PRIMERO */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* CRÍTICO: Open Graph tags deben ir TEMPRANO y ser EXPLÍCITAS */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="PatagoniaScript" />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:url" content="https://patagoniascript.vercel.app/" />

      {/* Título explícito SIN emojis para mayor compatibilidad */}
      <meta
        property="og:title"
        content="PatagoniaScript - Desarrollo Web Profesional en Patagonia y Buenos Aires"
      />

      {/* Descripción explícita SIN emojis */}
      <meta
        property="og:description"
        content="Somos un equipo apasionado por el diseño web, comprometidos a dar vida a tus ideas en el vasto mundo digital. Desarrollo web profesional desde Patagonia y Buenos Aires."
      />

      {/* IMAGEN: Todas las propiedades explícitas que requiere WhatsApp */}
      <meta
        property="og:image"
        content="https://patagoniascript.vercel.app/logo.png"
      />
      <meta
        property="og:image:secure_url"
        content="https://patagoniascript.vercel.app/logo.png"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="PatagoniaScript - Desarrollo Web Profesional"
      />

      {/* Title y description normales para SEO */}
      <title>
        Diseño y Desarrollo Web Profesional en Patagonia y Buenos Aires |
        PatagoniaScript
      </title>
      <meta
        name="description"
        content="Somos un equipo apasionado por el diseño web, comprometidos a dar vida a tus ideas en el vasto mundo digital. Con sedes en la Patagonia y Buenos Aires, conectamos tu visión con el mundo."
      />

      {/* Twitter Cards con propiedades explícitas */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@patagoniascript" />
      <meta name="twitter:creator" content="@patagoniascript" />
      <meta
        name="twitter:title"
        content="PatagoniaScript - Desarrollo Web Profesional"
      />
      <meta
        name="twitter:description"
        content="Desarrollo web profesional desde Patagonia y Buenos Aires. Landing pages, e-commerce y sitios personalizados."
      />
      <meta
        name="twitter:image"
        content="https://patagoniascript.vercel.app/logo.png"
      />
      <meta name="twitter:image:alt" content="PatagoniaScript Logo" />

      {/* Meta adicionales para WhatsApp */}
      <meta
        name="image"
        content="https://patagoniascript.vercel.app/logo.png"
      />
      <meta
        name="thumbnail"
        content="https://patagoniascript.vercel.app/logo.png"
      />

      {/* Meta tags estándar */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="PatagoniaScript" />
      <meta name="theme-color" content="#06b6d4" />
      <link rel="canonical" href="https://patagoniascript.vercel.app/" />

      {/* Favicons */}
      <link rel="icon" href="/logo.png" />
      <link rel="apple-touch-icon" href="/logo.png" />

      {/* JSON-LD estructurado */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "PatagoniaScript",
            description:
              "Desarrollo web profesional desde Patagonia y Buenos Aires",
            url: "https://patagoniascript.vercel.app/",
            logo: {
              "@type": "ImageObject",
              url: "https://patagoniascript.vercel.app/logo.png",
              width: 1200,
              height: 630,
            },
            image: "https://patagoniascript.vercel.app/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+54-911-2776-4823",
              contactType: "customer service",
            },
            areaServed: ["Argentina", "Patagonia", "Buenos Aires"],
            serviceType: ["Desarrollo Web", "Diseño Web", "E-commerce"],
          }),
        }}
      />
    </Head>

    <Component {...pageProps} />
  </>
);

export default MyApp;
