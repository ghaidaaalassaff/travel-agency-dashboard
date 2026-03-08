import { type RouteConfig, route, layout } from "@react-router/dev/routes";

export default [
    route('sign-in', 'routes/root/sign-in.tsx'),
    layout("routes/Admin/admin-layout.tsx", [
        route("dashboard", "routes/Admin/dashboard.tsx"),
        route("all-users", "routes/Admin/all-users.tsx"),
        route("trips", "routes/Admin/trips.tsx"),
        route("trips/create", "routes/Admin/create-trip.tsx"),
    ]),
    route("/sentry-example-page", "routes/sentry-example-page.tsx"),
    route("/api/sentry-example-api", "routes/api.sentry-example-api.ts")
] satisfies RouteConfig;