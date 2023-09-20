import React from 'react';
import Container from './Container';

export default function Architecture() {
  return (
    <Container className="mt-[7rem] flex flex-col items-center sm:mt-[7rem]">
      {/* <h2 className="mb-0 inline-block bg-gradient-to-br from-rose-600 from-15% via-purple-600 via-60% to-indigo-700 to-90% bg-clip-text text-center font-display text-2xl font-semibold tracking-tight text-transparent sm:text-4xl"> */}
      <h2 className="mb-0 inline-block text-center font-display text-2xl font-semibold tracking-tight sm:text-4xl">
        Powered by Kubernetes on GKE
      </h2>
      <h3 className="mt-1 max-w-prose text-center font-display text-sm font-medium text-stone-700 dark:text-stone-100 sm:mt-4 sm:text-xl">
        Symphony is a cloud-native solution built on Google Cloud Platform using GKE, Cloud SQL, Cloud Storage, Prometheus, and Grafana.
      </h3>
      <div className="mt-2 sm:mt-8">
        <img
          src="/img/architecture.png"
          className="z-20 block w-full max-w-[1500px] h-auto dark:hidden"
        />
          <img
          src="/img/architecture-dark.png"
          className="z-20 block w-full max-w-[1500px] h-auto hidden dark:block"
        />
      </div>
    </Container>
  );
}
