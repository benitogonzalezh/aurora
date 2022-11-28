import DAppCard from "./dAppCard";

export default function DAppsGrid({ dApps }) {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 md:gap-4 gap-2">
      {dApps &&
        dApps.map((dApp, index) => {
          return (
            <DAppCard
              key={index}
              description={dApp.description}
              grant={dApp.grant}
              logo={dApp.logo.url}
              name={dApp.name}
              status={dApp.status}
            />
          );
        })}
    </div>
  );
}
