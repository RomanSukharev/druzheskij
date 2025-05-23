export default (target: string, ...args: any) => {
  var config = useRuntimeConfig();
  //@ts-ignore
  window.ym && ym(config.public.YM_COUNTER_ID, "reachGoal", target, ...args);
};
