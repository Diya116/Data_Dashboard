function NotFoundPage() {  
  return (
    <div className='min-h-screen bg-background flex items-center justify-center p-6'>
      <div className="bg-card border border-border rounded-lg p-8 max-w-md text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-card-foreground mb-2">Page Not Found</h2>
        <p className="text-muted-foreground mb-6">
          The page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  )
}

export default NotFoundPage