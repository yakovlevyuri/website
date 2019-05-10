interface Props {
  children?: JSX.Element[] | JSX.Element;
}

export const UL = ({ children }: Props) => (
  <ul>
    {children}

    <style jsx>{`
      ul {
        margin: 0 0 20px 0;
        padding: 0;
        list-style: inside decimal;
      }
    `}</style>
  </ul>
);

export const LI = ({ children }: Props) => (
  <li>
    {children}

    <style jsx>{`
      li {
        margin-bottom: 5px;
        line-height: 24px;
      }
    `}</style>
  </li>
);
