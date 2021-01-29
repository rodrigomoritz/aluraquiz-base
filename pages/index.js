import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Modelo Base</title>
        <meta name="title" content="AluraQuiz - Modelo Base" />
        <meta name="description" content="AluraQuiz - Imersão React Next Alura" />

        <meta property="og:type" content="aluraquiz-base.rodrigomoritz.vercel.app" />
        <meta property="og:url" content="https://aluraquiz-base.rodrigomoritz.vercel.app/" />
        <meta property="og:title" content="Alura Quiz - Modelo Base" />
        <meta property="og:description" content="Projeto Criado React Next Imersão React Next Alura" />
        <meta property="og:image" content="https://i2.wp.com/css-tricks.com/wp-content/uploads/2017/06/css-is-awesome-scaled.jpg?resize=1536%2C1208&ssl=1" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aluraquiz-base.rodrigomoritz.vercel.app/" />
        <meta property="twitter:title" content="Alura Quiz - Modelo Base" />
        <meta property="twitter:description" content="Projeto Criado React Next Imersão Alura" />
        <meta property="twitter:image" content="https://i2.wp.com/css-tricks.com/wp-content/uploads/2017/06/css-is-awesome-scaled.jpg?resize=1536%2C1208&ssl=1" />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Quiz CSS da Alura</h1>
          </Widget.Header>

          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();

              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                onChange={function (infosDoEvento) {
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Diz ai seu nome"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quiz CSS da Alura</h1>
          </Widget.Header>

          <Widget.Content>
            <p>lorem ipsum...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/rodrigomoritz" />
    </QuizBackground>

  );
}
