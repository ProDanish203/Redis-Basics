# Redis

### Installation

```
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest

# Redis-stack will now be available on port 8001

# Directly interact with the redis cli running in docker
docker exec -it <CONTAINER_ID> bash
redis-cli
```

### Getting Started

```
# Redis CLI
set key value   // OK
get key         // Value
```

### Data Types in Redis

- Strings (set, get)
- Lists (lpush, lpop, rpush, rpop) -> can be used as both stack/queue
  - L -> Insert, R -> Remove --> Queue.
  - L -> Insert, L -> Remove --> Stack
- Sets (sadd, srem, spop, smembers, sismember, scard)
  - Does not allow duplicate values
- Hashes (hset, hget, hgetall, hmget)
  - Key: value pairs
- Sorted Set (zadd, zrange, zrank)
  - Works as the priority queue