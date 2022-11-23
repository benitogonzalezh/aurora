import axios from "axios";
import TopMenuBanner from "./home/components/topMenuBanner";
import Header from "./home/components/header";
import HeroSection from "./home/components/heroSection";
import DAppsGrid from "./home/components/dAppsGrid";
import SpaceBackground from "./home/components/spaceBackground";
import { useState } from "react";

async function onSearch(search = "") {
  const graphqlQuery = {
    query: `query{dAppsCollection(where: {name_contains: "${search}"}, order: [name_ASC]){items{name description logo{url} status grant}}}`,
  };
  const params = {
    url: "https://graphql.contentful.com/content/v1/spaces/ewlterdo2cdv/environments/master",
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer lNaZXdzzEFw3g-s3KmHT2Ened_hDcirmDkK7D0bTJno`,
    },
    data: graphqlQuery,
  };
  const res = await axios(params)
    .then((r) => r.data.data.dAppsCollection.items)
    .catch((e) => e);
  return res;
}

export default function Home({ dAppsProps }) {
  const [dApps, setDApps] = useState(dAppsProps);

  async function handleSearch(search) {
    const res = await onSearch(search);
    setDApps(res);
  }
  return (
    <div>
      <SpaceBackground />
      <TopMenuBanner />
      <Header />
      <main className="flex flex-col flex-1 w-full mb-10">
        <div className="container w-full max-w-6xl px-5 md:px-10 mx-auto">
          <HeroSection onSearch={handleSearch} />
          <DAppsGrid dApps={dApps} />
        </div>
      </main>
    </div>
  );
}
export async function getStaticProps(context) {
  const search = await onSearch();
  return {
    props: {
      dAppsProps: search,
    }, // will be passed to the page component as props
  };
}
