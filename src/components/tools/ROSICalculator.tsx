"use client"

import ROSIForm from '@/components/tools/ROSIForm'
import ROSIResults from '@/components/tools/ROSIResults'
import ROSIScenarios from '@/components/tools/ROSIScenarios'

export default function ROSICalculator() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-8">
      <ROSIForm />
      <ROSIResults />
      <ROSIScenarios />
    </div>
  )
}

