import React from 'react'
import Cards from './Cards'


const RecentProjects = () => {
  return (
    <div>

<div className="py-20 bg-center flex items-center justify-center">
  <h1 className="heading text-white">
    My Recent
    <span className="text-primary">  Projects</span>
  </h1>
</div>

    <Cards />

    </div>
  )
}

export default RecentProjects
