import { NextPage } from 'next';

import Link from '@components/Link';
import { LI, UL } from '@components/NumbersList';

const GamePage: NextPage = () => (
  <>
    <p>
      Hi! My name is Yuri and I’m a JavaScript Developer with more than{' '}
      {new Date().getFullYear() - 2013} years of experience in the field.
    </p>
    <p>
      Probably you were trying to offer me an interesting job opportunity and
      most likely I redirected you to this page.
    </p>
    <p>
      First of all, I would like to thank you for your interest in me as a
      candidate, I appreciate that. I do. Secondly, I respect your time as much
      as I respect mine so please let’s spend it as productive as possible.
    </p>
    <p>
      I get literally tons of HR messages on{' '}
      <Link
        url="https://cz.linkedin.com/in/yakovlevyuri"
        title="My LinkedIn"
        label="LinkedIn"
        newWindow
      />{' '}
      and 99% of them are irrelevant. So I came up with the idea of how to avoid
      that.
    </p>
    <p>
      <strong>
        All I expect you to do is to meet only 5 criteria before you’re going to
        offer me a new role:
      </strong>
    </p>
    <UL>
      <LI>
        <span>
          I’m crazy in ❤️ with <em>JavaScript/TypeScript</em> and I’m not going
          to be a Java/C#/Python/{'${anyOtherLanguage}'} hero for you or someone
          else.
        </span>
      </LI>
      <LI>
        <span>
          Making Java/C#/Python/{'${anyOtherLanguage}'} RESTful APIs? No God,
          please no. I prefer <em>GraphQL + Node.js</em> bundle.
        </span>
      </LI>
      <LI>
        <span>
          What about the client-side? I like <em>Reactjs</em>.
        </span>
      </LI>
      <LI>
        <span>
          I am also a huge fan of <em>Open Source</em> and I expect from my
          future employer to share the same views as well.
        </span>
      </LI>
      <LI>
        <span>
          I work as an independent contractor only (see info in the footer). My
          rates are starting from <em>300 EUR/MD</em>.
        </span>
      </LI>
      <LI>
        <span className="optional">optional but preferable</span>
        <span>
          I'm slowly transitioning from developer to a team lead. I know how to
          mentor juniors, lead the projects and make successful products.
        </span>
      </LI>
      <LI>
        <span className="optional">optional but preferable</span>
        <span>The company can do 70-100% remote.</span>
      </LI>
    </UL>

    {/* 
    <LI>
      <span>
        Не соответствуете, но планируете -- я с удовольствием помогу построить
        новую систему на новых технологиях.
      </span>
    </LI> */}

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
      <Link
        url="mailto:job@mynameisyuri.com"
        title="My Email"
        label="job@mynameisyuri.com"
      />{' '}
      or send me a message on{' '}
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

      .optional {
        font-size: 0.75rem;
        font-style: italic;
        margin-right: 0.75rem;
      }
    `}</style>

    <style jsx>{`
      p {
        padding-bottom: 20px;
      }
    `}</style>
  </>
);

export default GamePage;
