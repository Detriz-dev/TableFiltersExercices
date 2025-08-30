interface CompanyData {
  provider: string;
  region: string;
  type: string;
}


const CompaniesData: CompanyData[] = [
    { provider: "Google", region: "Europe", type: "individual" },
    { provider: "Amazon", region: "North America", type: "group" },
    { provider: "Microsoft", region: "Asia", type: "individual" },
    { provider: "Google", region: "Africa", type: "group" },
    { provider: "Amazon", region: "South America", type: "individual" },
    { provider: "Microsoft", region: "Europe", type: "group" },
    { provider: "Google", region: "North America", type: "individual" },
    { provider: "Amazon", region: "Asia", type: "group" },
    { provider: "Microsoft", region: "Africa", type: "individual" },
    { provider: "Google", region: "South America", type: "group" },
    { provider: "Amazon", region: "Europe", type: "individual" },
    { provider: "Microsoft", region: "North America", type: "group" },
    { provider: "Google", region: "Asia", type: "individual" },
    { provider: "Amazon", region: "Africa", type: "group" },
    { provider: "Microsoft", region: "South America", type: "individual" },
    { provider: "Google", region: "Europe", type: "group" },
    { provider: "Amazon", region: "North America", type: "individual" },
    { provider: "Microsoft", region: "Asia", type: "group" },
    { provider: "Google", region: "Africa", type: "individual" },
    { provider: "Amazon", region: "South America", type: "group" },
    { provider: "Microsoft", region: "Europe", type: "individual" },
    { provider: "Google", region: "North America", type: "group" },
    { provider: "Amazon", region: "Asia", type: "individual" },
    { provider: "Microsoft", region: "Africa", type: "group" },
    { provider: "Google", region: "South America", type: "individual" },
    { provider: "Amazon", region: "Europe", type: "group" },
    { provider: "Microsoft", region: "North America", type: "individual" },
    { provider: "Google", region: "Asia", type: "group" },
    { provider: "Amazon", region: "Africa", type: "individual" },
    { provider: "Microsoft", region: "South America", type: "group" }
  ];

  export default CompaniesData;
  export type { CompanyData };