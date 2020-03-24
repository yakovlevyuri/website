import { NextPage } from 'next';

const InvoicePage: NextPage = () => (
  <>
    <div className="card">
      <p>
        <strong>Yuriy Yakovlev </strong>
      </p>
      <p>
        Company reg. number (IČO): <strong>076 05 901</strong>
      </p>
      <p>
        VAT Reg No (DIČ): <strong>CZ8911274350</strong>
      </p>
    </div>

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
    `}</style>

    <style jsx>{`
      p {
        padding-bottom: 20px;
        font-size: 1.1rem;
      }

      p:last-child {
        padding-bottom: 0;
      }

      .card {
        border: 1px solid #000;
        padding: 15px;
      }
    `}</style>
  </>
);

export default InvoicePage;
