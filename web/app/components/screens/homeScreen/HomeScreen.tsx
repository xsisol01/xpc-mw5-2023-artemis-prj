import {FC, memo} from 'react'

//import Container from '@/app/components/layout/container/Container'
import HeaderLayout from '@/app/components/layout/headerLayout/HeaderLayout'
import FilterProduct from '@/app/components/ui/filterProduct/FilterProduct'
import Products from '@/app/components/ui/products/Products'
import styles from './homeScreen.module.scss'
import { Container } from '@mui/material'

const HomeScreen: FC = memo(() => {
    return (
        <div className={styles.homeScreen}>
            <HeaderLayout contentPage='home'>
                <Container sx={{mt: 4}}>
                    <div className={styles.homeScreen__content}>
                        <FilterProduct />
                        <Products />
                    </div>
                </Container>
            </HeaderLayout>
        </div>
    )
})

export default HomeScreen