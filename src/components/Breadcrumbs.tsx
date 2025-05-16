'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

export function Breadcrumbs() {
  const pathname = usePathname()
  const paths = pathname?.split('/').filter(path => path) ?? []
  
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
        </li>
        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join('/')}`
          const isLast = index === paths.length - 1
          const title = path.split('-').map(word => 
            word.toLowerCase() === 'gsa' 
              ? 'GSA'
              : word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ')
          
          return (
            <li key={path} className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 mx-1" />
              {isLast ? (
                <span className="text-gray-900 font-medium">{title}</span>
              ) : (
                <Link href={href} className="hover:text-blue-600">
                  {title}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
} 