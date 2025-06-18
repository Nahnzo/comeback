import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

const AppRouter = () => (
  //   <Suspense fallback={<PageLoader />}>
  <Routes>
    {Object.values(routeConfig).map(({ element, path }) => (
      <Route path={path} key={path} element={<div className="page-wrapper">{element}</div>} />
    ))}
  </Routes>
  //   </Suspense>
)

export default AppRouter
