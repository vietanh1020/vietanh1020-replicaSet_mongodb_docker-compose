rsconf = {
  _id: "dbrs",
  members: [
    {
      _id: 0,
      host: "mongo1:27017",
      priority: 3,
    },
    {
      _id: 1,
      host: "mongo2:27018",
      priority: 2,
    },
    {
      _id: 2,
      host: "mongo3:27019",
      priority: 1,
    },
  ],
};

rs.initiate(rsconf);
