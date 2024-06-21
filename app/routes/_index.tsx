import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [{ title: "Remix Jokes" }];
};

export default function Index() {
  return <h1 className="text-3xl">remix jokes</h1>;
}
