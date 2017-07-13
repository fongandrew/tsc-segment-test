
// This should build

export function test() {
  analytics.identify("my-uid");
  analytics.track("MY_EVENT", { prop: 123 });
}

// Interface should be visible too
declare const notAnalytics: SegmentAnalytics.AnalyticsJS;
notAnalytics.page("SOME_PAGE");

