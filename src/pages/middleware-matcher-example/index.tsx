import Link from 'next/link'
export default function MiddlewareMatcherExampleIndex() {
  return (
    <div>
      <h1>This is the Middleware Matcher Example Page.</h1>
      <div
        style={{
          marginBottom: '2rem',
        }}
      >
        <Link
          as='/middleware-matcher-segment'
          href='/middleware-matcher-example/redirect-to-root-from-link'
        >
          <h2>Go to `Redirect to root from link`</h2>
        </Link>
        <p>
          http://localhost:3000/middleware-matcher-example/redirect-to-root-from-link
        </p>
      </div>
      <div>
        <Link href='/middleware-matcher-example/redirect-to-root-by-middleware'>
          <h2>Go to `Redirect to root by middleware`</h2>
        </Link>
        <p>
          http://localhost:3000/middleware-matcher-example/redirect-to-root-by-middleware
        </p>
      </div>
    </div>
  )
}
