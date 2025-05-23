/*
    Сохраняем utm метки в localStorage.

    Если URL Query Parameters содежит один из ключей, который указан в utm_list (плевать на регистр),
    то записываем/перезаписываем эти метки в localStorage
*/

export var useUtm = () => {
  var route = useRoute();
  var query_params = route.query;
  var utm_list = [
    "utm_campaign",
    "utm_content",
    "utm_medium",
    "utm_source",
    "utm_term",
  ];

  var user_utm_list: any = {};
  for (var key in query_params) {
    if (utm_list.includes(key.toLocaleLowerCase()) && query_params[key]) {
      user_utm_list[key] = query_params[key];
    }
  }

  if (Object.keys(user_utm_list).length) {
    localStorage.setItem("utm", JSON.stringify(user_utm_list));
  }
};
