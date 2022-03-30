import { Probot } from "probot";

export = (app: Probot) => {
  app.log.info("Bot loading");  

  app.on("pull_request_review", async (context) => {
    context.log.info("PR Review");
    let data = context.payload;
    // Check to see that it's submitted, approved, and that the id is leon
    if (data.action == "submitted" && data.review.state == "approved" && data.sender.id == 67800009) {
      context.log("Approved submission");
      // Do some label stuff
    }
    // context.log.info(context);
  });
};
