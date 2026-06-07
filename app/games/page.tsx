import type { Metadata } from "next";
import GamesContent from "./GamesContent";

export const metadata: Metadata = {
  title: "Cannabis Arcade Games — High Coastal Cannabis | Mississauga",
  description: "Play free online cannabis-themed games like Flappy Bud and Snake Munchies while you wait at High Coastal Cannabis.",
  alternates: {
    canonical: "https://highcoastalcannabis.com/games",
  },
};

export default function GamesPage() {
  return <GamesContent />;
}
