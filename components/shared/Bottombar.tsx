'use client'
import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'

function Bottombar() {
  const pathname = usePathname()

  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route

          return (
            <Link
              href={item.route}
              key={item.label}
              className={`bottombar_link ${isActive && 'bg-primary-500'}`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
              />

              <p className="text-sbudtle-medium text-light-1 max-sm:hidden">{item.label.split(/\s+/)[0]}</p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Bottombar
