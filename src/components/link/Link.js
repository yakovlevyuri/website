// @flow

import React from 'react';

type Props = {
  url: string,
  title: string,
  label: string,
  newWindow?: boolean,
  className?: string,
  onClick?: () => void,
};

const Link = ({ url, title, label, newWindow, className, onClick }: Props) => {
  return (
    <a
      href={url}
      title={title}
      {...(newWindow ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...(className ? { className } : {})}
      onClick={onClick}
    >
      {label}
    </a>
  );
};

export default Link;
