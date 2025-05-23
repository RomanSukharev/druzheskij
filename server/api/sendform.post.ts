export default defineEventHandler(async (event) => {
  var body = await readBody(event);

  var requestData = new FormData();
  for (var param in body) {
    requestData.set(param, body[param]);
  }

  var cookies = parseCookies(event);

  var cookie_string = Object.entries(cookies).reduce(
    (a, [key, value]) => a + `${key}=${value};`,
    ""
  );

  requestData.set("COOKIES", cookie_string);

  await fetch(
    "https://api.lead-router.72dom.online/api/v1/connector/druzheskiy/d7c71d5a-497f-4c0c-a7e1-25efa5b8aa4e",
    {
      method: "post",
      body: requestData,
    }
  );

  return { response: "success" };
});
