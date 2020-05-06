const data = [
  {
    id: 0,
    href: 'https://t.me/yyakovlev',
    title: '',
    label: 'Telegram',
    newWindow: true,
    relMe: true,
  },
  {
    id: 1,
    href: 'https://twitter.com/yakovlevyuri',
    title: '',
    label: 'Twitter',
    newWindow: true,
    relMe: true,
  },
  {
    id: 2,
    href: 'https://github.com/yakovlevyuri',
    title: '',
    label: 'GitHub',
    newWindow: true,
    relMe: true,
  },
  {
    id: 3,
    href: 'https://www.linkedin.com/in/yakovlevyuri',
    title: '',
    label: 'LinkedIn',
    newWindow: true,
    relMe: true,
  },
  {
    id: 4,
    href: 'https://keybase.io/yyakovlev',
    title: '',
    label: 'GPG 8769 80E1 A2BC 362C',
    newWindow: true,
    relMe: true,
  },
];

const Footer = () => (
  <>
    <div className="footer">
      {/* <ul>
        {data.map(({ id, href, title, label }) => (
          <li key={id}>
            <a href={href} title={title}>
              {label}
            </a>
          </li>
        ))}
      </ul> */}

      <p>{new Date().getFullYear()} Yuri Yakovlev</p>
      <p>Company registration number (IČO): 076 05 901</p>
      <p>VAT Reg No (DIČ): CZ8911274350</p>
      <p>Czechia, Prague</p>
      <p>The website works until the last visitor leaves.</p>
    </div>

    <style jsx>{`
      .footer {
        padding: 10px;
        grid-area: footer;
      }

      p {
        font-size: 0.7em;
        text-align: center;
      }
    `}</style>
  </>
);

export default Footer;
