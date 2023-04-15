import Head from 'next/head';
import { FC } from 'react';
import React, { PropsWithChildren } from 'react';
import { Navbar } from '../ui';

interface Props {
  title?: string;
}
const origin = typeof window === 'undefined' ? '' : window.location.origin;
export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="ALVARO,JESUS,ANDERS.FRANCISCO" />
        <meta name="description" content={`Información sobre el pokémon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar/>
      <main className="bg-blue-200">{children}</main>
    </>
  );
};
