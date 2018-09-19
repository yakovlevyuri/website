import React, { Fragment } from 'react';

interface Props {
  url: string;
  title: string;
  label: string;
  newWindow?: boolean;
  className?: string;
  onClick?: () => void;
}

const Link = ({
  url,
  title,
  label,
  newWindow,
  className = '',
  onClick,
}: Props) => {
  return (
    <Fragment>
      <a
        href={url}
        title={title}
        {...(newWindow ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={`link ${className}`}
        onClick={onClick}
      >
        {label}
      </a>

      <style jsx>{`
        a.link {
          color: #22bad9;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
      `}</style>
    </Fragment>
  );
};

export default Link;
