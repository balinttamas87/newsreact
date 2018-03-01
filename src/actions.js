const apiKey = "79ee7ebc00c5476b88e8be418cb20a1c";

const entryPointURL = "https://newsapi.org";

const endPoints = {
    main: {
        topHeadlines: "/v2/top-headlines",
        everything: "/v2/everything"
    },
    minor: {
        sources: "/v2/sources"
    }
};

const url = entryPointURL + endPoints.main.topHeadlines + "?apiKey=" + apiKey + "&country=gb";

const req = new Request(url);

export const getHeadlines = () => (
    fetch(req)
        .then(res => res.json())
)