const Footer = () => (
  <>
    <div className="footer">
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
