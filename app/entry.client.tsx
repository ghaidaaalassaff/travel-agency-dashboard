import * as Sentry from "@sentry/react-router";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

const tracing = Sentry.reactRouterTracingIntegration({ useInstrumentationAPI: true });

Sentry.init({
  dsn: "https://f9e3ca6c7de40849b6735d81ac0e0605@o4510939957952512.ingest.de.sentry.io/4510939965358160",
  sendDefaultPii: true,
  integrations: [tracing, Sentry.replayIntegration()],
  enableLogs: true,
  tracesSampleRate: 1.0,
  tracePropagationTargets: [/^\//, /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter unstable_instrumentations={[tracing.clientInstrumentation]} />
    </StrictMode>,
  );
});