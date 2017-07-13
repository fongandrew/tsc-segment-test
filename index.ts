
// This should build

export function test() {
  analytics.identify("my-uid");
  analytics.track("MY_EVENT", { prop: 123 });
}
