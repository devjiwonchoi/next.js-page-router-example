import Link from 'next/link'
export default function MiddlewareMatcherExampleIndex() {
  return (
    <div>
      <h1>This is the Middleware Matcher Example Page.</h1>
      <Link
        as='/middleware-matcher-segment'
        href='/middleware-matcher-example/redirect-to-root-from-link'
      >
        Click This!
      </Link>
      {/* <Link href='/'>Click This!</Link> */}
    </div>
  )
}
