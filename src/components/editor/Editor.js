// @flow

import React from 'react';

import Highlight from '../Highlight';
import { data } from '../../data';

// type Props = {};

const Editor = () => (
  <div>
    {/*<div className="codeblock-header" />*/}
    <div className="codeblock">
      <Highlight code={data} />
    </div>

    <style jsx>{`
      .codeblock-header {
        height: 30px;
        display: block;
        width: 100%;
        position: relative;
        background: #fff;
        border-radius: 6px 6px 0 0;

        &:after {
          content: '';
          width: 12px;
          height: 12px;
          position: absolute;
          border-radius: 50%;
          top: 10px;
          left: 8px;
          background: rgba(0, 0, 0, 0.07);
          box-shadow: 18px 0 0 rgba(0, 0, 0, 0.07), 36px 0 0 rgba(0, 0, 0, 0.07);
        }
      }

      .codeblock {
        box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        position: relative;
        // max-width: calc(100vw - 40px);
        max-height: 500px;
        overflow-y: scroll;

        &:before {
          content: '';
          height: 30px;
          display: block;
          width: 100%;
          position: relative;
          background: ghostwhite;
          border-radius: 6px 6px 0 0;
        }

        &:after {
          content: '';
          width: 12px;
          height: 12px;
          position: absolute;
          border-radius: 50%;
          top: 10px;
          left: 8px;
          background: rgba(0, 0, 0, 0.1);
          box-shadow: 18px 0 0 rgba(0, 0, 0, 0.1), 36px 0 0 rgba(0, 0, 0, 0.1);
        }
      }
    `}</style>
  </div>
);

export default Editor;
