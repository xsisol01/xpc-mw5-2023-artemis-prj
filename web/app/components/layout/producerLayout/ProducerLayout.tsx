import { FC, memo, useState, ReactNode } from "react";

import { IProducer } from "@/app/store/product/producer.type";

import styles from './producerLayout.module.scss'
import ProducerItem from "@/app/components/ui/producerItem/ProducerItem";
import Link from "next/link";
import Preloader from "../../shared/preloader/Preloader";
import { useGetAllProducers } from "@/app/hooks/producer/useGetAllProducers";

interface IProps{
  children?: ReactNode
}

const ProducerLayout: FC<IProps> = memo(({ children }) => {
  
  const { producers, isLoading} = useGetAllProducers()

  if (!producers) {
    return <Preloader />
  }

  return (
    <div className={styles.producerLayout}>
      <ul className={styles.producerLayout__items}>
        {producers?.map(producer => (
          <li key={producer.id}>
            <Link
              href='/producer/[pid]'
              as={`/producer/${producer.id}`}
            >
              <ProducerItem
                id={producer.id}
                name={producer.name}
                imageUrl={producer.imageUrl}
              />
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.producerLayout__content}>
        {children}
      </div>
    </div>
  )
})

export default ProducerLayout