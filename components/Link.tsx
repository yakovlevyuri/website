import { FC } from 'react';

interface Props {
  url: string;
  title: string;
  label: string;
  newWindow?: boolean;
  className?: string;
  onClick?: () => void;
}

const Link: FC<Props> = ({
  url,
  title,
  label,
  newWindow,
  className = '',
  onClick,
}) => (
  <>
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
  </>
);

export default Link;
