// @flow

import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize(process.env.GA_TRACKING_ID);
};

export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (
  category: string = '',
  action: string = '',
  label: string = '',
) => {
  if (window.GA_INITIALIZED && category && action) {
    console.log(
      `Logging event with category "${category}", action "${action}" and label "${label}"`,
    );
    ReactGA.event({ category, action, label });
  }
};

export const logException = (
  description: string = '',
  fatal: boolean = false,
) => {
  if (window.GA_INITIALIZED && description) {
    ReactGA.exception({ description, fatal });
  }
};
