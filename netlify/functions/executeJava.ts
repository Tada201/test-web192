import { Handler } from "@netlify/functions";
import { executeJavaCode } from "../../server/Java/executeJava";

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing request body" }),
    };
  }

  try {
    const { code } = JSON.parse(event.body);
    if (typeof code !== "string") {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid code in request body" }),
      };
    }

    const result = await executeJavaCode(code);

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error", details: error instanceof Error ? error.message : String(error) }),
    };
  }
};
