import nanoid from 'nanoid/generate';
import { NextPage } from 'next';

import Link from '../components/Link';
import { LI, UL } from '../components/NumbersList';

interface Props {
  email: string;
}

const GamePage: NextPage<Props, {}> = ({ email }) => (
  <>
    <p>Hi! My name is Yuri and I’m a Fullstack JavaScript Developer.</p>
    <p>
      Probably you were trying to offer me an interesting job opportunity and
      most likely I redirected you to this page.
    </p>
    <p>
      First of all I would like to thank you for your interest in me as a
      candidate, I appreciate that, I really do. Secondly I respect your time as
      much as I respect mine so please let’s spend it as productive as possible.
    </p>
    <p>
      I get literally tons of HR messages on{' '}
      <Link
        url="https://cz.linkedin.com/in/yakovlevyuri"
        title="My LinkedIn"
        label="LinkedIn"
        newWindow
      />{' '}
      and 99% of them are irrelevant. So I came up with the idea how to avoid
      that.
    </p>
    <p>
      <strong>
        All I expect you to do is to meet only 4 criteria before you’re going to
        offer me a new role:
      </strong>
    </p>
    <UL>
      <LI>
        <span>
          I’m crazy in ❤️ with <em>JavaScript</em> and I’m not going to be a
          Java/C#/Python/whatsoever hero for you or someone else.
        </span>
      </LI>
      <LI>
        <span>
          Still using RESTful API? No God, please no. I prefer{' '}
          <em>GraphQL + Node.js</em> bundle.
        </span>
      </LI>
      <LI>
        <span>
          What about client side? I like <em>React</em> and <em>Vue</em>.
        </span>
      </LI>
      <LI>
        <span>
          I am also a huge fan of <em>Open Source</em> and I expect from my
          future employer to share the same views as well.
        </span>
      </LI>
    </UL>
    <p>
      Checked every point above carefully and pretty sure that{' '}
      <em>I’m the guy</em> and <em>you are that 1%</em>? Here is my{' '}
      <Link
        url="/cv/yakovlev-yuri.pdf"
        title="My Résumé in JSON response"
        label="CV"
        newWindow
      />
      . Please drop me an email to{' '}
      <Link url={`mailto:${email}`} title="My Email" label={email} /> or send me
      a message on{' '}
      <Link
        url="https://t.me/yyakovlev"
        title="I use Telegram"
        label="telegram"
        newWindow
      />
      .
    </p>

    <style jsx global>{`
      @media screen and (min-width: 820px) {
        .wrapper {
          grid-template-columns: 1fr 550px 1fr;
          grid-template-areas:
            'header header header'
            '. content .'
            'footer footer footer' !important;
        }
      }

      .content {
        text-align: left !important;
      }

      ul {
        margin-left: 20px !important;
      }
    `}</style>

    <style jsx>{`
      p {
        padding-bottom: 20px;
      }
    `}</style>
  </>
);

GamePage.getInitialProps = () => {
  return { email: `job-${nanoid('1234567890abcdef', 10)}@mynameisyuri.com` };
};

export default GamePage;
