// @flow

import React, { Component } from 'react';

import Link from '../post/Link';
import { UL, LI } from '../post/NumbersList';
import { logEvent } from '../../utils/analytics';

class HrGame extends Component<{}> {
  render() {
    return (
      <div>
        <p>Hi! My name is Yuri and I’m a Fullstack JavaScript Developer.</p>
        <p>
          Probably you were trying to offer me an interesting job opportunity
          and most likely I redirected you to this page.
        </p>
        <p>
          First of all I would like to thank you for your interest in me as a
          candidate, I appreciate that, I really do. Secondly I respect your
          time as much as I respect mine so please let’s spend it as productive
          as possible.
        </p>
        <p>
          I get literally tons of HR messages on{' '}
          <Link
            url="https://cz.linkedin.com/in/yakovlevyuri"
            title="LinkedIn"
            label="LinkedIn"
            newWindow
            onClick={() =>
              logEvent('Link', 'Clicked', 'LinkedIn from GamePage')
            }
          />{' '}
          and 99% of them are irrelevant. So I came up with the idea how to
          avoid that.
        </p>
        <p>
          <strong>
            All I expect you to do is to meet only 4 criteria before you’re
            going to offer me a new role:
          </strong>
        </p>
        <UL>
          <LI>
            I’m crazy in ❤️ with <em>JavaScript</em> and I’m not going to be a
            Java/C#/Python/whatsoever hero for you or someone else.
          </LI>
          <LI>
            Still using RESTful API? No God, please no. I prefer{' '}
            <em>GraphQL + Node.js</em> bundle.
          </LI>
          <LI>
            What about client side? I like <em>React</em> and <em>Vue</em>.
          </LI>
          <LI>
            I am also a huge fan of <em>Open Source</em> and I expect from my
            future employer to share the same views as well.
          </LI>
        </UL>
        <p>
          Checked every point above carefully and pretty sure that{' '}
          <em>I’m the guy</em> and <em>you are that 1%</em>? Here is my{' '}
          <Link
            url="/static/cv/yakovlev-yuri.pdf"
            title="My Résumé in JSON response"
            label="CV"
            newWindow
            onClick={() => logEvent('Link', 'Clicked', 'JSON CV from GamePage')}
          />
          . Please drop me an{' '}
          <Link
            url="mailto:hr@mynameisyuri.com"
            title="Drop me an email"
            label="email"
            onClick={() =>
              logEvent('Link', 'Clicked', 'Contact via email from GamePage')
            }
          />{' '}
          or{' '}
          <Link
            url="https://t.me/yyakovlev"
            title="I use telegram"
            label="telegram message"
            newWindow
            onClick={() =>
              logEvent('Link', 'Clicked', 'Contact via telegram from GamePage')
            }
          />
        </p>
        <style jsx global>{`
          .wrapper {
            @media screen and (min-width: 820px) {
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
      </div>
    );
  }
}

export default HrGame;
