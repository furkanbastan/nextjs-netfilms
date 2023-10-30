import Skeleton from '../skeleton'
import styles from './styles.module.css'

function CategoriesLoading() {
    return (
        <div className={styles.categories}>
            {
                Array(5)
                    .fill(null)
                    .map((_, index) => <div className={styles.category}><Skeleton key={index} height={72} /></div>)
            }
        </div>
    )
}

export default CategoriesLoading;