# @rachel-mp4/lrcproto

This repository defines the LRC protocol message schema using Protocol Buffers and provides generated code for both **TypeScript** and **Go**.


## Generation
these may work idrk

### Typescript
```
npx protoc \
  --ts_out gen/ts \
  --proto_path . \
  lrc.proto
```

### Go
```
protoc --go_out=gen/go --go_opt=paths=source_relative lrc.proto
```

## Installation

### TypeScript

```bash
npm install @rachel-mp4/lrcproto
```

### Go

```go
import "github.com/rachel.mp4/lrcproto/gen/go"
```

## Schema

When implemented in a websocket, LRC communication occurs by sending **Events**, which in LRC 1.0 can be of 14 types. Their semantics may differ slightly if they are sent from client -> server or server -> client

```
Ping   #Requests a Pong

Pong   #Response to a Ping

Init   #Initializes my message (client -> server)
       #or declares that a message was initialized (server -> client)
Pub    #Publishes my message (client -> server)
       #or declares that a message was published (server -> client)
Insert #Inserts a string at a given byte offset 

Delete #Deletes the bytes between two offsets

Mute   #Requests the server stop relaying events from a user

Unmute #Requests the server start relaying events from a user

Set    #Sets my metadata

Get    #Requests the included fields from the server (client -> server)
       #or provides it to the client (server -> client)
Kick   #Requests to kick a user

Hug    #Hugs a user

Ban    #Requests to ban a user

Unban  #Requests to unban a user
```

The LRC protocol does not inherently determine how Mute, Unmute, Kick, Ban and Unban should be implemented. ExternalID and Secret fields allow for some form of verification of identity, which can occur outside of the protocol.

## License
MIT
