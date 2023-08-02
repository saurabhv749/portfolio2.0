import { createClient } from "contentful";

const useContentful = () => {
  let contentTypes = {
    techs: "technicalInfo",
    mini: "minorProjects",
    major: "majorProjects",
  };
  const client = createClient({
    accessToken: "KZYpz4H42jTy5yvNaNKoDuQ6YeTDUIt42lOPflkKtOg",
    space: "qva1aen4xv8j",
    host: "cdn.contentful.com",
  });

  async function getMajorProjects() {
    try {
      let res = await client.getEntries({
        content_type: contentTypes.major,
        order: "sys.createdAt",
      });

      const filtered = res.items.map((t) => ({
        ...t.fields,
        tags: t.fields.tags.vals,
        poster: t.fields.poster.fields.file.url,
      }));
      return filtered;
    } catch (error) {
      console.log("there is an error fetching major projects \n", error);
    }
  }
  async function getMiniProjects() {
    try {
      let res = await client.getEntries({
        content_type: contentTypes.mini,
        order: "sys.createdAt",
      });
      const filtered = res.items.map((t) => ({
        ...t.fields,
        tags: t.fields.tags.vals,
      }));
      return filtered;
    } catch (error) {
      console.log("there is an error fetching mini projects \n", error);
    }
  }
  async function getTechnicalExperties() {
    try {
      const res = await client.getEntries({
        content_type: contentTypes.techs,
        // skip: 100,
        // limit: 200,
        order: "sys.createdAt",
      });

      const filtered = res.items.map((t) => ({
        ...t.fields,
        logo: "https:" + t.fields.logo.fields.file.url,
      }));
      return filtered;
    } catch (error) {
      console.log("there is an error fetching technical info \n", error);
    }
  }

  return { getMajorProjects, getMiniProjects, getTechnicalExperties };
};

export default useContentful;
