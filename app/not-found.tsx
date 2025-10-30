import { ErrorPage } from '@/components/ui/error-page'

export default function NotFound() {
  return (
    <ErrorPage
      errorCode={404}
      title='Page not Found'
      message="We couldn't find the page you're looking for, but don't worry — you can head back home safely."
    />
  )
}
