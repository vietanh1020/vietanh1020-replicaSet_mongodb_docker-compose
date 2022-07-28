# docker-mongodb-replica-set

Auto setup mongodb replica set by docker compose

Add the following config to `/etc/hosts`

```
127.0.0.1	mongo1
127.0.0.1	mongo2
127.0.0.1	mongo3
```

Run docker compose

```bash
$ docker-compose up
```

Access http://localhost:8081/ to open Mongo Express

Connect to mongodb by URL: `mongodb://mongodb1:27017,mongodb2:27018,mongodb3:27019/?replicaSet=dbrs`
