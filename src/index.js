let useDjsMaster = false;
try {
  const DjsVersion = require("discord.js").version;
  if (DjsVersion.split(".").shift() === "12") useDjsMaster = true;
} catch (e) {
  useDjsMaster = false;
}
const { post } = require("axios");

class abcApi {
  constructor(token, id) {
    if (!token) throw new Error("Unknown Token: Token Missing");
    if (!id) throw new Error("Unknown ID: ID Missing");
    if (typeof token !== "string")
      throw new SyntaxError("Invalid ID: ID must be a String");

    if (typeof id !== "string")
      throw new SyntaxError("Invalid ID: ID must be a String");
    this.token = token;
    this.id = id;
  }
  async postStats(client) {
    if (!client) throw new Error("Unknown Client: Client Missing");
    try {
      const information = {
        member_count: useDjsMaster
          ? client.users.cache.size
            ? client.users.cache.size
            : 0
          : client.users.size
          ? client.users.size
          : 0,
        server_count: useDjsMaster
          ? client.guilds.cache.size
            ? client.guilds.cache.size
            : 0
          : client.guilds.size
          ? client.guilds.size
          : 0,
        shard_count: client.shard
          ? client.shard.count
          : client.shards
          ? client.shards.size
          : 0
      };

      const content = JSON.stringify(information, null);
      let data = await post(
        `https://arcane-botcenter.xyz/api/${this.id}/stats`,
        information,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.token
          }
        }
      );

      return data;
    } catch (err) {
      throw new Error(err);
    }
  }
}
module.exports = abcApi
