import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { Film } from '../components/film/Film';
import { Layout } from '../components/layout/Layout';
import { fetchSwapi } from '../lib/swapi';
import { IAllFilms } from '../types';

export type PageProps = {
  films: IAllFilms | null; 
};

export default function PageComponent(
  data: InferGetServerSidePropsType<typeof getServerSideProps>,
): JSX.Element {
  const { films } = data;

  if (!films) {
    return (<p>error</p>);
  }

  return (
    <Layout>
      <Head>
        <title>Star Wars films</title>
      </Head>
      <h1>Star Wars films</h1>
      {films.allFilms.films.map((film, i) => (
        <Film key={i} film={film}/>
      ))}
    </Layout>
  );
}

const query = `
  query {
    allFilms {
      films {
        title
        openingCrawl
        episodeID
        characterConnection {
          characters {
            name
            id
          }
        }
      }
    } 
  }
`;

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const films = await fetchSwapi<IAllFilms>(query); 

  return {
    props: {
      films: films ?? null,
    },
  };
};
