const setHeroBg = (url: string | undefined) => {
  if (!url) {
    return {
      heroBg: "https://ik.imagekit.io/dcpowg7vx/Shtagoneba/hero/home.png",
    };
  }

  const baseUrl = "https://ik.imagekit.io/dcpowg7vx/Shtagoneba/hero/";

  const urlMappings: Record<string, string> = {
    "": "home.png",
    "/chven-shesakheb": "blogs.png",
    "/servisebi/sabakalavro-nashromi": "bachelor.png",
    "/servisebi/samagistro-nashromi": "master.png",
    "/servisebi/referati": "abstract.png",
    "/servisebi/prezentatsia": "presentation.png",
    "/servisebi/ese": "essay.png",
  };

  const heroBg = urlMappings[url]
    ? `${baseUrl}${urlMappings[url]}`
    : "https://ik.imagekit.io/dcpowg7vx/Shtagoneba/hero/home.png";

  return { heroBg };
};

export default setHeroBg;
