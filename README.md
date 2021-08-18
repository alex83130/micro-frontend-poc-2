# Shared App Shell, State, Routing and Components Example

This example demos a basic host application loading remote component.

![](./micro-frontend-structure.png)

- `shell` is the App Shell
- `app1` - Standalone application
- `app2` - Standalone application
- `app3` - standalone application

# Running Demo

- `npm install`
- `npm run start`

This will build all the apps `shell`, `app1`, `app2`, `app3` on different ports as shown below

- [localhost:3000](http://localhost:3000/) (HOST) - `shell - client (Main app)`
- [localhost:3001](http://localhost:3001/) (HOST) - `shell - server`
- [localhost:3002](http://localhost:3002/) (STANDALONE REMOTE) - `app1 - client`
- [localhost:3003](http://localhost:3003/) (STANDALONE REMOTE) - `app1 - server`
- [localhost:3004](http://localhost:3004/) (STANDALONE REMOTE) - `app2 - client`
- [localhost:3005](http://localhost:3005/) (STANDALONE REMOTE) - `app2 - server`
- [localhost:3006](http://localhost:3006/) (STANDALONE REMOTE) - `app3 - client`
- [localhost:3007](http://localhost:3007/) (STANDALONE REMOTE) - `app3 - server`
