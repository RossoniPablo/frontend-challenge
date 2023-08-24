"use client"
import { QueryClient, QueryClientProvider } from 'react-query'
import { FilterBar } from './components/filter-bar'

import styles from './page.module.css'
import { ProductsList } from './components/products-list'

export default function Home() {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
        <main className={styles.main}>
          <FilterBar/>
          <ProductsList/>
        </main>
    </QueryClientProvider>
  )
}
