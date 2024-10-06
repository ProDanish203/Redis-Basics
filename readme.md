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
- Streams (xadd, xread, xlen)
  - Append-only log structure
  - Used for messaging and event sourcing
- Geospatial (geoadd, geodist, georadius)
  - Store and query geospatial data

### Key Commands

- EXPIRE: Set a timeout on key
- DEL: Delete a key
- EXISTS: Check if a key exists
- KEYS: Find all keys matching a pattern
- FLUSHALL: Remove all keys from all databases

### Pub/Sub

- PUBLISH: Send a message to a channel
- SUBSCRIBE: Listen for messages on a channel

### Transactions

- MULTI: Start a transaction block
- EXEC: Execute all commands in a transaction
- DISCARD: Discard a transaction

### Persistence

- RDB: Point-in-time snapshots
- AOF: Append-only file for durability

### Replication

- REPLICAOF: Make the server a replica of another instance

### Cluster

- CLUSTER INFO: Provides information about the cluster state

### Security

- AUTH: Authenticate to the server
- ACL: Access Control Lists for fine-grained permissions

Remember to consult the official Redis documentation for more detailed information and best practices.
